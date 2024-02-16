'use client'

import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation'

export default function CharacterDetails() {
   const [details, setDetails] = useState([])
   const params = useParams() 
    const fetchDetails = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        setDetails(response.data.results)
        console.log(response.data.results)
    }
    return (
        <div>
        <div>
           {details.map((details) => (
            <div key={details.id}>
                <h1>{details.name}</h1>
                <img src={details.image} alt={details.name} />
                <p>{details.status}</p>
            </div>
           ))} 
         
        </div>
        </div>
    )
    
}