
"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  nom: string;
  description: string;
};

const illustrations = [
  {
    icon: "💛",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    alt: "Accueil et accompagnement des enfants",
  },
  {
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    alt: "Activités créatives et apprentissage",
  },
  {
    icon: "🛡️",
    image:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=800&q=80",
    alt: "Environnement accueillant pour les enfants",
  },
];

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    async function chargerServices() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error("L'URL de l'API n'est pas configurée.");
        }

        const response = await fetch(`${apiUrl}/services`);

        if (!response.ok) {
          throw new Error("Impossible de charger les services.");
        }

        const data: Service[] = await response.json();
        setServices(data);
      } catch (error) {
        setErreur(
          error instanceof Error
            ? error.message
            : "Une erreur est survenue."
        );
      } finally {
        setChargement(false);
      }
    }

    chargerServices();
  }, []);

  if (chargement) {
    return (
      <p className="text-center py-5">
        Chargement des services...
      </p>
    );
  }

  if (erreur) {
    return (
      <div className="container py-4">
        <p className="alert alert-danger">{erreur}</p>
      </div>
    );
  }

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-warning mb-2">
            🌈 Pour grandir et s'épanouir
          </span>

          <h2>Nos services ⭐</h2>

          <p className="text-secondary">
            Tout pour accompagner le développement de votre enfant.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => {
            const illustration =
              illustrations[index % illustrations.length];

            return (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <article className="service-card">
                  <img
                    src={illustration.image}
                    alt={illustration.alt}
                    className="photo mb-3"
                    style={{ height: "190px" }}
                  />

                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="fs-3">
                      {illustration.icon}
                    </span>

                    <h3 className="mb-0">{service.nom}</h3>
                  </div>

                  <p className="text-secondary mb-0">
                    {service.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>

        {services.length === 0 && (
          <p className="text-center text-secondary">
            Aucun service disponible pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}
