"use client"

import { useEffect,useState } from 'react';
import axios from 'axios';
import { LocationProps }from "../types/Location";



export default function Location() {
    const [location, setLocation] = useState<LocationProps[]>([])
    //search for location
    const [search, setSearch] = useState<string>("")
    
    const fetchLocation = async () => {
        try{
        const response = await axios.get(`https://rickandmortyapi.com/api/location?name=${search}`)
        setLocation(response.data.results)
        }catch(error) {
            console.error()
        }

    }
 
    useEffect(() =>{
        fetchLocation()
        
    }, [search])

    return (
        <div
        style={{ margin: 'auto', padding: '4px' }}
        >
            <input
            style={{
                borderRadius: '5px',
                borderRadius: '5px',
                    padding: '10px',
                    margin: '0 0 8px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    width: '100%',
                    boxSizing: 'border-box',
            }}
             type="text" 
             placeholder="search for location"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             />
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', listStyle: 'none' }}>
                {location.map((location) => (
                    <li
                    style={{ marginBottom: '8px', border: '1px solid #ddd', padding: '12px', borderRadius: '8px' }}
                     key={location.id} >
                        <h3 
                        style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px' }}
                        >
                            {location.name} - {location.type}
                            </h3>
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}