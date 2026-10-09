# Project Rules & Guidelines — Stanley / Bricon Construction

Bienvenue dans le dépôt **Stanley / Bricon Construction**. Ce document contient les règles d'architecture, les normes de style, l'organisation des composants et les conventions de développement du projet.

---

## 1. Stack Technique Active

- **Framework Web** : Single Page Application (SPA) propulsée par **Vite 6** et **React 18** (Fast Refresh, bundle optimisé).
- **Langage** : TypeScript 5.7+ (Strict Mode activé dans `tsconfig.json`).
- **Styling & Thème** : 
  - **Tailwind CSS 3.4** avec palette industrielle dédiée :
    - Noir profond / Anthracite : `stanley-black` (`#09090b`), `stanley-charcoal` (`#18181b`), `stanley-steel` (`#27272a`).
    - Jaune sécurité / Or BTP : `stanley-yellow` (`#f59e0b`), `stanley-gold` (`#d97706`).
  - **Dark Mode automatique** via `matchMedia('(prefers-color-scheme: dark)')` synchronisé avec la classe `dark` de Tailwind.
  - **Typographies Google Fonts** : `Montserrat` pour les titres percutants, `Inter` pour la lisibilité des textes techniques.
- **Icônes & UI** : Lucide React (`lucide-react`), SVG vectoriels sur mesure pour l'emblème et le logo officiel, utilitaire `cn.ts` (`clsx` + `tailwind-merge`).
- **SEO & Référencement Local** : Données structurées Schema.org JSON-LD de type `HomeAndConstructionBusiness` (Madagascar / Antananarivo, Analamanga, NIF, STAT).
- **Hébergement & Déploiement** : Vercel (`stanley-construction.vercel.app`).

---

## 2. Structure et Organisation des Fichiers

```
c:/Users/Dev/Documents/Bricon Construction/
├── .agents/                           # Skills & Règles spécifiques au projet pour assistants IA
│   ├── AGENTS.md                      # Règles globales du projet (ce document de référence)
│   └── skills/                        # Guides et compétences spécialisées
│       ├── bricon-architecture/       # Directives d'architecture et de composition
│       ├── quote-estimator/           # Logique de calcul des devis & coefficients
│       ├── seo-schema-markup/         # Directives SEO et balisage Schema.org
│       └── ...
├── public/                            # Fichiers statiques publics
│   ├── assets/
│   │   ├── chantiers/                 # Photothèque des chantiers réels (Atsimondrano R+2, etc.)
│   │   ├── logo.svg                   # Logo vectoriel officiel Stanley Construction
│   │   ├── logo-dark.svg              # Variante sombre du logo
│   │   └── logo-emblem.svg            # Blason / Favicon vectoriel
│   └── favicon.ico                    # Favicon du site
├── scripts/                           # Scripts d'automatisation de captures et de tests (Puppeteer)
├── src/                               # Code source de l'application
│   ├── components/                    # Composants d'interface React modulaires
│   │   ├── CertifiedBadge.tsx         # Bloc officiel NIF / STAT / Fiscalité Madagascar
│   │   ├── Contact.tsx                # Formulaire de devis avec estimation en temps réel & WhatsApp
│   │   ├── Footer.tsx                 # Pied de page institutionnel & liens légaux
│   │   ├── Hero.tsx                   # Section d'en-tête avec métriques et CTA unique
│   │   ├── LegalModal.tsx             # Modal officiel de transparence et données d'immatriculation
│   │   ├── Logo.tsx                   # Composant vectoriel réactif avec variantes thématiques
│   │   ├── Navbar.tsx                 # Barre de navigation fixe avec accès rapide WhatsApp & Téléphone
│   │   ├── Portfolio.tsx              # Galerie chantiers avec Lightbox interactive multi-photos
│   │   ├── Services.tsx               # Cartes des 6 piliers d'expertise BTP
│   │   ├── Values.tsx                 # Spécificités des sols de Tana et suivi diaspora
│   │   ├── WhatsAppButton.tsx         # Bouton flottant permanent avec micro-animation
│   │   └── WhatsAppIcon.tsx           # Icône vectorielle officielle WhatsApp
│   ├── styles/
│   │   └── index.css                  # Feuilles de styles Tailwind et personnalisations
│   ├── utils/
│   │   ├── cn.ts                      # Utilitaire de fusion conditionnelle de classes
│   │   └── estimator.ts               # Moteur de calcul budgétaire en temps réel (Ar & €)
│   ├── App.tsx                        # Composant racine assemblant les sections
│   └── main.tsx                       # Point d'entrée de montage ReactDOM
├── index.html                         # Template HTML principal avec SEO, OpenGraph & JSON-LD
├── package.json                       # Dépendances et scripts de build
├── tailwind.config.js                 # Configuration du thème Tailwind CSS
├── tsconfig.json                      # Configuration TypeScript stricte
└── vite.config.ts                     # Configuration du bundler Vite
```

---

## 3. Normes de Code & Conventions

1. **Typage Strict TypeScript** :
   - Strict mode actif. Toute nouvelle fonction ou propriété de composant doit être formellement typée.
   - Aucun usage de `any` non justifié.

2. **Estimateur Budgétaire en Temps Réel (`src/utils/estimator.ts`)** :
   - Calcul réactif au déplacement du curseur de surface et au choix du type de lot.
   - Restitution en deux devises : **Ariary (Ar)** pour le marché local et **Euros (€)** pour la diaspora.
   - Fourchette indicative min/max (-10% / +15%) adaptée aux spécificités géotechniques des collines d'Antananarivo.

3. **Canal WhatsApp Prioritaire** :
   - Le bouton WhatsApp flottant et les actions rapides sont indispensables pour la conversion à Madagascar.
   - Le formulaire de contact propose systématiquement la transmission directe préformatée sur la ligne WhatsApp officielle (`+261 37 51 359 64`).

4. **Design & Ergonomie (UI/UX)** :
   - Zones tactiles d'au moins 44x44px.
   - `cursor-pointer` sur tous les boutons, liens et sélecteurs.
   - Contrastes élevés validés en mode clair comme en mode sombre.
   - Lightbox avec gestion complète des événements clavier (`Escape`, flèches de navigation) et verrouillage de l'`overflow` du body.

5. **Données Légales & Transparence Fiscale** :
   - Respect strict des identifiants fiscaux légaux de l'entreprise (NIF : 5019315595, STAT : 41001 11 2025 0 05583, Centre Fiscal Itaosy).
   - Règle de sécurité : non-publication de documents d'identité scannés ou de numéros de CIN sur l'interface publique pour prémunir contre la fraude documentaire.

---

## 4. Workflows de Vérification & Recette

Avant toute validation ou déploiement :
1. **Contrôle de typage** :
   ```bash
   npm run typecheck
   ```
   Doit sortir avec le code de retour `0` (zéro erreur).
2. **Build de production** :
   ```bash
   npm run build
   ```
   Doit générer le répertoire `dist/` sans erreur de compilation.
