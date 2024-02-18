import GetData from "./components/Characters";
import LocationPage from './pages/Location';
import { Character } from './types/Character';


interface CharacterProps {
  character: Character;
}



export default function Home<CharacterProps>({character}) {
  return (
    <main>
   <GetData />
   <LocationPage/>
     </main>
  );
}
