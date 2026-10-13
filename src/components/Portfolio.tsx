import React, { useState, useEffect } from 'react';
import { MapPin, Maximize2, Calendar, ArrowUpRight, Camera, X, ChevronLeft, ChevronRight, CheckCircle2, Layers, ArrowLeft, Calculator } from 'lucide-react';

export interface ProjectPhoto {
  url: string;
  thumbUrl?: string;
  caption: string;
  tag: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'en-cours' | 'livre';
  statusLabel: string;
  category: 'gros-oeuvre' | 'tp' | 'renovation' | 'neuf' | 'diaspora' | 'interieur';
  categoryLabel: string;
  location: string;
  surface: string;
  duration: string;
  estimatedBudgetAr: string;
  estimatedBudgetEur: string;
  costPerM2?: string;
  image: string;
  gallery?: ProjectPhoto[];
  description: string;
  highlights?: string[];
  isRealChantier?: boolean;
}

const getThumbUrl = (url: string): string => {
  if (url.includes('/assets/chantiers/')) {
    return url.replace(/\.webp$/, '-thumb.webp').replace(/\.jpg$/, '-thumb.webp');
  }
  if (url.includes('images.unsplash.com')) {
    return url.replace(/w=\d+/, 'w=120').replace(/q=\d+/, 'q=60');
  }
  return url;
};

const ProjectCardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
    />
  );
};

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activePhotoByProject, setActivePhotoByProject] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ project: Project; photoIndex: number } | null>(null);


  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowLeft') {
        const photos = lightbox.project.gallery || [{ url: lightbox.project.image, caption: lightbox.project.title, tag: 'Général' }];
        setLightbox(prev => prev ? {
          ...prev,
          photoIndex: (prev.photoIndex - 1 + photos.length) % photos.length
        } : null);
      } else if (e.key === 'ArrowRight') {
        const photos = lightbox.project.gallery || [{ url: lightbox.project.image, caption: lightbox.project.title, tag: 'Général' }];
        setLightbox(prev => prev ? {
          ...prev,
          photoIndex: (prev.photoIndex + 1) % photos.length
        } : null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  const projects: Project[] = [
    {
      id: 'chantier-antsiranana-villa-toiture-second-oeuvre',
      title: "Construction Villa Neuve & Toiture Métallique Bac Acier",
      status: 'en-cours',
      statusLabel: 'Chantier en cours (Antsiranana)',
      category: 'neuf',
      categoryLabel: 'Villa Neuve & Toiture',
      location: 'Antsiranana (Diego-Suarez)',
      surface: '240 m² de chantier',
      duration: 'En cours • Suivi en direct',
      estimatedBudgetAr: '320 000 000 Ar',
      estimatedBudgetEur: '64 000 €',
      costPerM2: '1 330 000 Ar/m² (≈ 266 €/m²)',
      image: '/assets/chantiers/antsiranana/toiture-bac-acier-pose-couvreurs.webp',
      isRealChantier: true,
      gallery: [
        {
          url: '/assets/chantiers/antsiranana/toiture-bac-acier-pose-couvreurs.webp',
          caption: 'Pose en toiture des bacs acier profilés aspect tuile gris anthracite sur charpente métallique en pannes galvanisées, couvreurs au travail sous le soleil du Nord',
          tag: 'Toiture Bac Acier'
        },
        {
          url: '/assets/chantiers/antsiranana/pose-crochets-gouttiere-planche-rive.webp',
          caption: 'Alignement au cordeau et fixation des crochets de gouttière sur planche de rive sous couverture en bac acier galvanisé',
          tag: 'Pose Crochets Gouttière'
        },
        {
          url: '/assets/chantiers/antsiranana/descente-pluviale-gouttiere-facade.webp',
          caption: 'Pose complète du réseau d\'évacuation pluviale : gouttière de rive, naissance et tuyau de descente fixé sur façade traitée',
          tag: 'Descente Pluviale & Façade'
        },
        {
          url: '/assets/chantiers/antsiranana/gouttiere-rive-colonne-angle-toit.webp',
          caption: 'Détail de rive de toiture : pose soignée du chéneau pluvial et retombée de façade avec colonne moulurée',
          tag: 'Gouttière de Toiture'
        },
        {
          url: '/assets/chantiers/antsiranana/facade-colonne-peinture-gouttiere.webp',
          caption: 'Façade extérieure : colonne d\'angle avec moulures, soubassement bicolore gris et blanc, planche de rive et pose de gouttière en zinc',
          tag: 'Façade & Colonne'
        },
        {
          url: '/assets/chantiers/antsiranana/facade-laterale-escalier-terrassement.webp',
          caption: 'Façade latérale de la villa : escalier d\'accès maçonné, réseaux d\'évacuation verticaux et terrassement du terrain',
          tag: 'Façade & Réseaux Extérieurs'
        },
        {
          url: '/assets/chantiers/antsiranana/cuisine-comptoir-bar-tasseaux-placard.webp',
          caption: 'Aménagement achevé de la cuisine : comptoir bar avec claustra en tasseaux bois, plan de travail noir ardoise, crédence marbrée et meubles hauts à persiennes',
          tag: 'Cuisine & Mobilier Bois'
        },
        {
          url: '/assets/chantiers/antsiranana/comptoir-bar-agencement-tasseaux-sol.webp',
          caption: 'Fabrication et ajustement artisanal des tasseaux de bois franc massif pour l\'habillage de pied et le retour de comptoir bar',
          tag: 'Agencement Tasseaux Bois'
        },
        {
          url: '/assets/chantiers/antsiranana/second-oeuvre-piece-de-vie-comptoir.webp',
          caption: 'Aménagement intérieur de la pièce de vie : comptoir bar de cuisine maçonné, cloisons enduites prêtes à peindre, outillage et solivage de plafond',
          tag: 'Second Œuvre & Comptoir'
        },
        {
          url: '/assets/chantiers/antsiranana/ossature-plafond-charpente-metallique.webp',
          caption: 'Ossature pour faux plafond suspendu en tasseaux de bois sous charpente métallique avec entreposage des tôles de couverture',
          tag: 'Ossature Plafond'
        },
        {
          url: '/assets/chantiers/antsiranana/pose-panneau-plafond-bois-charpente.webp',
          caption: 'Pose et fixation des panneaux de faux plafond en contreplaqué sous charpente métallique par notre compagnon artisan',
          tag: 'Pose Plafond Bois'
        },
        {
          url: '/assets/chantiers/antsiranana/outillage-dewalt-terrasse-cloture.webp',
          caption: 'Parc d\'outillage électroportatif professionnel sur le muret de terrasse et implantation de la clôture extérieure',
          tag: 'Outillage & Terrasse'
        },
        {
          url: '/assets/chantiers/antsiranana/raccordement-plomberie-cuve-terrasse.webp',
          caption: 'Travaux de plomberie et raccordement de la cuve tampon de stockage d\'eau potable sur la terrasse carrelée',
          tag: 'Raccordement Cuve Eau'
        },
        {
          url: '/assets/chantiers/antsiranana/cuve-eau-stockage-adduction-ppr.webp',
          caption: 'Installation de la cuve tampon de stockage d\'eau avec réseau de tuyauterie PPR rigide et contacteur flotteur automatique sur terrasse',
          tag: 'Cuve & Adduction PPR'
        },
        {
          url: '/assets/chantiers/antsiranana/adduction-eau-puits-pompage-cuve.webp',
          caption: 'Installation autonome d\'adduction d\'eau : puits / cuve maçonnée avec trappe sécurisée, groupe de surpression et pompe immergée avec flotteur',
          tag: 'Puits & Pompage d\'Eau'
        }
      ],
      highlights: [
        "Dossier complet (15 photos réelles) : Toiture bac acier, descentes pluviales, faux plafonds, cuisine et réseau d'eau potable",
        "Pose de couverture en bacs acier profilés aspect tuile haute résistance aux embruns marins",
        "Charpente métallique traitée anti-corrosion et pannes galvanisées anti-cycloniques",
        "Système complet d'évacuation des eaux pluviales : chéneaux de rive et descentes de façade",
        "Second œuvre complet : faux plafond en bois, comptoir bar avec claustra en tasseaux et mobilier",
        "Installation autonome d'eau potable : cuve polyéthylène, tuyauterie PPR scellée et pompe immergée"
      ],
      description: "Chantier de construction d'une villa neuve actuellement en cours à Antsiranana (Diego-Suarez). Réalisation de la toiture en bacs acier ondulés sur charpente métallique adaptée au climat du Nord de Madagascar, pose intégrale des gouttières pluviales et finitions de façade, aménagement intérieur (faux plafond bois, cuisine sur mesure avec comptoir bar à tasseaux) et installation d'un réseau autonome d'adduction en eau avec cuve de stockage, tuyauterie PPR et groupe de pompage."
    },
    {
      id: 'chantier-atsimondrano-brique-charpente',
      title: "Rénovation Bâtisse R+2 en Briques Cuites & Charpente Bois",
      status: 'en-cours',
      statusLabel: 'Chantier en cours (Atsimondrano)',
      category: 'renovation',
      categoryLabel: 'Rénovation & Charpente',
      location: 'Atsimondrano, Antananarivo',
      surface: '380 m² (R+2 + Combles)',
      duration: 'En cours • Suivi 7j/7',
      estimatedBudgetAr: '435 000 000 Ar',
      estimatedBudgetEur: '87 000 €',
      costPerM2: '1 145 000 Ar/m² (≈ 229 €/m²)',
      image: '/assets/chantiers/chantier-tana-brique-perspective-plan-3d.webp',
      isRealChantier: true,
      gallery: [
        {
          url: '/assets/chantiers/chantier-tana-brique-perspective-plan-3d.webp',
          caption: 'Modélisation architecturale 3D & plans axonométriques par niveaux (RDC, R+1 et Combles habitables avec plan de masse)',
          tag: 'Perspective & Plans 3D'
        },
        {
          url: '/assets/chantiers/chantier-tana-brique-facade-principale.webp',
          caption: 'Façade principale R+2 en briques cuites traditionnelles avec balcon en fer forgé et lucarnes maçonnées',
          tag: 'Façade Principale'
        },
        {
          url: '/assets/chantiers/chantier-tana-brique-facade-pignon.webp',
          caption: 'Élévation latérale montrant le pignon triangulaire en briques cuites artisanales et mur d\'enceinte paysager',
          tag: 'Façade Pignon'
        },
        {
          url: '/assets/chantiers/chantier-tana-charpente-ferme-traditionnelle.webp',
          caption: 'Ferme maîtresse triangulée en bois massif (arbalétriers, poinçon, contrefiches) renforcée par boulons zingués et baladeuse de chantier',
          tag: 'Charpente Bois Massif'
        },
        {
          url: '/assets/chantiers/chantier-tana-charpente-vue-lucarne.webp',
          caption: 'Vue d\'ensemble de l\'ossature des combles avec éclairage de chantier et vue sur la lucarne de toit',
          tag: 'Combles & Lucarnes'
        },
        {
          url: '/assets/chantiers/chantier-tana-toiture-chevrons-combles.webp',
          caption: 'Pose des chevrons calibrés sous écran pare-pluie / pare-vapeur avec scellement au mur pignon maçonné',
          tag: 'Toiture & Chevrons'
        },
        {
          url: '/assets/chantiers/chantier-tana-escalier-beton-rampe-fer.webp',
          caption: 'Escalier intérieur en béton armé avec rampe métallique laquée gris anthracite, mur en moellons et éclairage intégré',
          tag: 'Escalier Béton & Métal'
        },
        {
          url: '/assets/chantiers/chantier-tana-palier-escalier-faience.webp',
          caption: 'Montée d\'escalier et palier intermédiaire : appliques murales, garde-corps acier et habillage mural faïence marbrée',
          tag: 'Palier & Second Œuvre'
        },
        {
          url: '/assets/chantiers/chantier-tana-escalier-ragreage-macon.webp',
          caption: 'Ragréage et lissage de précision des marches d\'escalier en béton à la taloche par notre compagnon maçon',
          tag: 'Lissage Escalier Béton'
        },
        {
          url: '/assets/chantiers/chantier-tana-escalier-vue-plongee-palier.webp',
          caption: 'Vue d\'ensemble en plongée de la cage d\'escalier et des volées bétonnées en cours de finition et réglage de niveau',
          tag: 'Cage d\'Escalier Palier'
        },
        {
          url: '/assets/chantiers/chantier-tana-escalier-malaxeur-mortier.webp',
          caption: 'Gâchage mécanique du mortier de ragréage au malaxeur électrique et contrôle des niveaux des marches à la règle',
          tag: 'Mortier & Malaxeur'
        },
        {
          url: '/assets/chantiers/chantier-tana-facade-echafaudage-enduit.webp',
          caption: 'Ravalement de façade extérieure : échafaudage traditionnel en bois et application de l\'enduit ciment protecteur',
          tag: 'Échafaudage & Ravalement'
        },
        {
          url: '/assets/chantiers/chantier-tana-terrasse-echafaudage-briques-dalle.webp',
          caption: 'Chantier extérieur sur la terrasse : approvisionnement en briques cuites traditionnelles et maçon opérant au faîtage sur échelle et échafaudage',
          tag: 'Terrasse & Échafaudage'
        },
        {
          url: '/assets/chantiers/chantier-tana-pignon-echafaudage-hauteur-macon.webp',
          caption: 'Travaux en hauteur sur le pignon supérieur : maçon sur échafaudage traditionnel en bois réalisant les finitions d\'enduit de façade',
          tag: 'Échafaudage & Pignon'
        },
        {
          url: '/assets/chantiers/chantier-tana-pignon-briques-echafaudage.webp',
          caption: 'Élévation extérieure sur mur pignon en briques cuites traditionnelles avec échafaudage pour reprise des enduits sous toiture',
          tag: 'Pignon Briques Cuites'
        },
        {
          url: '/assets/chantiers/chantier-tana-cuisine-maconnee-placards-bois.webp',
          caption: 'Agencement de la cuisine maçonnée : pose des portes de placards en bois, évier encastré et plan carrelé avec radio de chantier DeWalt',
          tag: 'Cuisine Maçonnée & Placards'
        },
        {
          url: '/assets/chantiers/chantier-tana-cuisine-plan-travail-carrelage-noir.webp',
          caption: 'Pose du plan de travail de cuisine en carrelage poli noir profond avec crédence assortie effet marbre noir veiné',
          tag: 'Plan de Travail Carrelé'
        },
        {
          url: '/assets/chantiers/chantier-tana-sanitaires-wc-console-vasque.webp',
          caption: 'Pose des sanitaires : cuvette WC céramique, faïence murale rectifiée et console vasque suspendue en acier thermolaqué noir',
          tag: 'Sanitaires & WC'
        },
        {
          url: '/assets/chantiers/chantier-tana-combles-lucarne-isolation.webp',
          caption: 'Aménagement des combles : fenêtre lucarne bois double vitrage, isolation et parements bois / OSB sous rampants',
          tag: 'Combles & Lucarne Bois'
        },
        {
          url: '/assets/chantiers/chantier-tana-combles-mansarde-doublage.webp',
          caption: 'Vue d\'ensemble des volumes mansardés sous toiture : isolation thermique, doublage sous rampants et châssis bois',
          tag: 'Volumes Mansardés'
        },
        {
          url: '/assets/chantiers/chantier-tana-menuiserie-grille-fer-forge.webp',
          caption: 'Menuiserie bois avec grille de sécurité en fer forgé artisanal aux motifs géométriques traditionnels',
          tag: 'Ferronnerie de Sécurité'
        }
      ],
      highlights: [
        "Dossier complet (21 photos réelles) : Plans 3D, gros œuvre briques, échafaudage en hauteur, charpente bois, escalier béton et cuisine maçonnée",
        "Architecture patrimoniale en briques de terre cuite locales et ravalement de façade sur échafaudage traditionnel",
        "Taille et levage d'une charpente en bois dur massif local",
        "Coulage, lissage et ragréage de précision de l'escalier en béton armé à double volée",
        "Agencement intérieur : cuisine maçonnée avec placards en bois, plan de travail carrelé noir et sanitaires",
        "Écran de sous-toiture pare-pluie respirant et isolation combles",
        "Reporting vidéo régulier pour le maître d'ouvrage (Diaspora / Résident)"
      ],
      description: "Chantier d'envergure mené à Atsimondrano (Antananarivo) sur une bâtisse bourgeoise traditionnelle en briques cuites. Confortement structurel, réfection totale de la charpente en bois massif artisanal, ravalement extérieur sur échafaudage traditionnel de grande hauteur, coulage et lissage d'escalier en béton armé, second œuvre complet (cuisine maçonnée, placards bois, sanitaires) et aménagement des combles habitables sous lucarnes."
    },
    {
      id: 'chantier-amenagement-interieur-finitions',
      title: "Finitions Intérieures, Salle de Bain & Escalier Béton",
      status: 'en-cours',
      statusLabel: 'Chantier Réel • Second Œuvre',
      category: 'interieur',
      categoryLabel: 'Aménagement Intérieur',
      location: 'Antananarivo (Atsimondrano)',
      surface: '160 m² de finitions',
      duration: 'Second Œuvre & Finitions',
      estimatedBudgetAr: '115 000 000 Ar',
      estimatedBudgetEur: '23 000 €',
      costPerM2: '720 000 Ar/m² (≈ 144 €/m²)',
      image: '/assets/chantiers/interieur/meuble-vasque-miroir-led.webp',
      isRealChantier: true,
      gallery: [
        {
          url: '/assets/chantiers/interieur/meuble-vasque-miroir-led.webp',
          caption: 'Meuble vasque contemporain suspendu deux tiroirs laqué blanc, miroir panoramique rétroéclairé LED, robinetterie chromée et faïence murale en grès cérame',
          tag: 'Meuble Vasque & Miroir LED'
        },
        {
          url: '/assets/chantiers/interieur/douche-balneo-anthracite.webp',
          caption: 'Espace douche à l\'italienne avec colonne d\'hydromassage balnéo gris anthracite, mitigeur thermostatique et alliance faïence ardoise / marbre Calacatta',
          tag: 'Douche Balnéo & Anthracite'
        },
        {
          url: '/assets/chantiers/interieur/faience-marbre-calacatta.webp',
          caption: 'Pose de faïence murale grand format effet marbre blanc veiné Calacatta, calepinage au laser, découpes d\'angles précises et extraction d\'air intégrée',
          tag: 'Faïence Marbre Calacatta'
        },
        {
          url: '/assets/chantiers/interieur/escalier-beton-rampe-acier.webp',
          caption: 'Escalier intérieur en béton armé monobloc avec garde-corps contemporain en acier thermolaqué gris anthracite, appliques murales et lumière naturelle',
          tag: 'Escalier Béton & Rampe Acier'
        },
        {
          url: '/assets/chantiers/interieur/fenetre-securite-fer-forge.webp',
          caption: 'Châssis oscillo-battant double vitrage en PVC blanc avec grille de protection en fer forgé artisanal scellée et habillage en faïence marbrée',
          tag: 'Menuiserie PVC & Ferronnerie'
        },
        {
          url: '/assets/chantiers/interieur/calepinage-faience-calacatta-plafond.webp',
          caption: 'Calepinage de précision des dalles faïence Calacatta avec continuité des veinages sur l\'angle et raccordement net au plafond plâtré',
          tag: 'Calepinage & Angle Plafond'
        },
        {
          url: '/assets/chantiers/interieur/faience-marbre-ambre-brillant.webp',
          caption: 'Pose murale en grès cérame grand format effet marbre ambré poli miroir haute brillance avec reflets lumineux naturels',
          tag: 'Marbre Ambré Poli Miroir'
        },
        {
          url: '/assets/chantiers/interieur/menuiserie-aluminium-vue-panoramique.webp',
          caption: 'Menuiserie aluminium thermolaquée double vitrage thermique offrant une vue panoramique sur les plaines et collines d\'Antananarivo',
          tag: 'Châssis Aluminium & Vue'
        },
        {
          url: '/assets/chantiers/interieur/amenagement-combles-fenetre-bois-osb.webp',
          caption: 'Aménagement des combles habitables sous toiture : isolation thermique, doublage sous rampants en panneaux bois et châssis ouvrant',
          tag: 'Combles & Isolation Bois'
        },
        {
          url: '/assets/chantiers/interieur/decoration-peinture-tableau-mural.webp',
          caption: 'Finitions de plâtrerie et peinture acrylique satinée blanc épuré sur cloisons maçonnées, mise en valeur par un tableau d\'art',
          tag: 'Peinture & Décoration'
        },
        {
          url: '/assets/chantiers/interieur/comptoir-bar-tasseaux-bois.webp',
          caption: 'Comptoir bar de cuisine sur mesure avec claustra en tasseaux de bois massif, plan de travail ardoise et parquet caillebotis bicolore',
          tag: 'Comptoir Bar & Tasseaux Bois'
        },
        {
          url: '/assets/chantiers/interieur/sanitaires-wc-vasque-industrielle.webp',
          caption: 'Espace sanitaires avec WC céramique émaillée, vasque compacte posée sur piètement métallique noir style atelier et faïence murale',
          tag: 'WC & Vasque Style Atelier'
        },
        {
          url: '/assets/chantiers/interieur/chambre-lit-plateforme-bois-massif.webp',
          caption: 'Suite parentale : lit plateforme sur mesure en bois massif avec tête de lit asymétrique graphique bi-matière et sol rouge brique traditionnel',
          tag: 'Lit Plateforme Bois Massif'
        },
        {
          url: '/assets/chantiers/interieur/chambre-decor-papier-peint-floral.webp',
          caption: 'Décoration de chambre avec lés de papier peint intissé panoramique à motifs floraux bleu nuit et plafond chaleureux en lambris bois verni',
          tag: 'Papier Peint & Plafond Bois'
        },
        {
          url: '/assets/chantiers/interieur/ossature-bois-isolation-combles-osb.webp',
          caption: 'Phase chantier combles : ossature en bois massif, écran pare-pluie respirant et doublage sous rampants en panneaux OSB structuraux',
          tag: 'Ossature & Isolation OSB'
        }
      ],
      highlights: [
        "Dossier complet (15 photos réelles) : Salles de bain, faïence marbrée, mobilier sur mesure, escalier, menuiseries et combles",
        "Pose de faïence grand format effet marbre Calacatta et Emperador poli miroir",
        "Colonne de douche thermostatique balnéo & meuble vasque suspendu rétroéclairé LED",
        "Menuiserie artisanale bois massif : comptoir bar avec claustra tasseaux et lit plateforme sur mesure",
        "Escalier en béton armé avec garde-corps contemporain soudé sur mesure",
        "Menuiseries aluminium et PVC double vitrage avec grilles de sécurité artisanales",
        "Aménagement complet des combles habitables avec isolation thermique sous toiture"
      ],
      description: "Travaux d'aménagement intérieur, second œuvre et mobilier sur mesure haut de gamme à Antananarivo : création de salles de bain contemporaines (douche balnéo, meuble vasque suspendu, WC design), habillages muraux en faïence effet marbre Calacatta et Emperador, fabrication artisanale en bois massif (comptoir bar à tasseaux, lit plateforme suite parentale), escalier béton monobloc et combles aménagés."
    },
    {
      id: 'p1',
      title: "Mur de Soutènement en Moellons & Plateforme",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'gros-oeuvre',
      categoryLabel: 'Gros Œuvre & Pentes',
      location: 'Imerinkasinina, Antananarivo',
      surface: '650 m² plateforme',
      duration: 'Livré • 2 mois de travaux',
      estimatedBudgetAr: '285 000 000 Ar',
      estimatedBudgetEur: '57 000 €',
      costPerM2: '950 000 Ar/m² (≈ 190 €/m²)',
      image: '/assets/chantiers/realisation-tana-mur-soutenement-moellons.webp',
      description: "Terrassement en déblai/remblai sur colline latéritique, mur de soutènement cyclopéen en moellons de granit de 4,5m de hauteur avec barbacanes de drainage et plateforme stabilisée."
    },
    {
      id: 'p2',
      title: "Villa R+1 avec Varangue pour la Diaspora",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'diaspora',
      categoryLabel: 'Projet Diaspora',
      location: 'Ivato / Ambatobe, Antananarivo',
      surface: '220 m² (R+1)',
      duration: 'Livré • 7 mois de travaux',
      estimatedBudgetAr: '405 000 000 Ar',
      estimatedBudgetEur: '81 000 €',
      costPerM2: '1 840 000 Ar/m² (≈ 368 €/m²)',
      image: '/assets/chantiers/realisation-tana-villa-r1-diaspora.webp',
      description: "Construction complète suivie à distance depuis la France (reporting photo/vidéo hebdomadaire) : fondations renforcées sol rouge, varangue avec colonnes maçonnées, toiture bac acier profilé et clôture sécurisée en moellons."
    },
    {
      id: 'p3',
      title: "Pavillon Plain-Pied & Grande Varangue Traditionnelle",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'neuf',
      categoryLabel: 'Villa Plain-Pied',
      location: 'Ambatobe / Ilafy, Antananarivo',
      surface: '150 m² hab. + 35 m² varangue',
      duration: 'Livré • 5 mois de travaux',
      estimatedBudgetAr: '275 000 000 Ar',
      estimatedBudgetEur: '55 000 €',
      costPerM2: '1 830 000 Ar/m² (≈ 366 €/m²)',
      image: '/assets/chantiers/realisation-tana-villa-plain-pied-varangue.webp',
      description: "Pavillon familial de plain-pied typique des banlieues résidentielles de Tana : vaste varangue ombragée avec colonnade, toiture quatre pans en bac acier laqué, cour pavée autobloquante et clôture en maçonnerie de pierre taillée."
    },
    {
      id: 'p4',
      title: "Rénovation Bâtisse Trano Gasy & Confortement",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'renovation',
      categoryLabel: 'Rénovation Patrimoine',
      location: 'Haute-Ville / Isoraka, Antananarivo',
      surface: '210 m² (R+1)',
      duration: 'Livré • 4 mois de travaux',
      estimatedBudgetAr: '240 000 000 Ar',
      estimatedBudgetEur: '48 000 €',
      costPerM2: '1 140 000 Ar/m² (≈ 228 €/m²)',
      image: '/assets/chantiers/realisation-tana-renovation-trano-gasy.webp',
      description: "Réhabilitation soignée d'une maison traditionnelle malgache (Trano Gasy) en briques cuites artisanales rouges : confortement des fondations anciennes, rejointoiement à la chaux, balcons en ferronnerie et réfection totale de la charpente."
    },
    {
      id: 'p5',
      title: "Aménagement VRD, Caniveaux Béton & Voie Pavée",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'tp',
      categoryLabel: 'Travaux Publics & VRD',
      location: 'By-pass / Tanjombato, Atsimondrano',
      surface: '1 200 m² de voirie',
      duration: 'Livré • 1.5 mois de travaux',
      estimatedBudgetAr: '190 000 000 Ar',
      estimatedBudgetEur: '38 000 €',
      costPerM2: '475 000 Ar/m² (≈ 95 €/m²)',
      image: '/assets/chantiers/realisation-tana-vrd-caniveaux-piste.webp',
      description: "Création et viabilisation d'un accès carrossable en zone périurbaine : terrassement, caniveaux d'assainissement pluvial maçonnés avec dallettes amovibles en béton armé, empierrement et pose de pavés autobloquants."
    },
    {
      id: 'p6',
      title: "Résidence Familiale R+1 Contemporaine & Clôture",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'neuf',
      categoryLabel: 'Construction Neuve',
      location: 'Ilafy / Ankadikely, Antananarivo',
      surface: '190 m² (R+1)',
      duration: 'Livré • 6 mois de travaux',
      estimatedBudgetAr: '350 000 000 Ar',
      estimatedBudgetEur: '70 000 €',
      costPerM2: '1 840 000 Ar/m² (≈ 368 €/m²)',
      image: '/assets/chantiers/realisation-tana-residence-familiale-ilafy.webp',
      description: "Villa d'habitation contemporaine à étage adaptée aux contraintes de Tana : structure poteaux-poutres en béton armé, toiture terrasse étanchée avec bac acier, cour pavée intégrée et réservoir tampon d'eau potable."
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous nos chantiers' },
    { key: 'en-cours', label: 'Chantiers en cours' },
    { key: 'antsiranana', label: 'Antsiranana (Diego)' },
    { key: 'interieur', label: 'Aménagement Intérieur' },
    { key: 'renovation', label: 'Rénovation & Charpente' },
    { key: 'gros-oeuvre', label: 'Murs & Soutènement' },
    { key: 'diaspora', label: 'Suivi Diaspora' },
    { key: 'neuf', label: 'Villas Neuves' },
    { key: 'tp', label: 'VRD & Pistes' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'en-cours'
      ? projects.filter(p => p.status === 'en-cours')
      : activeFilter === 'antsiranana'
        ? projects.filter(p => p.location.toLowerCase().includes('antsiranana'))
        : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" aria-label="Portfolio et Réalisations BTP Antananarivo et Provinces" className="py-24 bg-zinc-100 dark:bg-stanley-black relative border-t border-zinc-200 dark:border-stanley-steel transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-stanley-gold dark:text-stanley-yellow font-bold">
              Chantiers Réels &amp; Suivis en Direct à Madagascar
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 dark:text-slate-50 tracking-tight">
              Nos Chantiers en Cours &amp; Réalisations
            </h2>
            <p className="text-zinc-600 dark:text-slate-300 text-base leading-relaxed">
              Découvrez nos chantiers sur le terrain à Madagascar : notre villa actuellement en cours à <strong className="text-stanley-gold dark:text-stanley-yellow font-semibold">Antsiranana (Diego-Suarez)</strong> (toiture bac acier, façade, second œuvre et pompage d'eau) ainsi que nos chantiers à <strong className="text-stanley-gold dark:text-stanley-yellow font-semibold">Antananarivo</strong> (Atsimondrano R+2 et finitions intérieures).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === filter.key
                    ? 'bg-stanley-yellow text-stanley-black shadow-md'
                    : 'bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel text-zinc-700 dark:text-slate-300 hover:border-stanley-yellow/60 hover:text-zinc-900 dark:hover:text-white shadow-xs'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const photos = project.gallery || [{ url: project.image, caption: project.title, tag: 'Général' }];
            const currentPhotoIdx = activePhotoByProject[project.id] ?? 0;
            const currentPhoto = photos[currentPhotoIdx] || photos[0];
            const isOngoing = project.status === 'en-cours';

            return (
              <article
                key={project.id}
                className={`group rounded-2xl overflow-hidden bg-white dark:bg-stanley-charcoal border transition-all duration-300 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl shadow-sm ${
                  isOngoing 
                    ? 'border-stanley-yellow/70 dark:border-stanley-yellow/50 hover:border-stanley-yellow ring-2 ring-stanley-yellow/20' 
                    : 'border-zinc-200 dark:border-stanley-steel hover:border-stanley-yellow/60'
                }`}
              >
                {/* Image Container with Interactive Switcher */}
                <div className="relative">
                  <figure 
                    className="relative aspect-[16/10] overflow-hidden bg-zinc-900 cursor-pointer"
                    onClick={() => setLightbox({ project, photoIndex: currentPhotoIdx })}
                    title="Cliquez pour agrandir les photos en haute résolution"
                  >
                    <ProjectCardImage src={currentPhoto.url} alt={currentPhoto.caption} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-stanley-black via-black/30 dark:via-stanley-black/20 to-transparent pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="bg-black/80 dark:bg-stanley-black/90 backdrop-blur-md text-stanley-yellow border border-zinc-700 dark:border-stanley-steel text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                        {project.categoryLabel}
                      </span>

                      {isOngoing ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stanley-yellow text-stanley-black text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                          <span>
                            EN COURS • {project.location.toUpperCase().includes('ANTSIRANANA') ? 'ANTSIRANANA' : project.location.toUpperCase().includes('ATSIMONDRANO') ? 'ATSIMONDRANO' : 'EN DIRECT'}
                          </span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 dark:bg-stanley-black/90 backdrop-blur-md text-slate-200 border border-zinc-700 dark:border-stanley-steel text-[10px] font-medium">
                          <CheckCircle2 className="w-3 h-3 text-stanley-yellow" />
                          <span>Livré</span>
                        </span>
                      )}
                    </div>

                    {/* Photo Tag & Gallery Indicator overlay */}
                    {project.gallery && project.gallery.length > 1 && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200">
                        <span className="px-2 py-0.5 rounded bg-black/80 dark:bg-stanley-black/80 backdrop-blur-sm border border-zinc-700 dark:border-stanley-steel font-semibold text-stanley-yellow">
                          {currentPhoto.tag}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/80 dark:bg-stanley-black/80 backdrop-blur-sm border border-zinc-700 dark:border-stanley-steel flex items-center gap-1 font-mono text-[10px]">
                          <Camera className="w-3 h-3 text-stanley-yellow" />
                          {currentPhotoIdx + 1} / {project.gallery.length} photos
                        </span>
                      </div>
                    )}
                  </figure>

                  {/* Thumbnail Bar for project with all 5 photos */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="bg-zinc-100 dark:bg-stanley-black/95 px-3 py-2 border-b border-zinc-200 dark:border-stanley-steel flex items-center justify-between gap-1.5 overflow-x-auto">
                      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                        {project.gallery.map((photo, pIdx) => (
                          <button
                            key={photo.url}
                            onClick={() => setActivePhotoByProject(prev => ({ ...prev, [project.id]: pIdx }))}
                            className={`w-9 h-7 rounded overflow-hidden border transition-all shrink-0 cursor-pointer ${
                              currentPhotoIdx === pIdx 
                                ? 'border-stanley-yellow ring-2 ring-stanley-yellow/30 scale-105' 
                                : 'border-zinc-300 dark:border-stanley-steel opacity-70 hover:opacity-100 hover:border-stanley-yellow/60'
                            }`}
                            title={photo.tag}
                          >
                            <img src={photo.thumbUrl || getThumbUrl(photo.url)} alt="" loading="lazy" decoding="async" width={36} height={28} className="w-full h-full object-cover pointer-events-none" />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setLightbox({ project, photoIndex: currentPhotoIdx })}
                        className="text-[10px] font-bold text-stanley-gold dark:text-stanley-yellow hover:text-amber-600 dark:hover:text-amber-300 px-2 py-1 rounded bg-white dark:bg-stanley-charcoal border border-zinc-300 dark:border-stanley-steel hover:border-stanley-yellow/50 shrink-0 cursor-pointer flex items-center gap-1 shadow-xs"
                      >
                        <span>Agrandir ({project.gallery?.length || 1})</span>
                        <Layers className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-stanley-gold dark:text-stanley-yellow shrink-0" />
                      <span className="font-semibold text-zinc-700 dark:text-slate-300">{project.location}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-slate-50 mb-2 group-hover:text-stanley-gold dark:group-hover:text-stanley-yellow transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-slate-300 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4 bg-zinc-50 dark:bg-stanley-black/70 rounded-xl p-3 border border-zinc-200 dark:border-stanley-steel">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-stanley-gold dark:text-stanley-yellow mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Détails &amp; Étapes ({project.location.split(',')[0]})</span>
                        </div>
                        <ul className="space-y-1 text-[11px] text-zinc-700 dark:text-slate-300">
                          {project.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-stanley-gold dark:text-stanley-yellow font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Estimation de Devis Réelle */}
                    <div className="mb-4 p-3 rounded-xl bg-amber-500/10 dark:bg-amber-400/5 border border-amber-500/30 dark:border-amber-400/20">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stanley-gold dark:text-stanley-yellow flex items-center gap-1">
                          <Calculator className="w-3 h-3" />
                          <span>Estimation de Devis Réel</span>
                        </span>
                        {project.costPerM2 && (
                          <span className="text-[10px] font-semibold text-zinc-600 dark:text-slate-400">
                            {project.costPerM2}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
                          {project.estimatedBudgetAr}
                        </span>
                        <span className="text-xs font-semibold text-amber-700 dark:text-stanley-yellow">
                          ≈ {project.estimatedBudgetEur}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200 dark:border-stanley-steel pt-4 flex items-center justify-between text-xs text-zinc-600 dark:text-slate-300">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Maximize2 className="w-3.5 h-3.5 text-stanley-gold dark:text-stanley-yellow" />
                        {project.surface}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-stanley-gold dark:text-stanley-yellow" />
                        {project.duration}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-stanley-steel border border-zinc-200 dark:border-transparent flex items-center justify-center text-zinc-700 dark:text-slate-300 group-hover:bg-stanley-yellow group-hover:text-stanley-black transition-colors"
                      aria-label={`Demander un devis similaire pour ${project.title}`}
                      title={`Demander un devis pour ce type de chantier (${project.location.split(',')[0]})`}
                    >
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Photo Inspection */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-2 sm:p-6 overflow-y-auto"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Floating Fixed Close Button in Top-Right Corner */}
          <button
            onClick={() => setLightbox(null)}
            className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[110] flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-xs sm:text-sm shadow-2xl transition-all cursor-pointer border-2 border-stanley-black"
            aria-label="Fermer la galerie photo"
            title="Fermer la galerie (Échap)"
          >
            <X className="w-4 h-4 stroke-[3]" />
            <span>Fermer ✕</span>
          </button>

          <div 
            className="relative max-w-5xl w-full bg-zinc-900 dark:bg-stanley-black border border-zinc-700 dark:border-stanley-steel rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 border-b border-zinc-700 dark:border-stanley-steel flex items-center justify-between bg-zinc-800 dark:bg-stanley-charcoal shrink-0 gap-3">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                <span className="px-2.5 py-1 rounded bg-stanley-yellow/15 text-stanley-yellow border border-stanley-yellow/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                  {lightbox.project.status === 'en-cours' ? 'Chantier en cours' : 'Réalisation'}
                </span>
                <h4 className="font-display font-bold text-xs sm:text-base text-slate-100 truncate">
                  {lightbox.project.title}
                </h4>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-xs sm:text-sm transition-all cursor-pointer shrink-0 shadow-md"
                aria-label="Fermer la galerie photo"
                title="Quitter la galerie"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
                <span>Fermer ✕</span>
              </button>
            </div>

            {/* Modal Body: Active Photo */}
            {(() => {
              const photos = lightbox.project.gallery || [{ url: lightbox.project.image, caption: lightbox.project.title, tag: 'Général' }];
              const current = photos[lightbox.photoIndex] || photos[0];

              const goPrev = () => {
                setLightbox(prev => prev ? {
                  ...prev,
                  photoIndex: (prev.photoIndex - 1 + photos.length) % photos.length
                } : null);
              };

              const goNext = () => {
                setLightbox(prev => prev ? {
                  ...prev,
                  photoIndex: (prev.photoIndex + 1) % photos.length
                } : null);
              };

              return (
                <div className="flex-1 flex flex-col overflow-hidden bg-black/70 relative">
                  <div className="relative flex-1 flex items-center justify-center p-2 min-h-[200px] sm:min-h-[460px]">
                    <img
                      src={current.url}
                      alt={current.caption}
                      className="max-h-[48vh] sm:max-h-[58vh] max-w-full object-contain rounded-lg shadow-2xl"
                    />

                    {photos.length > 1 && (
                      <>
                        <button
                          onClick={goPrev}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/90 dark:bg-stanley-charcoal/90 border border-zinc-700 dark:border-stanley-steel text-slate-100 hover:bg-stanley-yellow hover:text-stanley-black transition-all cursor-pointer shadow-xl"
                          aria-label="Photo précédente"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                          onClick={goNext}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/90 dark:bg-stanley-charcoal/90 border border-zinc-700 dark:border-stanley-steel text-slate-100 hover:bg-stanley-yellow hover:text-stanley-black transition-all cursor-pointer shadow-xl"
                          aria-label="Photo suivante"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption & Metadata Footer with Explicit Exit Button */}
                  <div className="p-4 sm:p-5 bg-zinc-800 dark:bg-stanley-charcoal border-t border-zinc-700 dark:border-stanley-steel flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-bold text-stanley-yellow">{current.tag}</span>
                          <span className="text-zinc-400">•</span>
                          <span className="text-zinc-300 font-mono">Photo {lightbox.photoIndex + 1} sur {photos.length}</span>
                          <span className="text-zinc-400">•</span>
                          <span className="text-stanley-yellow font-semibold">{lightbox.project.location}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-100">
                          {current.caption}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-stanley-yellow font-bold text-[11px] border border-amber-500/30">
                            Devis indicatif : {lightbox.project.estimatedBudgetAr} (≈ {lightbox.project.estimatedBudgetEur})
                          </span>
                          {lightbox.project.costPerM2 && (
                            <span className="text-zinc-400 text-[11px]">
                              Soit env. {lightbox.project.costPerM2}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Explicit Return / Exit Button in Footer */}
                      <button
                        onClick={() => setLightbox(null)}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0"
                        title="Fermer et retourner aux réalisations"
                      >
                        <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                        <span>Retour aux chantiers</span>
                      </button>
                    </div>

                    {/* Thumbnail navigation */}
                    {photos.length > 1 && (
                      <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1 border-t border-zinc-700 dark:border-stanley-steel/60 pt-2">
                        {photos.map((p, idx) => (
                          <button
                            key={p.url}
                            onClick={() => setLightbox(prev => prev ? { ...prev, photoIndex: idx } : null)}
                            className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                              idx === lightbox.photoIndex 
                                ? 'border-stanley-yellow scale-105 shadow-md' 
                                : 'border-zinc-700 dark:border-stanley-steel opacity-50 hover:opacity-90'
                            }`}
                            title={p.tag}
                          >
                            <img src={p.thumbUrl || getThumbUrl(p.url)} alt="" loading="lazy" decoding="async" width={48} height={40} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};
