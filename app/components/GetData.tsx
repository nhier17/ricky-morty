'use client'

import axios from "axios"
import { useEffect, useState } from "react"


export default  function GetData() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios.get( "https://rickandmortyapi.com/api/character")
         setData(response.data.results)
         console.log(response.data.results)
    }
    useEffect(() => {
        fetchData()
    },[])
     
    return (
        <div className="bg-white">
            <h1 className="p-2 my-2 text-black text-center">Rick and Morty!</h1>
            <div className="grid grid-cols-4 gap-4 p-8 relative">
                {data.map((character) => (
                  <div className="border-2 border-black rounded-md" key={character.id}>  
                  <img className="cursor-pointer rounded-md " src={character.image} alt={character.name} /> 
                  <div>
                    <p className="text-black mb-2 ">{character.name}</p>
                  </div>
                  <div className="">
                    <div className="">
                     <p className="text-black text-sm mb-0">{character.location.name}</p>   
                        </div>       
                  </div>
                  </div> 
                ))}
            </div>
        </div>
    )
}