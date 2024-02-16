'use client'

import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation'

export default function CharacterDetails() {
   const [details, setDetails] = useState([])
   const params = useParams() 
   // fetch details 
    const fetchDetails = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        setDetails(response.data.results)
        console.log(response.data.results)
    }
    return (
        <div>
        <div className="flex flex-col justify-between "
        width="100%">
         {details.map((details) => (
            <div key={details.id}>
                <h1>{details.name}</h1>
                <img 
                className="rounded-md"
                width={300}
                height={300}
                unoptimized="true"    
                src={details.image} 
                alt={details.name} 
                />
                <p className="text-center text-2xl">{details.status}</p>
                
                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Tipo</strong>   
                 <span className="text-center text-lg">{character.type}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Origin</strong>   
                 <span className="text-center text-lg">{character.origin.name}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Tipo</strong>   
                 <span className="text-center text-lg">{character.type}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Gender</strong>   
                 <span className="text-center text-lg">{character.gender}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Status</strong>   
                 <span className="text-center text-lg">{character.status}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Specie</strong>   
                 <span className="text-center text-lg">{character.species}</span>
                </div>
            </div>
           ))} 
         
        </div>
        </div>
    )
    
}