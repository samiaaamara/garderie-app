
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GarderieInfo from "./components/GarderieInfo";
import Activites from "./components/Activites";
export default function Home() {
  return (
    <>
      

      <main>
        <Hero />
        <GarderieInfo />
        <Services />
        <Activites />
      </main>

      
    </>
  );
}
