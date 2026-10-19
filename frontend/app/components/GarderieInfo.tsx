
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
    return <p className="text-center py-4">Chargement des informations...</p>;
  }

  if (erreur || !garderie) {
    return (
      <p className="alert alert-danger">
        {erreur || "Aucune information disponible."}
      </p>
    );
  }

  return (
    <section className="container py-5">
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <h2 className="text-primary fw-bold">{garderie.nom}</h2>
        <p>{garderie.description}</p>
        <p className="mb-1"><strong>Adresse :</strong> {garderie.adresse}</p>
        <p className="mb-1"><strong>Téléphone :</strong> {garderie.telephone}</p>
        <p className="mb-0"><strong>Email :</strong> {garderie.email}</p>
      </div>
    </section>
  );
}
