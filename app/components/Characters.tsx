'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import Link from 'next/link'

export default  function GetData() {
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    
    // Get the data
    const fetchData = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
         setData(response.data.results)
         console.log(response.data.results)
    }
    useEffect(() => {
        fetchData()
        
    },[])
 
     
    return (
        <div className="">
            <h1 className="p-2 my-2 text-2xl text-center">Rick and Morty!</h1>
            <div className="grid grid-cols-4 gap-4 p-8 relative">
                {data.map((character) => (
                  <div className="border-2 border-green-700 rounded-md overflow-hidden transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110" key={character.id}>  
              <Link href={`/details/${character.id}`}>
                  <img
                   className="cursor-pointer rounded-md "
                   width={300}
                   height={300}
                   unoptimized
                    src={character.image}
                     alt={character.name} /> 
                  </Link>
                  <div>
                    <p className=" text-center">{character.name}</p>
                  </div>
                  </div> 
                ))}
            </div>
        
        </div>
    )
}