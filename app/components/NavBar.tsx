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
        <nav className="bg-gray-800 p-4 mx-auto fixed top-0 left-0 right-0 w-full">
           
            <div className=" flex justify-between items-center gap-4 z-10 ">
                <div className="text-white text-lg font-bold">
                    <Link href="/" className="text-3xl">
                    Rick & <span className="text-teal-600">Morty</span>

                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href="/Character" className="text-white hover:underline text-lg">
                    Characters
                    </Link>
                    <button
                    className="text-white hover:underline text-lg"
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