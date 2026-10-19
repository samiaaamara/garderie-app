
export default function Hero() {
  return (
    <section id="accueil" className="bg-light py-5">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge bg-warning text-dark mb-3">
              Bienvenue chez nous !
            </span>

            <h1 className="display-4 fw-bold text-primary">
              Grandir, apprendre et s’épanouir ensemble
            </h1>

            <p className="lead text-secondary my-4">
              Un environnement chaleureux et sécurisé où chaque enfant
              découvre le monde, développe sa créativité et se fait de nouveaux amis.
            </p>

            <a
              href="#services"
              className="btn btn-primary btn-lg rounded-pill px-4"
            >
              Découvrir nos services
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src="https://placehold.co/700x450/FFE8C2/62472C?text=Bienvenue+%C3%A0+la+garderie"
              alt="Illustration de la garderie"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
