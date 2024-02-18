"use client"


import Link from "next/link"
import { useRouter } from 'next/navigation';
//react icons
import {BsFillMoonStarsFill} from "react-icons/bs"
import Location from './Location';



export default function NavBar() {
const router = useRouter()
const locationHandler = () => {
    router.push('/Location')
}

  
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
                    <button
                    className="text-white hover:underline"
                    onClick={locationHandler}
                    >
                    Locations
                    </button>
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