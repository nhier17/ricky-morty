"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from 'next/link'
import Search from "./Search"


//typescript error
import {Character} from "../types/Character"


interface Props {
    character: Character
}

export default  function GetData({ character }: Props) {
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    //search data
    const [search, setSearch] = useState("");
    console.log()
    // Get the data
    const fetchData = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
         setData(response.data.results)
         console.log(response.data.results)
         };
    
    useEffect(() => {
     fetchData()
                   
    },[pageNumber,search]) 
 
     
    return (
        <div className="">
            <h1 className="p-2 my-2 text-white text-2xl text-center">Rick and Morty!</h1>

            <Search setSearch={setSearch} search={search} setPageNumber={setPageNumber}/>

            <div className="grid grid-cols-2 gap-4 p-8 relative">
                {data.map((character) => (
                  <div className="border-2 border-green-700 rounded-md overflow-hidden transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110" key={character.id}>  
              <Link href={`/character/${character.id}`}>
                
                  <img
                   className="cursor-pointer rounded-md "
                   width={300}
                   height={300}
                   src={character.image}
                   alt={character.name} /> 
                  </Link>
                  <div>
                    <p className="text-white text-center">{character.name}</p>
                  </div>
                  </div> 
                ))}
            </div>
        
        </div>
    )
}