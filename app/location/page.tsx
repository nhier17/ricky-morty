"use client"
        

import { IoHomeOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import Locations from '../components/Location';



export default function LocationPage() {
    const router = useRouter()
    const exitHandler = () => {
        router.push('/');
    }
    return (
        <div>
            
            <IoHomeOutline
            style={{
              fontSize: "30px",
             marginBottom: "10px",
             cursor: "pointer",
             backgroundColor: "#23d997"
            }}
            onClick={exitHandler}
            />
            <Locations/>
        </div>
    )
}
  