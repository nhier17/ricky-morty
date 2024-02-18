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
   // notes
   const [notes, setNotes] = useState<string>("")
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
      //back to home page
       const ExitHandler = () => {
            router.push('/')
       }
       // save notes
       const saveNotesHandler = () => {
        //get notes from local storage
        const existingNotes = JSON.parse(localStorage.getItem("characterNotes") || "{}");
        existingNotes[params.id] = notes
        //save notes to local storage
        localStorage.setItem("characterNotes", JSON.stringify(existingNotes))

        setNotes("")
       }


  return (
    <div>
       <div 
        style={{margin: "26px auto 0", padding: "0 26px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
           <img
            className="rounded-lg"
            width={300}
            height={300}
            src={details?.image}
            alt={details?.name} /> 
            <h1 
            style={{ textAlign: "center", margin: "26px auto", fontSize: "24px"}}>
             {details?.name}
             </h1>
                  
                 
            <div
             style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Tipo</strong>
                <span style={{textAlign: "center"}}>{details?.type}</span>
            </div>

            <div 
            style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Origin</strong>
                <span style={{fontWeight:"bold", textAlign: "center"}}>{details?.origin?.name}</span>
            </div>

            <div
             style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Gender</strong>
                <span style={{fontWeight: "bold", textAlign: "center"}}>{details?.gender}</span>
            </div>
            <div
             style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Status</strong>
                <span style={{fontWeight: "bold", textAlign: "center"}}>{details?.status}</span>
            </div>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Species</strong>
                <span style={{fontWeight: "bold", textAlign: "center"}}>{details?.species}</span>
              
            </div>
          
        </div>
        <div 
        style={{
            display: "flex",
            justifyContent: "center",
        }}
        >
            
        <textarea
              style={{
                width: '30%',
                padding: '8px',
                margin: '10px 0',
                borderRadius: '5px',
                border: '1px solid #ccc',
                resize: 'none',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
              }}
          name="note"
          id="note"
          placeholder="Enter your note.."
         col={30}
         row={10}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button
        style={{
          padding: '10px 10px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease-in-out',
        }}
         onClick={saveNotesHandler}>
            Save Note</button>
            </div>
        <button
            style={{
                display: "block",
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
            onClick={ExitHandler}>
            Back
            </button> 
        </div>        
    )
    
}