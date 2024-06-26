"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from 'next/link'
//search
import Search from "./Search"
// pagination
import Pagination from "./Pagination"
//typescript error
import { Character } from '../types/Character';

interface Props {
    id: number,
    character: Character
}

export default  function GetData({ character }: Props) {
    const [data, setData] = useState<Character[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    //search data
    const [search, setSearch] = useState("");
    
    // Get the data
    const fetchData = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
         setData(response.data.results)
         };
    
    useEffect(() => {
     fetchData()
                   
    },[pageNumber,search]) 
 //change page number
    const pageHandler = (selectedPage: {selected: number}) => {
        setPageNumber(selectedPage.selected + 1)
    }
 
    return (
        <div className="container mx-auto">
           
            <Search setSearch={setSearch} search={search} setPageNumber={setPageNumber}/>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8">
                {data.map((character) => (
                  <div className="border-2 border-green-700 rounded-md overflow-hidden transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 shadow-md p-4" key={character.id}>  
              <Link href={`/characters/${character.id}`}>
                
                  <img
                   className="cursor-pointer rounded-md w-full"
                   src={character.image}
                   alt={character.name} /> 
                  </Link>
                  <div>
                    <p className=" text-white font-bold text-center mt-2">{character.name}</p>
                  </div>
                  </div> 
                ))}
            </div>
                <Pagination pageHandler={pageHandler} />    
        </div>
    )
}