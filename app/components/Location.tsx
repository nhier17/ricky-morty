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
                background: 'linear-gradient(35deg, #494949, #313131)',
                borderRadius: '5px',
                padding: '10px',
                margin: '0 0 8px',
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
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', listStyle: 'none' }}>
                {location.map((location) => (
                    <li
                    style={{ marginBottom: '8px', border: '3px solid #23d997', padding: '1rem 2rem', borderRadius: '8px', background: "transparent" }}
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