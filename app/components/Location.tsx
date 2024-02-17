"use client"

import { useEffect,useState } from 'react';
import axios from 'axios';
import Location from "../types/Location";



export default function Location() {
    const [location, setLocation] = useState<Location[]>([])
    //search for location
    const [search, setSearch] = useState<string>("")
    
    const fetchLocation = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?name=${search}`)
        setLocation(response.data.results)
    }
    useEffect(() =>{
        fetchLocation()
    }, [search])
    return (
        <div className="mx-auto p-4">
            <input
            className="p-2 border rounded"
             type="text" 
             placeholder="search for location"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             />
            <ul>
                {location.map((location) => (
                    <li key={location.id} className="mb-4 border p-4 rounded">
                        <h3 className="text-xl font-semibold">
                            {location,name} - {location.type}
                            </h3>
                       <h4 className="text-lg font-medium mb-2">Residents:</h4>   
                       <ul>
                        {location.residents.map((resident) => (
                            <li key={resident.id className="mb-2"}>
                                {resident.name} - {resident.status}
                            </li>
                        ))}
                        </ul>  
                    </li>
                ))}
            </ul>
        </div>
    )
}