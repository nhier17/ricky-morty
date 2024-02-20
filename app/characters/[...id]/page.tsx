'use client';

import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams,useRouter } from 'next/navigation';
import { IoHomeOutline } from "react-icons/io5"
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
           
         const response = await axios.get(`https://rickandmortyapi.com/api/character/${params?.id}`)
        setDetails(response.data) 
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
           alert(`Your note: ${notes}  has been saved `) 
        setNotes("")
       }


  return (
    <>
    
    <div> 
    
        <IoHomeOutline
            style={{
              fontSize: "30px",
             marginBottom: "10px",
             cursor: "pointer",
             backgroundColor: "#23d997"
            }}
            onClick={ExitHandler}
            />
       <div 
        style={{margin: "26px auto 0", padding: "0 26px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
           <img
            style={{
                borderRadius: "8px",
                width: "300",
                height: "300",
            }}
            src={details?.image}
            alt={details?.name} /> 
            <h1 
            style={{ textAlign: "center", margin: "26px auto", fontSize: "24px"}}>
             {details?.name}
             </h1>
                  
                 
            <div
             style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Type</strong>
                <span style={{textAlign: "center" , color: "white"}}>{details?.type}</span>
            </div>

            <div 
            style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Origin</strong>
                <span style={{fontWeight:"bold", textAlign: "center" , color: "white"}}>{details?.origin?.name}</span>
            </div>

            <div
             style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Gender</strong>
                <span style={{fontWeight: "bold", textAlign: "center" , color: "white"}}>{details?.gender}</span>
            </div>
            <div
             style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Status</strong>
                <span style={{fontWeight: "bold", textAlign: "center" , color: "white"}}>{details?.status}</span>
            </div>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid gray", width: "100%", maxWidth: "300px", marginBottom: "26px", padding: "8px", borderRadius: "8px" }}>
                <strong style={{color: "#23d997", textAlign: "center",fontSize: "20px"}}>Species</strong>
                <span style={{fontWeight: "bold", textAlign: "center", color: "white"}}>{details?.species}</span>
              
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
                background: "linear-gradient(35deg, #494949, #313131)",
                width: '30%',
                padding: '8px',
                margin: '10px 0',
                borderRadius: '5px',
                resize: 'none',
                fontSize: '14px',
                color: 'white',
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
                </div>    
                </>    
    )
    
}