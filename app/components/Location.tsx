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

        const  locationWithResidents: locationWithResidents = { ...location, residents: residentsData };
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
    <div style={{
      background: "black"
    }}>
      <input
        style={{
          background: 'linear-gradient(35deg, #494949, #313131)',
          borderRadius: '5px',
          padding: '10px',
          margin: '0 auto 8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          width: '100%',
          boxSizing: 'border-box',
          color: 'white',
        }}
        type="text"
        placeholder="search for location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        
        {locations.map(location => (
          <div key={location.id}>
            <div style={{
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center',
              gap: "10px",
            }}>
            <h2 style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              
            }}>{location.name}</h2>
            <p style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              }}>Type: {location.type}</p>
            <h3 style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              }}>Residents:</h3>
            </div>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: "repeat(auto-fit,minmax(20rem,1fr))",
                gridGap: "1rem",
                listStyle: 'none',
                marginLeft: "20px"
                
              }}
            >
              {location.residents.map(resident => (
                <li
                style={{
                
                  border: '2px solid #23d997',
                  width: '100%',
                  maxWidth: '300px',
                  marginBottom: '26px',
                  padding: '8px',
                  borderRadius: '8px',
                }}
                key={resident.id}>
                  <div>
                    <Link href={`/character/${resident.id}`}>
                    <img
                      src={resident.image}
                      alt={resident.name}
                      style={{ borderRadius: '4px', marginBottom: '8px' }}
                    />
                    </Link>
                  </div>
                  <div>
                    <p style={{
                      color: 'white',
                      margin: "auto",
                      width: "50%",
                      padding: "10px",
                      fontWeight: 'bold',
                    }}>Name: {resident.name}</p>
                    <p style={{
                      color: "white",
                      margin: "auto",
                      width: "50%",
                      padding: "10px",
                      fontWeight: 'bold',
                    }}>Status: {resident.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <button
          style={{
            margin: "4px auto 0",
            cursor: "pointer",
            color: "white",
            background: "orange",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease-in-out",
          }}
          onClick={() => pageHandler(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span style={{ margin: '0 8px',color:"white" }}> {currentPage}</span>
        <button
          style={{
            margin: "4px auto 0",
            cursor: "pointer",
            color: "white",
            background: "orange",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease-in-out",
          }}
          onClick={() => pageHandler(currentPage + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default Locations;
