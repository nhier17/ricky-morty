import GetData from "./components/Characters";
import { Character } from './types/Character';

interface ChracterProps {
  character: Character
}


export default function Home<CharacterProps>({character} : ChracterProps) {
  return (
    <main>
   <GetData />
   
     </main>
  );
}
