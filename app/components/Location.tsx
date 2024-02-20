"use client"


import { useState, useEffect } from 'react';
import axios from 'axios';
import  Link from 'next/link';

//types of responses
interface LocationResponse {
    id: number;
    name: string;
    type: string;
    results: string[];
  }
  
  interface ResidentResponse {
    id: number;
    name: string;
    image: string;
    status: string;
   
  }
  interface LocationWithResidents extends Omit<LocationResponse, 'residents'> {
    residents: ResidentResponse[];
  }

const Locations = () => {
  const [locations, setLocations] = useState<LocationWithResidents[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get<LocationResponse>(`https://rickandmortyapi.com/api/location?page=${currentPage}&name=${search}`);
        const locationsData = response.data.results;

        // Extract the desired location based on currentPage
        const location = locationsData[currentPage - 1];

        // Fetch residents for the location
        const residentsData = await Promise.all<ResidentResponse>(
            
            location.residents.map(async (residentUrl) => {
              const residentResponse = await axios.get<ResidentResponse>(residentUrl);
              return residentResponse.data;
            })
          );

        const  locationWithResidents: LocationWithResidents = { ...location, residents: residentsData };
        setLocations([locationWithResidents]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLocations();
  }, [currentPage, search]);

  const pageHandler = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div>
      <div className="mt-20">
      <input
      className="w-2/3 px-4 py-2 text-white bg-gradient-to-br from-gray-800 to-gray-600  rounded-md focus:outline-none  "
        type="text"
        placeholder="search for location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
</div>
      <div>
        
        {locations.map(location => (
          <div key={location.id}>
            <div className="flex justify-center items-center gap-4">
            <h2 className="text-white text-lg font-bold">{location.name}</h2>
            <p className="text-white text-lg font-bold">Type: {location.type}</p>
            <h3 className="text-white text-lg font-bold">Residents:</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8">
              {location.residents.map(resident => (
                <li
                className="border-2 border-green-500  overflow-hidden transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 shadow-md p-4"
                key={resident.id}>
                  <div>
                    <Link href={`/character/${resident.id}`}>
                    <img
                      src={resident.image}
                      alt={resident.name}
                     />
                    </Link>
                  </div>
                  <div>
                    <p className="text-white text-center font-bold">Name: {resident.name}</p>
                    <p className="text-white text-center font-bold">Status: {resident.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <button
      className="m-4 mx-auto cursor-pointer text-white bg-orange-500 border-none p-2 md:p-4 rounded-5 text-base md:text-lg font-bold shadow-md transition duration-300 ease-in-out hover:bg-orange-600"
          onClick={() => pageHandler(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span style={{ margin: '0 8px',color:"white" }}> {currentPage}</span>
        <button
        className="m-4 mx-auto cursor-pointer text-white bg-orange-500 border-none p-2 md:p-4 rounded-5 text-base md:text-lg font-bold shadow-md transition duration-300 ease-in-out hover:bg-orange-600"
          onClick={() => pageHandler(currentPage + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default Locations;
