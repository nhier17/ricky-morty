"use client"


import Link from "next/link"
//react icons
import {BsFillMoonStarsFill} from "react-icons/bs"

export default function NavBar() {


  
    return (
        <nav className="bg-gray-800 p-4 ">
           
            <div className="mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">
                    Rick and Morty

                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="/Character" className="text-white hover:underline">
                    Characters
                    </Link>
                    <Link href="/about" className="text-white hover:underline">
                    Locations
                    </Link>
                </div>
                
                    <ul className="flex items-center">
                        <li>
                           <BsFillMoonStarsFill 
                           className="cursor-pointer text-2xl"
                           
                           /> 
                        </li>
                    </ul>
                
            
            </div>
        </nav>
    )
}