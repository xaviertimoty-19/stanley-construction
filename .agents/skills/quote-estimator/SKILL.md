---
name: quote-estimator
description: Guide d'extension et de gestion de l'estimateur de devis multi-étapes et de l'algorithme de calcul budgétaire en temps réel pour Bricon Construction. À utiliser lors de la modification des étapes de devis, schémas Zod, ou coefficients de calcul de coût au m².
---

# Skill Estimateur de Devis Multi-Étapes

Ce skill détaille le fonctionnement de l'estimateur de devis réactif de Bricon Construction, composé du composant `QuoteEstimatorWizard.tsx`, de l'algorithme `lib/utils/estimator.ts`, et des schémas de validation `lib/validations/lead.ts`.

## 1. Algorithme de Calcul de Budget (`lib/utils/estimator.ts`)

L'algorithme de calcul prend en compte :
- **Catégorie & Type de Projet** : Coût de base par $m^2$ en Ariary (Ar) (ex: `construction` bioclimatique = 2 800 000 Ar/$m^2$, `renovation` lourde = 1 400 000 Ar/$m^2$, `decoration` = 400 000 Ar/$m^2$, `diy` assistance = 90 000 Ar/$m^2$).
- **Gamme de Finition** :
  - `standard` : Coefficient 1.0
  - `premium` : Coefficient 1.35
  - `luxe` : Coefficient 1.75
- **Ajustement Régional (Code Postal Madagascar)** :
  - Antananarivo Capitale (`101`, `102`, `103`, `104`, `105`) : Coefficient +15%
  - Zones touristiques & grands ports (`207` Nosy Be, `501` Tamatave, `401` Majunga, `110` Antsirabe) : Coefficient +10%
  - Autres régions : Coefficient standard (1.0)
- **Marge d'Incertitude** : Fourchette min (-8%) et max (+10%).

```typescript
export interface EstimateParams {
  category: 'construction' | 'renovation' | 'decoration' | 'diy';
  projectType: string;
  surface: number;
  finishLevel: 'standard' | 'premium' | 'luxe';
  postalCode: string;
}

export interface EstimateResult {
  basePricePerM2: number;
  rawTotal: number;
  minBudget: number;
  maxBudget: number;
  regionalMultiplier: number;
  formattedMin: string;
  formattedMax: string;
}
```

## 2. Validation Zod (`lib/validations/lead.ts`)

Toute modification du formulaire multi-étapes doit être répercutée dans le schéma Zod :

```typescript
import { z } from 'zod';

export const leadFormSchema = z.object({
  category: z.enum(['construction', 'renovation', 'decoration', 'diy']),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet.'),
  surface: z.number().min(10, 'La surface minimale est de 10 m²').max(1000, 'Surface maximale dépassée.'),
  finishLevel: z.enum(['standard', 'premium', 'luxe']),
  postalCode: z.string().regex(/^([0-9]{5})$/, 'Code postal valide à 5 chiffres requis.'),
  timeframe: z.enum(['urgent', '3_months', '6_months', '1_year']),
  fullName: z.string().min(2, 'Le nom complet doit contenir au moins 2 caractères.'),
  email: z.string().email('Adresse email invalide.'),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone français valide requis.'),
  additionalDetails: z.string().optional(),
});
```

## 3. Déroulement des 4 Étapes de l'Assistant UI (`QuoteEstimatorWizard.tsx`)

1. **Étape 1 : Choix du Domaine** :
   - Sélection de la catégorie principale (`Construction Bioclimatique RE2020`, `Rénovation Intérieure & Structure`, `Aménagement & Déco Intérieure`, `Assistance Bricolage & Tutos`).
   - Sous-choix du type de projet précis (ex: Maison plain-pied, Extension ossature bois, Cuisine & Bain, etc.).

2. **Étape 2 : Surface & Niveau de Finition** :
   - Curseur réactif pour régler la surface (10 à 500+ $m^2$).
   - Sélecteur de gamme (`Standard`, `Premium`, `Luxe Exclusif`).
   - **Calculateur en temps réel** affichant la fourchette estimative ajustée instantanément.

3. **Étape 3 : Localisation & Délais** :
   - Champ Code Postal (5 chiffres) déclenchant le recalcul de l'indice régional.
   - Choix de l'échéance souhaitée.

4. **Étape 4 : Validation & Envoi** :
   - Saisie du nom, email, téléphone et précisions.
   - Soumission sécurisée via `submitLeadAction`.
   - Écran de succès avec récapitulatif complet de l'estimation budgétaire.
