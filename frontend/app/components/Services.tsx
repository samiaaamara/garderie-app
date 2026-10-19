
"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  nom: string;
  description: string;
};

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
    return <p className="text-center py-4">Chargement des services...</p>;
  }

  if (erreur) {
    return <p className="alert alert-danger">{erreur}</p>;
  }

  return (
    <section id="services" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Nos services</h2>
          <p className="text-secondary">
            Tout pour accompagner le développement de votre enfant.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center">
                <div className="card-body">
                  <h3 className="h5 fw-bold">{service.nom}</h3>
                  <p className="text-secondary">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
