---
name: bricon-architecture
description: Directives d'architecture Next.js App Router, Supabase PostgreSQL, Tailwind CSS et Server Actions pour le projet Bricon Construction. À utiliser lors de la création ou modification de pages, composants, formulaires ou migrations SQL dans ce dépôt.
---

# Skill Architecture Bricon Construction

Ce skill fournit les consignes et modèles standards pour étendre et maintenir la plateforme web Bricon Construction.

## 1. Patterns d'Architecture Next.js App Router

### Ajout d'une Nouvelle Route / Page
Chaque nouvelle route de l'application doit respecter la structure standard Next.js 14 App Router :
- Utiliser un Server Component par défaut pour la page principale (`page.tsx`).
- Définir les métadonnées dynamiques via `generateMetadata` ou l'objet `metadata`.
- Intégrer les composants d'interface depuis `@/components/`.

Exemple de `page.tsx` type :
```tsx
import { Metadata } from 'next';
import HeaderSection from '@/components/HeaderSection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Titre de la Page | Bricon Construction',
  description: 'Description optimisée pour le SEO...',
  openGraph: {
    title: 'Titre OG | Bricon Construction',
    description: 'Description OG...',
    images: ['/images/og-default.jpg'],
  },
};

export default function MaNouvellePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16">
      <JsonLd
        type="LocalBusiness"
        data={{
          name: 'Bricon Construction',
          description: 'Constructeur et rénovateur engagé.',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderSection title="Titre" subtitle="Sous-titre" />
        {/* Contenu principal */}
      </div>
    </main>
  );
}
```

## 2. Règle des Server Actions & Formulaires Supabase

Les Server Actions dans `app/actions/` s'occupent de la validation et de la communication sécurisée avec Supabase côté serveur.

```typescript
'use server';

import { createClient } from '@/lib/supabase/server';
import { leadFormSchema } from '@/lib/validations/lead';
import { calculateEstimate } from '@/lib/utils/estimator';

export async function submitLeadAction(formData: unknown) {
  // 1. Validation Zod côté serveur
  const parseResult = leadFormSchema.safeParse(formData);
  if (!parseResult.success) {
    return {
      success: false,
      error: 'Données de formulaire invalides.',
      details: parseResult.error.flatten(),
    };
  }

  const data = parseResult.data;
  
  // 2. Calcul du prix estimé côté serveur
  const estimation = calculateEstimate({
    category: data.category,
    projectType: data.projectType,
    surface: data.surface,
    finishLevel: data.finishLevel,
    postalCode: data.postalCode,
  });

  // 3. Client Supabase Server
  const supabase = createClient();
  const { error } = await supabase.from('leads').insert({
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    postal_code: data.postalCode,
    project_type: data.projectType,
    estimated_budget_min: estimation.minBudget,
    estimated_budget_max: estimation.maxBudget,
    status: 'pending',
    dynamic_form_data: {
      category: data.category,
      surface: data.surface,
      finishLevel: data.finishLevel,
      timeframe: data.timeframe,
    },
  });

  if (error) {
    console.error('Supabase Insert Error:', error);
    return { success: false, error: 'Erreur lors de l\'enregistrement de votre demande.' };
  }

  return { success: true, estimation };
}
```

## 3. Schémas de Migration SQL Supabase (PostgreSQL RLS)

Chaque modification du schéma de base de données doit être ajoutée sous forme de fichier d'horodatage ou séquentiel dans `supabase/migrations/` (ex: `002_add_reviews_table.sql`).

Directives RLS obligatoires :
- Activer RLS : `ALTER TABLE my_table ENABLE ROW LEVEL SECURITY;`
- Politique de lecture publique (si applicable) : `CREATE POLICY "Public Read Access" ON my_table FOR SELECT USING (true);`
- Politique d'écriture sécurisée : `CREATE POLICY "Admin Write Access" ON my_table FOR ALL USING (auth.role() = 'service_role');`
