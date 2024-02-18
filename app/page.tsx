import GetData from "./components/Characters";


type CharacterProps = {
  id: number
   name: string
    status: string
    species: string
    type: string
    gender: string
}


export default function Home(props: CharacterProps) {
  return (
    <main>
   <GetData />
   
     </main>
  );
}
