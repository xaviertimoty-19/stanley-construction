---
name: seo-schema-markup
description: Directives pour l'optimisation SEO, les métadonnées OpenGraph/Twitter et l'injection de données structurées Schema.org (JSON-LD) sur la plateforme Bricon Construction.
---

# Skill SEO & Schema.org Structured Data

Ce skill garantit que toutes les pages publiées sur Bricon Construction sont optimisées pour les moteurs de recherche (Google Rich Results, Schema.org) et les réseaux sociaux (Open Graph / Twitter Cards).

## 1. Composant `<JsonLd>` (`components/JsonLd.tsx`)

Le composant `<JsonLd>` génère du JSON-LD conforme aux normes Schema.org pour augmenter la visibilité des extraits enrichis.

### Formats Supportés

1. **`LocalBusiness` / `HomeAndConstructionBusiness`** (Inclus sur le Root Layout / Page d'accueil) :
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Bricon Construction",
  "image": "https://bricon-construction.fr/images/og-image.jpg",
  "@id": "https://bricon-construction.fr",
  "url": "https://bricon-construction.fr",
  "telephone": "+33189000000",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "124 Avenue de la Construction",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8738,
    "longitude": 2.3023
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "19:00"
  }
}
```

2. **`Article` / `TechArticle`** (Inclus sur `/conseils/[slug]`) :
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre du Guide DIY",
  "description": "Résumé SEO du tutoriel",
  "image": "https://bricon-construction.fr/images/blog/diy-article.jpg",
  "author": {
    "@type": "Organization",
    "name": "Bricon Construction Expert Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Bricon Construction",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bricon-construction.fr/logo.png"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-08-07"
}
```

## 2. Dynamic Metadata via `generateMetadata`

Sur les routes dynamiques (`/conseils/[slug]`), toujours utiliser `generateMetadata` :

```typescript
import type { Metadata } from 'next';
import { getArticleBySlug } from '@/lib/data/mockData';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: 'Article Non Trouvé | Bricon Construction',
    };
  }

  return {
    title: `${article.title} | Bricon Conseils DIY`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}
```
