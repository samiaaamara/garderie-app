
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <h1>Bienvenue au Petit Prince !</h1>
            <p>
              Une garderie chaleureuse et sécurisée pour
              accompagner le développement de chaque enfant.
            </p>
            <a href="#garderie" className="btn-yellow">
              Découvrir notre garderie
            </a>
          </div>

          <div className="col-lg-7">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
              alt="Enfants qui jouent"
              className="photo"
              style={{ height: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
