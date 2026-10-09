export interface ProjectTypeOption {
  id: string;
  label: string;
  basePriceArPerM2: number;
  description: string;
}

export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'gros-oeuvre',
    label: 'Gros Œuvre & Murs de Soutènement',
    basePriceArPerM2: 950000, // ~190 €/m²
    description: 'Fondations adaptées aux pentes, ferraillage FeE500, béton 350kg/m³, moellons et drainage',
  },
  {
    id: 'villa-diaspora',
    label: 'Villa Clé en Main (Suivi Diaspora)',
    basePriceArPerM2: 1850000, // ~370 €/m²
    description: 'De la conception aux finitions : gros œuvre, second œuvre, sanitaires, carrelage et reporting 7j/7',
  },
  {
    id: 'travaux-publics',
    label: "VRD, Drainage & Piste d'accès",
    basePriceArPerM2: 480000, // ~96 €/m²
    description: "Terrassement, caniveaux maçonnés, dallettes de franchissement, empierrement et voirie",
  },
  {
    id: 'renovation',
    label: 'Rénovation & Surélévation Tana',
    basePriceArPerM2: 1150000, // ~230 €/m²
    description: 'Reprise sous-œuvre, confortement IPN, réfection charpente traditionnelle et second œuvre',
  },
  {
    id: 'cloture',
    label: 'Clôture Maçonnée & Sécurisation',
    basePriceArPerM2: 360000, // ~72 €/m²
    description: 'Murs d’enceinte en moellons/briques, piliers armés, chaperons et grilles de protection',
  },
];

// Taux de change indicatif pour la diaspora (1 EUR ~ 5 000 MGA)
export const EUR_MGA_RATE = 5000;

export interface EstimateResult {
  projectType: string;
  surface: number;
  minBudgetAr: number;
  maxBudgetAr: number;
  minBudgetEur: number;
  maxBudgetEur: number;
  formattedAr: string;
  formattedEur: string;
}

export function formatNumberWithSpaces(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(Math.round(value));
}

export function calculateEstimate(projectTypeId: string, surface: number): EstimateResult {
  const selectedType = PROJECT_TYPES.find((p) => p.id === projectTypeId) || PROJECT_TYPES[0];
  const baseTotalAr = selectedType.basePriceArPerM2 * surface;

  // Fourchette indicative : -10% marge basse, +15% marge haute selon la complexité du terrain (pente, accès)
  const minBudgetAr = Math.round(baseTotalAr * 0.9);
  const maxBudgetAr = Math.round(baseTotalAr * 1.15);

  const minBudgetEur = Math.round(minBudgetAr / EUR_MGA_RATE);
  const maxBudgetEur = Math.round(maxBudgetAr / EUR_MGA_RATE);

  return {
    projectType: selectedType.label,
    surface,
    minBudgetAr,
    maxBudgetAr,
    minBudgetEur,
    maxBudgetEur,
    formattedAr: `${formatNumberWithSpaces(minBudgetAr)} à ${formatNumberWithSpaces(maxBudgetAr)} Ar`,
    formattedEur: `${formatNumberWithSpaces(minBudgetEur)} à ${formatNumberWithSpaces(maxBudgetEur)} €`,
  };
}
