
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GarderieInfo from "./components/GarderieInfo";
import Activites from "./components/Activites";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <GarderieInfo />
        <Services />
        <Activites />
      </main>

      <footer id="contact" className="bg-primary text-white text-center py-4">
        <div className="container">
          <h2 className="h5 fw-bold">Les Petits Explorateurs</h2>
          <p className="mb-1">Une enfance heureuse commence ici.</p>
          <p className="mb-0">Contact : contact@garderie.tn</p>
        </div>
      </footer>
    </>
  );
}
