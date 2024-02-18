import GetData from "./components/Characters";
import { Character } from './types/Character';

interface CharacterProps {
  character: Character;
}

const Home: React.FC<CharacterProps> = ({ character }: CharacterProps) => {
  return (
    <main>
      <GetData />
    </main>
  );
};

export default Home;
