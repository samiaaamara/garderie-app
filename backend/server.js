
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Informations générales sur la garderie
app.get("/api/garderie", (req, res) => {
  res.json({
    nom: "Les Petits Explorateurs",
    description:
      "Une garderie chaleureuse et sécurisée pour accompagner le développement des enfants.",
    adresse: "Tozeur, Tunisie",
    telephone: "+216 00 000 000",
    email: "contact@garderie.tn",
  });
});

// Liste des services
app.get("/api/services", (req, res) => {
  res.json([
    {
      id: 1,
      nom: "Activités créatives",
      description: "Dessin, peinture et bricolage.",
    },
    {
      id: 2,
      nom: "Éveil et apprentissage",
      description: "Des jeux éducatifs adaptés aux enfants.",
    },
    {
      id: 3,
      nom: "Jeux et motricité",
      description: "Des activités ludiques et physiques.",
    },
  ]);
});

// Liste des activités
app.get("/api/activites", (req, res) => {
  res.json([
    { id: 1, nom: "Atelier de dessin", age: "3-5 ans" },
    { id: 2, nom: "Lecture de contes", age: "2-5 ans" },
    { id: 3, nom: "Jeux collectifs", age: "3-6 ans" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
