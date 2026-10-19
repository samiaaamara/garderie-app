
"use client";

import { useEffect, useState } from "react";

type Garderie = {
  nom: string;
  description: string;
  adresse: string;
  telephone: string;
  email: string;
};

export default function GarderieInfo() {
  const [garderie, setGarderie] = useState<Garderie | null>(null);
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    async function chargerGarderie() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error("L'URL de l'API n'est pas configurée.");
        }

        const response = await fetch(`${apiUrl}/garderie`);

        if (!response.ok) {
          throw new Error("Impossible de charger les informations.");
        }

        const data: Garderie = await response.json();
        setGarderie(data);
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

    chargerGarderie();
  }, []);

  if (chargement) {
    return (
      <p className="text-center py-5">
        Chargement des informations...
      </p>
    );
  }

  if (erreur || !garderie) {
    return (
      <div className="container py-4">
        <p className="alert alert-danger">
          {erreur || "Aucune information disponible."}
        </p>
      </div>
    );
  }

  return (
    <section id="garderie" className="container section">
      <div className="info-section">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=1000&q=80"
              alt="Espace accueillant pour les enfants"
              className="photo"
              style={{ height: "280px" }}
            />
          </div>

          <div className="col-lg-7">
            <h2 className="mb-3">
              🏡 {garderie.nom}
            </h2>

            <p className="mb-4">
              {garderie.description}
            </p>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <span className="fs-3">📍</span>
                  <div>
                    <strong>Adresse</strong>
                    <p className="mb-0">{garderie.adresse}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <span className="fs-3">📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <p className="mb-0">{garderie.telephone}</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex align-items-start gap-3">
                  <span className="fs-3">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p className="mb-0">
                      <a href={`mailto:${garderie.email}`}>
                        {garderie.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${garderie.email}`}
              className="btn-yellow mt-4"
            >
              Nous contacter 💛
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
