import Location from '../app/components/Location';
import { IoHomeOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';


export default function LocationPage() {
    const router = useRouter()
    const exitHandler = () => {
        router.push('/');
    }
    return (
        <div>
            <IoHomeOutline
            style={{
                fontSize: "50px",
             marginBottom: "10px",
             cursor: "pointer",
             backgroundColor: "#23d997"
            }}
            onClick={exitHandler}
            />
            <Location/>
        </div>
    )
}