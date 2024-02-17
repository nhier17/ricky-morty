'use client';

import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams,useRouter } from 'next/navigation';
import { Character } from '../../types/Character';


interface Props {
    character: Character
}

export default function CharacterDetails({ character }: Props ) {
   const [details, setDetails] = useState<Character>(character)
    const params = useParams() 
    const router = useRouter()
      
    const fetchDetails = async () => {
        try {
         if (params?.id && params.id !== undefined) {   
         const response = await axios.get(`https://rickandmortyapi.com/api/character/${params?.id}`)
        setDetails(response.data) 
         } else {
            console.error()
         }

        } catch (error) {
            console.log(error, "Error getting details")
        }
       
        }

        useEffect(() => {
       fetchDetails()
      },[params?.id])
       const ExitHandler = () => {
            router.push('/')
       }

  return (
    <div style={{background: "black"}}>
          <button
           style={{cursor: "pointer", color: "orange",border: "none", background: "gray"}}
            onClick={ExitHandler}>
            Back
            </button> 
        <div style={{margin: "26px auto 0", padding: "0 26px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
           <img
            className="rounded-lg"
            width={300}
            height={300}
            src={details?.image}
            alt={details?.name} /> 
            <h1 
            style={{ textAlign: "center", margin: "26px auto", color: "white", fontSize: "24px"}}>
             {details?.name}
             </h1>

            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "yellow", textAlign: "center",fontSize: "20px"}}>Tipo</strong>
                <span style={{color: "white", textAlign: "center"}}>{details?.type}</span>
            </div>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "yellow", textAlign: "center",fontSize: "20px"}}>Origin</strong>
                <span style={{color: "white", textAlign: "center"}}>{details?.origin?.name}</span>
            </div>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "yellow", textAlign: "center",fontSize: "20px"}}>Gender</strong>
                <span style={{color: "white", textAlign: "center"}}>{details?.gender}</span>
            </div>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "yellow", textAlign: "center",fontSize: "20px"}}>Status</strong>
                <span style={{color: "white", textAlign: "center"}}>{details?.status}</span>
            </div>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "yellow", textAlign: "center",fontSize: "20px"}}>Species</strong>
                <span style={{color: "white", textAlign: "center"}}>{details?.species}</span>
            </div>
        </div>
        </div>        
    )
    
}