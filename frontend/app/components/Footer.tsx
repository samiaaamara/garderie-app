
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 py-5">

          {/* Présentation */}
          <div className="col-lg-4 col-md-6">
            <Link
              href="/"
              className="footer-brand d-inline-flex align-items-center gap-2 mb-3"
            >
              <span className="footer-brand-icon">♔</span>
              <span>
                Le Petit Prince
                <small className="d-block">Garderie & Éveil</small>
              </span>
            </Link>

            <p className="footer-description">
              Un espace chaleureux, sécurisé et bienveillant,
              où chaque enfant grandit, découvre et s'épanouit
              à son rythme.
            </p>

            <div className="footer-decoration">
              ✨ Chaque enfant est un petit trésor !
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Liens rapides</h5>
            <ul className="footer-links">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/#garderie">Notre garderie</Link></li>
              <li><Link href="/#services">Nos services</Link></li>
              <li><Link href="/#activites">Nos activités</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Notre univers</h5>
            <ul className="footer-links">
              <li>🎨 Activités créatives</li>
              <li>📚 Éveil et apprentissage</li>
              <li>🧩 Jeux éducatifs</li>
              <li>🌱 Découverte et autonomie</li>
              <li>🤝 Vie en groupe</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Nous contacter</h5>

            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>Consultez notre adresse dans la section garderie.</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <Link href="/#garderie">
                  Nos coordonnées
                </Link>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <Link href="/#garderie">
                  Nous écrire
                </Link>
              </li>
            </ul>

            <Link
              href="/#contact"
              className="btn footer-button rounded-pill mt-2"
            >
              Parlons de votre enfant →
            </Link>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 py-3">
          <p className="mb-0">
            © {year} Le Petit Prince. Tous droits réservés.
          </p>

          <p className="mb-0">
            Fait avec <span className="footer-heart">♥</span> pour les enfants
          </p>
        </div>
      </div>
    </footer>
  );
}
