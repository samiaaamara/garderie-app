
"use client";

import { useEffect, useState } from "react";

type Activite = {
  id: number;
  nom: string;
  age: string;
};

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
    return <p className="text-center py-4">Chargement des activités...</p>;
  }

  if (erreur) {
    return <p className="alert alert-danger">{erreur}</p>;
  }

  return (
    <section id="activites" className="bg-light py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Nos activités</h2>
          <p className="text-secondary">
            Des activités ludiques adaptées à chaque âge.
          </p>
        </div>

        <div className="row g-4">
          {activites.map((activite) => (
            <div className="col-md-4" key={activite.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                <div className="display-5 mb-3">🧸</div>
                <h3 className="h5 fw-bold">{activite.nom}</h3>
                <p className="text-secondary mb-0">
                  Âge recommandé : {activite.age}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
