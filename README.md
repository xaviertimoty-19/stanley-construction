# Stanley Construction 🏗️

> Entreprise Générale du Bâtiment — Rénovation de Prestige & Construction RE2020.

Plateforme web vitrine moderne et interactive pour **Stanley Construction**, développée avec Vite, React 18, TypeScript et Tailwind CSS.

---

## 📁 Architecture du Projet

```
stanley-construction/
├── .antigravity/              # Règles d'instructions contextuelles du projet
│   ├── rules.md              # Contraintes de design, charte et stack
│   └── tasks.json            # Définition des sous-tâches agentiques
├── public/
│   ├── assets/               # Logos, maquettes de chantiers, icônes
│   └── favicon.ico           # Favicon du site
├── src/
│   ├── components/           # Navbar, Hero, Services, Portfolio, Contact, Footer
│   │   ├── Navbar.tsx        # Navigation fixe avec menu responsive
│   │   ├── Hero.tsx          # En-tête interactif, métriques clés et CTA
│   │   ├── Services.tsx      # Cartes des pôles de savoir-faire
│   │   ├── Portfolio.tsx     # Galerie filtrable des réalisations
│   │   ├── Contact.tsx       # Formulaire de devis avec estimation de surface
│   │   └── Footer.tsx        # Réassurance, décennale SMA BTP et mentions
│   ├── styles/
│   │   └── index.css         # Feuille de styles globale, glassmorphism et Tailwind
│   ├── App.tsx               # Point d'assemblage principal
│   └── main.tsx              # Point d'entrée React
├── artifacts/                # Dossier pour les captures et rendus des agents
├── index.html                # Document HTML racine avec Google Fonts (Outfit & Plus Jakarta)
├── package.json              # Dépendances et scripts de build
└── README.md                 # Documentation du projet
```

---

## ⚡ Stack Technique

- **Framework & Bundler** : [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling & Design System** : [Tailwind CSS](https://tailwindcss.com/)
- **Iconographie** : [Lucide React](https://lucide.dev/)
- **Typographie** : Google Fonts *Outfit* & *Plus Jakarta Sans*

---

## 🚀 Démarrage Rapide

### 1. Installation des dépendances
```bash
npm install
```

### 2. Démarrage du serveur de développement
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173`.

### 3. Build de production & Vérification TypeScript
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

### 4. Prévisualisation du build
```bash
npm run preview
```

---

## 🛡️ Engagements & Labels
- **Garantie Décennale** : SMA BTP
- **Certification** : RGE Qualibat
- **Réglementation** : Norme environnementale RE2020
