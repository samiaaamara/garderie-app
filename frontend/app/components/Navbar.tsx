
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
      <div className="container">
        {/* Logo et nom de la garderie */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          onClick={closeMenu}
        >
          <span className="brand-icon">♔</span>
          <span className="brand-name">
            Le Petit <span>Prince</span>
            <small className="d-block brand-subtitle">
              Garderie & Éveil
            </small>
          </span>
        </Link>

        {/* Bouton du menu mobile */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens de navigation */}
        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link"
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/#garderie"
                className="nav-link"
                onClick={closeMenu}
              >
                Notre garderie
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/#services"
                className="nav-link"
                onClick={closeMenu}
              >
                Nos services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/#activites"
                className="nav-link"
                onClick={closeMenu}
              >
                Activités
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/#contact"
                className="nav-link"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link
            href="/#contact"
            className="btn btn-contact rounded-pill px-4 py-2 mt-3 mt-lg-0"
            onClick={closeMenu}
          >
            Nous contacter <span className="ms-1">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
