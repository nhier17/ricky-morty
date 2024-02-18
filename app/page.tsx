import GetData from "./components/Characters";


type HomeProps = {
  id:number
}



export default function Home<HomeProps>(props) {
  return (
    <main>
   <GetData character={props.id} />
   
     </main>
  );
}
