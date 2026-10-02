# Stanley Construction 🏗️

> Entreprise Générale du Bâtiment — Gros Œuvre, Murs de Soutènement & Construction à Antananarivo (Madagascar).

Plateforme web vitrine moderne et interactive pour **Stanley Construction**, développée avec Vite, React 18, TypeScript et Tailwind CSS.

---

## 📁 Architecture du Projet

```
stanley-construction/
├── .antigravity/              # Règles d'instructions contextuelles du projet
│   ├── rules.md              # Contraintes de design, charte et stack
│   └── tasks.json            # Définition des sous-tâches agentiques
├── public/
│   ├── assets/               # Logos, photos réelles de chantiers (Atsimondrano)
│   └── favicon.ico           # Favicon du site
├── src/
│   ├── components/           # Navbar, Hero, Values, Services, Portfolio, Contact, Footer
│   │   ├── Navbar.tsx        # Navigation fixe avec menu responsive & WhatsApp
│   │   ├── Hero.tsx          # En-tête interactif, métriques clés et CTA
│   │   ├── Values.tsx        # Piliers techniques (Sols en pente, Reporting diaspora, Dosages)
│   │   ├── Services.tsx      # Cartes des pôles de savoir-faire Tout Corps d'État
│   │   ├── Portfolio.tsx     # Galerie filtrable et lightbox des réalisations à Tana
│   │   ├── Contact.tsx       # Formulaire interactif de devis avec profil demandeur
│   │   ├── LegalModal.tsx    # Fiche de transparence et immatriculations fiscales
│   │   ├── CertifiedBadge.tsx# Badge d'entreprise agréée & immatriculée (NIF/STAT)
│   │   └── Footer.tsx        # Réassurance, mentions légales et navigation
│   ├── styles/
│   │   └── index.css         # Feuille de styles globale, glassmorphism et Tailwind
│   ├── utils/
│   │   └── cn.ts             # Utilitaire de fusion conditionnelle de classes CSS
│   ├── App.tsx               # Point d'assemblage principal
│   └── main.tsx              # Point d'entrée React
├── index.html                # Document HTML racine avec Google Fonts (Inter & Montserrat) & Schema.org
├── package.json              # Dépendances et scripts de build
└── README.md                 # Documentation du projet
```

---

## ⚡ Stack Technique

- **Framework & Bundler** : [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling & Design System** : [Tailwind CSS](https://tailwindcss.com/)
- **Iconographie** : [Lucide React](https://lucide.dev/) (100% vectoriel, zéro dépendance externe)
- **Typographie** : Google Fonts *Inter* & *Montserrat*

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

## 🛡️ Engagements & Cadre Réglementaire (Madagascar)
- **Immatriculation Fiscale** : NIF 5019315595 • STAT 41001 11 2025 0 05583 (Centre Fiscal Itaosy)
- **Garantie Contractuelle** : Décennale et parfait achèvement sur ouvrages de gros œuvre
- **Normes Matériaux** : Aciers FeE500, dosage ciment 350 kg/m³, béton vibré et briques cuites de premier choix
- **Transparence Diaspora** : Comptes-rendus hebdomadaires WhatsApp avec photos & vidéos HD à chaque coulage
