"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            🧸 Les Petits Explorateurs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#accueil" onClick={() => setMenuOpen(false)}>
                Accueil
              </a>
              <a className="nav-link" href="#services" onClick={() => setMenuOpen(false)}>
                Nos services
              </a>
              <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
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
                découvre le monde, développe sa créativité et se fait de
                nouveaux amis.
              </p>

              <a href="#services" className="btn btn-primary btn-lg rounded-pill px-4">
                Découvrir nos services
              </a>
            </div>

            <div className="col-lg-6">
              <img
                src="https://placehold.co/700x450/FFE8C2/62472C?text=Bienvenue+%C3%A0+la+garderie"
                alt="Illustration accueillante de la garderie"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary">Nos services</h2>
            <p className="text-secondary">
              Tout pour accompagner le développement de votre enfant.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                <div className="card-body">
                  <div className="display-4 mb-3">🎨</div>
                  <h3 className="h5 fw-bold">Activités créatives</h3>
                  <p className="text-secondary">
                    Dessin, peinture et bricolage pour développer
                    l’imagination et la créativité.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                <div className="card-body">
                  <div className="display-4 mb-3">📚</div>
                  <h3 className="h5 fw-bold">Éveil et apprentissage</h3>
                  <p className="text-secondary">
                    Des jeux éducatifs adaptés à l’âge et au rythme
                    de chaque enfant.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                <div className="card-body">
                  <div className="display-4 mb-3">⚽</div>
                  <h3 className="h5 fw-bold">Jeux et motricité</h3>
                  <p className="text-secondary">
                    Des activités ludiques pour bouger, coopérer et
                    apprendre à vivre ensemble.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-primary text-white text-center py-4">
        <div className="container">
          <h2 className="h5 fw-bold">Les Petits Explorateurs</h2>
          <p className="mb-1">Une enfance heureuse commence ici.</p>
          <p className="mb-0">Contact : contact@garderie.tn</p>
        </div>
      </footer>
    </main>
  );
}