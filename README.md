@'
# 👑 Le Petit Prince — Garderie & Éveil

Application web de présentation d'une garderie d'enfants, développée avec Next.js, TypeScript, Bootstrap 5 et Node.js.

## 📋 Présentation

**Le Petit Prince** est un site web destiné à présenter une garderie, ses services et ses activités. Il propose une interface accueillante, responsive et adaptée aux parents qui souhaitent découvrir la structure.

## ✨ Fonctionnalités

- 🏠 Page d'accueil et présentation de la garderie
- 🧸 Présentation des services proposés
- 🎨 Affichage des activités pour enfants
- 📷 Illustrations et photos
- 📱 Interface responsive pour ordinateur, tablette et mobile
- 🧭 Navigation avec liens vers les différentes sections
- 📞 Accès aux informations de contact
- 🔌 API REST développée avec Express
- 🔄 Récupération des informations depuis le backend
- 🦶 Pied de page avec liens utiles et présentation de la garderie

## 🛠️ Technologies utilisées

### Frontend
- Next.js
- React
- TypeScript
- Bootstrap 5
- CSS

### Backend
- Node.js
- Express.js
- API REST

### Gestion de versions
- Git
- GitHub

## 📁 Structure du projet

```text
garderie-app/
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── GarderieInfo.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Activites.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── .env.local
├── backend/
│   └── server.js
└── README.md