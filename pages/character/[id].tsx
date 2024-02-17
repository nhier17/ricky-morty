'use client';

import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation';
import { Character } from '../../types/Character';


interface Props {
    character: Character
}

export default function CharacterDetails({ character }: Props ) {
   const [details, setDetails] = useState<Character>({})
    const params = useParams() 
      
    const fetchDetails = async () => {
        try {
         const response = await axios.get(`https://rickandmortyapi.com/api/character/${params?.id}`)
        setDetails(response.data) 
        } catch (error) {
            
        }
       
        }

        useEffect(() => {
       fetchDetails()
      },[params?.id])

  return (
        <div className="">
               <img 
                width={300}
                height={300}
                src={details?.image} 
                alt={details?.name} 
                />
                <h1>{details?.name}</h1>
                <p className="text-center text-2xl">{details?.status}</p>
                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Tipo </strong>   
                 <span className="text-center text-2xl">{details?.type}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Origin </strong>   
                 <span className="text-center text-lg">{details?.origin?.name}</span>
                </div>

               
                <div className="bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <p className="text-yellow-100 text-xl text-center">Gender</p>   
                 <span className="text-center text-lg">{details?.gender}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Status</strong>   
                 <span className="text-center text-lg">{details?.status}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-700 border-2 border-green-100 p-8 rounded-md">
                 <strong className="text-yellow-100 text-xl text-center">Specie</strong>   
                 <span className="text-center text-teal-600 text-lg">{details?.species}</span>
                </div>
                    
        </div>
    )
    
}