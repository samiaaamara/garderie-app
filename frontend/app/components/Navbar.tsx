
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#accueil">
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
  );
}
