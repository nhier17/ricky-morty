import GetData from "./components/Characters";
import LocationPage from './pages/Location';
import { Character } from './types/Character';


interface Props {
  character: Character;
}



export default function Home({character}: Props) {
  return (
    <main>
   <GetData />
   <LocationPage/>
     </main>
  );
}
