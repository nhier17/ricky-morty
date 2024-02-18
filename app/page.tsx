import GetData from "./components/Characters";


type ChracterProps = {
  id: number
   name: string
    status: string
    species: string
    type: string
    gender: string
}


export default function Home(ChracterProps) {
  return (
    <main>
   <GetData />
   
     </main>
  );
}
