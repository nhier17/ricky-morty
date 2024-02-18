import GetData from "./components/Characters";
import LocationPage from './pages/Location';
import { Character } from './types/Character';


interface CharacterProps {
  character: Character;
}



export default function Home({character}: CharacterProps) {
  return (
    <main>
   <GetData />
   <LocationPage/>
     </main>
  );
}
