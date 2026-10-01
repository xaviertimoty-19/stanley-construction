# Project Rules & Guidelines — Bricon Construction

Bienvenue dans le dépôt **Bricon Construction**. Ce document contient les règles d'architecture, les normes de style, les schémas de base de données, et les conventions de développement du projet.

---

## 1. Stack Technique Cœur

- **Framework Web** : Next.js 14+ (App Router, Server Components, Server Actions, Dynamic Metadata).
- **Langage** : TypeScript 5+ (Strict Mode).
- **Styling** : Tailwind CSS avec typographies Google Fonts (`Outfit` et `Plus Jakarta Sans`), palettes sur mesure (slate/gold/amber), glassmorphism et animations CSS.
- **Base de Données & Auth** : Supabase PostgreSQL (`@supabase/supabase-js`), migrations SQL versionnées, et politiques de sécurité Row Level Security (RLS).
- **Formulaires & Validations** : React Hook Form avec résolveurs Zod (`@hookform/resolvers/zod`).
- **Icônes & UI** : Lucide React (`lucide-react`) et utilitaires de classes `clsx` + `tailwind-merge`.

---

## 2. Structure et Organisation des Fichiers

```
c:/Users/Dev/Documents/Bricon Construction/
├── .agents/                           # Skills & Règles spécifiques au projet pour les assistants IA
│   ├── AGENTS.md                      # Règles globales du projet (ce fichier)
│   └── skills/                        # Skills du projet Bricon Construction
│       ├── bricon-architecture/
│       │   └── SKILL.md               # Directives d'architecture Next.js App Router & Supabase
│       ├── quote-estimator/
│       │   └── SKILL.md               # Guide d'extension de l'estimateur de devis & Zod
│       └── seo-schema-markup/
│           └── SKILL.md               # Guide SEO, Métadonnées et Schema.org JSON-LD
├── app/                               # Next.js App Router (Layouts, Pages, Server Actions & API Routes)
│   ├── layout.tsx                     # Root Layout avec Google Fonts, Navbar, Footer & JSON-LD
│   ├── page.tsx                       # Page d'accueil (Hero, 3 Piliers, Modèles RE2020, Avant/Après, Avis)
│   ├── devis/page.tsx                 # Estimateur & Formulaire de devis multi-étapes
│   ├── portfolio/page.tsx             # Galerie de réalisations filtrable avec slider Avant/Après
│   ├── conseils/                      # Centre de ressources Bricolage & Tutos DIY
│   │   ├── page.tsx                   # Catalogue avec filtres de difficulté et recherche
│   │   └── [slug]/page.tsx            # Article DIY dynamique avec SEO & Article JSON-LD
│   ├── api/leads/route.ts             # Route API POST fallback pour devis
│   └── actions/leads.ts               # Server Action pour validation Zod et insertion Supabase
├── components/                        # Composants UI modulaires et réutilisables
│   ├── Navbar.tsx                     # Barre de navigation réactive
│   ├── Footer.tsx                     # Footer institutionnel, réassurance & badges RGE
│   ├── HeroSection.tsx                # Hero banner interactif
│   ├── PillarsSection.tsx             # Présentation des 3 piliers d'activité
│   ├── QuoteEstimatorWizard.tsx       # Formulaire multi-étapes d'estimation de devis
│   ├── BeforeAfterSlider.tsx          # Glisseur interactif Avant / Après
│   ├── PortfolioGallery.tsx           # Galerie de projets filtrable par catégorie
│   ├── HouseModelsCatalog.tsx         # Catalogue interactif de maisons bioclimatiques RE2020
│   ├── DiyKnowledgeBase.tsx           # Hub de conseils DIY
│   ├── BookingModal.tsx               # Modal de prise de RDV
│   └── JsonLd.tsx                     # Injecteur de balises Schema.org JSON-LD
├── lib/                               # Logique métier, utilitaires et configurations
│   ├── supabase/                      # Clients Supabase browser et server
│   ├── validations/                   # Schémas Zod pour formulaires
│   ├── utils/                         # Calculateur de devis (`estimator.ts`) et formatteurs
│   └── data/mockData.ts               # Jeux de données pour le portfolio, modèles et blog
├── types/                             # Interfaces TypeScript (Supabase DB & Estimateur)
└── supabase/migrations/               # Migrations SQL Supabase (Tables, RLS, Triggers, Indexes)
```

---

## 3. Normes de Code & Conventions

1. **Server Components vs Client Components** :
   - Conserver les composants comme Server Components par défaut.
   - Ajouter `'use client'` uniquement sur les composants nécessitant de l'interactivité (`useState`, `useEffect`, React Hook Form, sliders interactifs).

2. **Validation des Formulaires & Server Actions** :
   - Les entrées de formulaire doivent toujours être validées côté client (React Hook Form + Zod) et ré-validées côté serveur dans les Server Actions avec Zod.
   - Jamais d'insertion directe en base de données sans validation par schéma Zod (`lib/validations/lead.ts`).

3. **Design System & Esthétique Visuelle (UI/UX Pro Max)** :
   - Palette de couleurs : Slate sombre (`bg-slate-900`), ambre/or (`amber-500` / `amber-600`), blanc casse (`slate-50`).
   - Utiliser des bordures fines subtiles (`border border-slate-800`), des effets de survol doux (`transition-all duration-300`), et du glassmorphism (`backdrop-blur-md bg-slate-900/80`).
   - Ne pas utiliser de couleurs brutes non harmonisées (ex: vert pur, rouge pur non nuancé).
   - **Accessibilité & Interaction** :
     - *Contraste* : Ratio minimum de 4.5:1 pour le texte normal.
     - *Zones de clic (Touch Targets)* : Minimum 44x44px avec espacement de 8px entre les éléments interactifs.
     - *Icônes* : Pas d'emojis comme icônes. Utiliser Lucide React (`lucide-react`) uniquement.
     - *Curseurs* : Ajouter `cursor-pointer` sur tous les éléments cliquables.
     - *Transitions* : Durée recommandée 150-300ms sans aucun décalage de layout (layout shift).
     - *Responsive* : Garantir zéro défilement horizontal sur 375px, 768px, 1024px, 1440px.

4. **SEO & Structured Data (Schema.org)** :
   - Chaque page dynamique ou statique doit inclure `generateMetadata` ou un objet `metadata` exporté.
   - Utiliser `<JsonLd>` pour injecter `LocalBusiness`, `Article`, et `BreadcrumbList` validés par Google Rich Results.

5. **Sécurité PostgreSQL & Supabase RLS** :
   - Les tables de la base de données doivent activer le Row Level Security (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`).
   - Seules les insertions anonymes/publiques sont permises sur `leads` pour la soumission de formulaires ; la lecture des leads est strictement réservée au rôle `admin`.

---

## 4. Workflows de Vérification

- Avant toute livraison ou PR :
  1. Exécuter `npm run typecheck` (`tsc --noEmit`) pour valider le typage TypeScript.
  2. Exécuter `npm run build` (`next build`) pour vérifier la compilation Next.js et la validité des pages statiques/dynamiques.
