'use client'

import axios from "axios"
import { useEffect, useState } from "react"


export default  function GetData() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios.get( "https://rickandmortyapi.com/api/character")
         setData(response.data)
         console.log(response.data)
    }
    useEffect(() => {
        fetchData()
    },[])
     
    return (
        <div>
            <h1 className="p-2 my-2">Rick and Morty!</h1>
        </div>
    )
}