"use client"


import Link from "next/link"

//react icons
import {BsFillMoonStarsFill} from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci";


export default function NavBar() {
  
    return (
        <nav className="bg-gray-800 p-4 mx-auto fixed top-0 left-0 right-0 w-full">
           
            <div className=" flex justify-between items-center  z-10 ">
                <div className="text-white text-lg font-bold">
                    <Link href="/" className="text-3xl">
                    Rick & <span className="text-teal-600">Morty</span>

                    </Link>
                </div>
                
                   <div className="flex items-center justify-center gap-4">
                    <span>
                       <Link href="/location"> 
                    <CiLocationOn
                    className="text-white text-4xl"
                    />
                    </Link>
                    </span>
                          
                    <ul>
                        <li>
                            
                           <BsFillMoonStarsFill 
                           className="cursor-pointer text-4xl"
                             /> 
                        </li>
                    </ul>
                
                    </div>
            </div>
        </nav>
    )
}