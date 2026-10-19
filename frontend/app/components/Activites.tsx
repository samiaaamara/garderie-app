
"use client";

import { useEffect, useState } from "react";

type Activite = {
  id: number;
  nom: string;
  age: string;
};

const illustrations = [
  {
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    alt: "Peinture et activités artistiques",
  },
  {
    icon: "📚",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    alt: "Apprentissage et découverte",
  },
  {
    icon: "🧸",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    alt: "Jeux et loisirs pour enfants",
  },
];

export default function Activites() {
  const [activites, setActivites] = useState<Activite[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    async function chargerActivites() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error("L'URL de l'API n'est pas configurée.");
        }

        const response = await fetch(`${apiUrl}/activites`);

        if (!response.ok) {
          throw new Error("Impossible de charger les activités.");
        }

        const data: Activite[] = await response.json();
        setActivites(data);
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

    chargerActivites();
  }, []);

  if (chargement) {
    return (
      <p className="text-center py-5">
        Chargement des activités...
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
    <section id="activites" className="activities-section section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-warning mb-2">
            🎉 Apprendre en s'amusant
          </span>

          <h2>Nos activités 🧩</h2>

          <p className="text-secondary">
            Des moments de joie, de créativité et de découverte
            adaptés à chaque âge.
          </p>
        </div>

        <div className="row g-4">
          {activites.map((activite, index) => {
            const illustration =
              illustrations[index % illustrations.length];

            return (
              <div className="col-md-6 col-lg-4" key={activite.id}>
                <article className="activity-card">
                  <img
                    src={illustration.image}
                    alt={illustration.alt}
                    className="photo mb-3"
                    style={{ height: "190px" }}
                  />

                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="fs-2">
                      {illustration.icon}
                    </span>

                    <h3 className="mb-0">{activite.nom}</h3>
                  </div>

                  <p className="text-secondary mb-0">
                    <strong>👶 Âge recommandé :</strong>{" "}
                    {activite.age}
                  </p>
                </article>
              </div>
            );
          })}
        </div>

        {activites.length === 0 && (
          <p className="text-center text-secondary">
            Aucune activité disponible pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}
