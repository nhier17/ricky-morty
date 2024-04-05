'use client';

import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams,useRouter } from 'next/navigation';
import { Character } from '../types/Character';
import { toast } from 'sonner'


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
           toast.success(`Your note: ${notes}  has been saved `) 
        setNotes("")
       }


  return (
    <div>
         <div className="flex flex-col justify-center items-center m-6 p-6">
           <img
            className="rounded-md mt-10"
            width={300}
            height={300}
            src={details?.image}
            alt={details?.name} /> 
            <h1 className="text-center text-xl text-white p-4">{details?.name}</h1>
                  
                 
            <div className="flex flex-col items-center justify-center border-2 border-gray-500 w-full max-w-md mb-6 p-2 rounded-md">
            <strong className="text-teal-500 text-center text-lg">Type</strong>
                <span className="text-center text-white font-bold">{details?.type}</span>
            </div> 

            <div className="flex flex-col items-center justify-center border-2 border-gray-500 w-full max-w-md mb-6 p-2 rounded-md">
                <strong className="text-teal-500 text-center text-lg">Origin</strong>
                <span className="text-center text-white font-bold">{details?.origin?.name}</span>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-gray-500 w-full max-w-md mb-6 p-2 rounded-md">
                <strong className="text-teal-500 text-center text-lg">Gender</strong>
                <span className="text-center text-white font-bold">{details?.gender}</span>
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-gray-500 w-full max-w-md mb-6 p-2 rounded-md">
                <strong className="text-teal-500 text-center text-lg">Status</strong>
                <span className="text-center text-white font-bold">{details?.status}</span>
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-gray-500 w-full max-w-md mb-6 p-2 rounded-md">
                <strong className="text-teal-500 text-center text-lg">Species</strong>
                <span className="text-center text-white font-bold">{details?.species}</span>
              
            </div>
          
        </div>
        <div className="flex justify-center items-center">
            
        <textarea
         className="bg-gradient-to-r from-gray-800 to-gray-600 w-1/3 p-2 m-2 rounded-md resize-none text-white"
         name="note"
         name="note"
          id="note"
          placeholder="Enter your note.."
         col={30}
         row={10}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <button
      className="px-4 py-2 bg-orange-500 text-white rounded-md font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600"
       onClick={saveNotesHandler}>
            Save Note</button>
            </div>
            </div>    
    )
    
}