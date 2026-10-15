import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  Droplets,
  Layers,
  ShieldCheck,
  Hammer
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface InteriorPhoto {
  id: string;
  thumbUrl?: string;
  url: string;
  title: string;
  room: string;
  category: 'salle-de-bain' | 'revetement' | 'menuiserie-metal' | 'agencement-bois' | 'combles-deco';
  categoryLabel: string;
  description: string;
  specs: string[];
  dimensions?: string;
}

const getThumbUrl = (url: string): string => {
  if (url.includes('/assets/chantiers/')) {
    return url.replace(/\.webp$/, '-thumb.webp').replace(/\.jpg$/, '-thumb.webp');
  }
  return url;
};

const InteriorCardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
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

export const InteriorGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos: InteriorPhoto[] = [
    // 1. Salles de bain & WC (3 photos)
    {
      id: 'meuble-vasque',
      url: '/assets/chantiers/interieur/meuble-vasque-miroir-led.webp',
      title: 'Meuble Vasque Suspendu & Miroir Rétroéclairé LED',
      room: 'Salle d’Eau Principale',
      category: 'salle-de-bain',
      categoryLabel: 'Sanitaires & Vasque',
      description: 'Ensemble meuble vasque contemporain blanc laqué suspendu avec tiroirs soft-close, miroir panoramique à éclairage LED intégré, robinetterie mitigeur chromée et faïence murale en grès cérame.',
      specs: [
        'Miroir panoramique avec bandeau LED blanc neutre',
        'Meuble suspendu double tiroir avec amortisseurs',
        'Robinetterie mitigeur chromée anti-calcaire',
        'Pose de faïence murale grand format avec joints hydrofuges'
      ],
      dimensions: 'Largeur meuble 90 cm • Miroir 100x70 cm'
    },
    {
      id: 'douche-balneo',
      url: '/assets/chantiers/interieur/douche-balneo-anthracite.webp',
      title: 'Douche à l’Italienne & Colonne Balnéo Anthracite',
      room: 'Salle de Bain / Suite',
      category: 'salle-de-bain',
      categoryLabel: 'Douche & Balnéo',
      description: 'Espace douche à l’italienne avec colonne d’hydromassage en aluminium brossé gris anthracite, mitigeur thermostatique de sécurité, pommeau de tête cascade et contraste faïence ardoise / marbre Calacatta.',
      specs: [
        'Colonne d’hydromassage multifonction (pluie, cascade, jets massants)',
        'Mitigeur thermostatique avec sécurité anti-brûlure 38°C',
        'Étanchéité sous carrelage (SPEC) bicouche armée',
        'Carrelage mural ardoise anthracite grand format'
      ],
      dimensions: 'Receveur maçonné à fleur de sol 120x90 cm'
    },
    {
      id: 'sanitaires-wc-vasque',
      url: '/assets/chantiers/interieur/sanitaires-wc-vasque-industrielle.webp',
      title: 'Espace Sanitaires, WC & Vasque Style Atelier',
      room: 'Toilettes Invités / RDC',
      category: 'salle-de-bain',
      categoryLabel: 'Sanitaires & WC',
      description: 'Aménagement d’un espace sanitaires moderne comprenant une cuvette WC céramique blanche double touche éco, une vasque rectangulaire sur console métallique noire style atelier et faïence murale blanche.',
      specs: [
        'Cuvette céramique émaillée vitrifiée avec abattant frein de chute',
        'Vasque compacte céramique sur piétement acier thermolaqué noir',
        'Double étagère de rangement avec plateau hydrofuge',
        'Faïence murale blanc brillant et sol carrelé sombre anti-dérapant'
      ],
      dimensions: 'Espace WC compact 1.80 m² optimisé'
    },

    // 2. Carrelages & Marbrerie (3 photos)
    {
      id: 'faience-marbre-calacatta',
      url: '/assets/chantiers/interieur/faience-marbre-calacatta.webp',
      title: 'Faïence Murale Haut de Gamme Effet Marbre Calacatta',
      room: 'Revêtement Mural & Plafond',
      category: 'revetement',
      categoryLabel: 'Carrelage & Marbre',
      description: 'Habillage mural en carreaux rectifiés grand format imitation marbre blanc veiné de noir (Calacatta). Découpes précises des angles sortants, jointoiement fin hydrofuge et intégration de la grille de ventilation d’extraction.',
      specs: [
        'Grès cérame émaillé rectifié effet marbre blanc Calacatta',
        'Calepinage au laser pour alignement parfait des veinages',
        'Découpes d’angles soignées et grille d’aération intégrée',
        'Traitement anti-moisissures et joints époxy haute durabilité'
      ],
      dimensions: 'Dalles grand format 60x120 cm rectifiées'
    },
    {
      id: 'calepinage-faience-plafond',
      url: '/assets/chantiers/interieur/calepinage-faience-calacatta-plafond.webp',
      title: 'Calepinage Précis & Raccordement Faïence au Plafond',
      room: 'Angle & Retombée de Plafond',
      category: 'revetement',
      categoryLabel: 'Carrelage & Marbre',
      description: 'Découpes millimétrées et ajustement parfait des dalles en faïence Calacatta avec continuité des veinages sur l’arête d’angle et jonction propre avec le plafond plâtré.',
      specs: [
        'Alignement géométrique continu des veinages marbrés',
        'Découpe d’arête d’angle sans éclats avec disque diamanté à eau',
        'Jointoiement d’étanchéité périphérique sous plafond',
        'Surface lessivable et insensible aux vapeurs d’eau chaudes'
      ],
      dimensions: 'Hauteur sous plafond 2.50 m • Raccord d’angle 90°'
    },
    {
      id: 'faience-marbre-ambre',
      url: '/assets/chantiers/interieur/faience-marbre-ambre-brillant.webp',
      title: 'Grès Cérame Effet Marbre Ambré Poli Miroir',
      room: 'Espace Bains & Bien-Être',
      category: 'revetement',
      categoryLabel: 'Carrelage & Marbre',
      description: 'Pose murale de carreaux grand format effet marbre ambré et emperador avec finition polie miroir ultra-brillante, apportant une ambiance chaleureuse et lumineuse par reflets naturels.',
      specs: [
        'Finition poli brillant réfléchissant la lumière naturelle',
        'Nuances de veinages ocres, marron et crème haute définition',
        'Résistance totale aux taches, calcaire et produits d’entretien',
        'Collage double encollage avec colle flex déformable C2S1'
      ],
      dimensions: 'Dalles grand format 60x120 cm polies brillantes'
    },

    // 3. Menuiseries & Métallerie (3 photos)
    {
      id: 'escalier-acier',
      url: '/assets/chantiers/interieur/escalier-beton-rampe-acier.webp',
      title: 'Escalier Béton Armé & Rampe Métallique Contemporaine',
      room: 'Cage d’Escalier & Distribution',
      category: 'menuiserie-metal',
      categoryLabel: 'Escalier & Métal',
      description: 'Escalier droit en béton armé monobloc avec garde-corps contemporain en profilés d’acier tubulaire thermolaqués gris anthracite. Éclairage mural par appliques design et apport de lumière naturelle sur mur maçonné.',
      specs: [
        'Structure porteuse en béton armé vibré dosé à 350 kg/m³',
        'Garde-corps contemporain soudé sur mesure et laqué au four',
        'Main courante ergonomique et barreaux sécurisés conformes NF',
        'Appliques lumineuses encastrées pour balisage nocturne'
      ],
      dimensions: 'Volée de 16 marches • Hauteur sous plafond 2.80 m'
    },
    {
      id: 'fenetre-fer-forge',
      url: '/assets/chantiers/interieur/fenetre-securite-fer-forge.webp',
      title: 'Menuiserie Oscillo-Battante & Grille Forgée Sécurité',
      room: 'Ouvertures & Protection',
      category: 'menuiserie-metal',
      categoryLabel: 'Menuiserie & Sécurité',
      description: 'Châssis oscillo-battant en PVC blanc avec double vitrage isolant, encadré par des faïences marbrées et protégé par une grille en fer forgé plein aux motifs géométriques artisanaux fabriquée dans nos ateliers.',
      specs: [
        'Menuiserie oscillo-battante double vitrage 4/16/4 isolant',
        'Grille de défense en fer forgé plein scellée dans la maçonnerie',
        'Traitement antirouille haute résistance et finition satinée',
        'Tableau de fenêtre habillé en faïence marbrée sans bavure'
      ],
      dimensions: 'Châssis 60x60 cm oscillo-battant avec grille scellée'
    },
    {
      id: 'menuiserie-panoramique',
      url: '/assets/chantiers/interieur/menuiserie-aluminium-vue-panoramique.webp',
      title: 'Châssis Vitré Aluminium & Vue Panoramique sur Tana',
      room: 'Pièce de Vie / Chambre Étage',
      category: 'menuiserie-metal',
      categoryLabel: 'Menuiserie & Vues',
      description: 'Menuiserie aluminium thermolaquée avec ouvrant et imposte fixe, vitrage thermique apportant une grande clarté et offrant une vue panoramique sur les plaines et collines d’Antananarivo.',
      specs: [
        'Profilés en aluminium à rupture de pont thermique',
        'Double vitrage phonique et thermique retardateur d’effraction',
        'Poignée ergonomique sécurisée avec crémone multipoints',
        'Vue panoramique traversante et apport maximal de lumière'
      ],
      dimensions: 'Hauteur 1.60 m • Largeur 0.80 m'
    },

    // 4. Mobilier & Agencement Bois (3 photos)
    {
      id: 'comptoir-bar-tasseaux',
      url: '/assets/chantiers/interieur/comptoir-bar-tasseaux-bois.webp',
      title: 'Comptoir Bar Cuisine & Tasseaux Bois Massif',
      room: 'Espace Cuisine & Salle à Manger',
      category: 'agencement-bois',
      categoryLabel: 'Agencement & Bois',
      description: 'Conception et fabrication sur mesure d’un comptoir bar séparateur avec claustra en tasseaux de bois dur massif, plan de travail effet ardoise minérale, habillage latéral marbré et parquet latté bicolore au sol.',
      specs: [
        'Tasseaux verticaux en bois dur massif local raboté et verni',
        'Plan de travail hydrofuge résistant aux rayures et à la chaleur',
        'Habillage latéral en panneau composite marbré coordonné',
        'Plancher caillebotis bicolore artisanal en lames de bois franc'
      ],
      dimensions: 'Longueur 2.10 m • Hauteur comptoir 1.05 m'
    },
    {
      id: 'chambre-lit-plateforme',
      url: '/assets/chantiers/interieur/chambre-lit-plateforme-bois-massif.webp',
      title: 'Lit Plateforme Bois Massif & Tête Asymétrique Bi-Matière',
      room: 'Suite Parentale / Combles',
      category: 'agencement-bois',
      categoryLabel: 'Mobilier & Literie',
      description: 'Aménagement d’une suite parentale avec lit plateforme surbaissé deux places fabriqué artisanalement en bois massif verni, tête de lit monumentale asymétrique combinant bois veiné et parement textile anthracite, sur sol rouge brique traditionnel lustré.',
      specs: [
        'Cadre de lit plateforme et sommier à lattes en bois massif raboté',
        'Tête de lit murale asymétrique combinant bois verni et tissu feutré',
        'Tables de chevet galbées de style classique en harmonie',
        'Sol teinté rouge brique traditionnel malgache lustré à la cire'
      ],
      dimensions: 'Couchage 160x200 cm • Tête de lit 2.60 m de large'
    },
    {
      id: 'combles-fenetre-osb',
      url: '/assets/chantiers/interieur/amenagement-combles-fenetre-bois-osb.webp',
      title: 'Aménagement Combles Habitables & Fenêtre Bois',
      room: 'Combles Aménagés & Rampants',
      category: 'agencement-bois',
      categoryLabel: 'Combles & Menuiserie',
      description: 'Isolation thermique sous rampants et doublage en panneaux structuraux bois / OSB, menuiserie bois massif avec rideau et vue imprenable sur le paysage environnant.',
      specs: [
        'Isolation sous toiture pour régulation thermique toute saison',
        'Doublage sous charpente en panneaux OSB poncés haute densité',
        'Châssis en bois dur ouvrant avec vue dégagée sur les collines',
        'Optimisation de l’espace mansardé pour pièce de nuit ou bureau'
      ],
      dimensions: 'Combles aménagés • Volume sous pente habitable'
    },

    // 5. Combles, Peinture & Décoration (3 photos)
    {
      id: 'ossature-bois-combles',
      url: '/assets/chantiers/interieur/ossature-bois-isolation-combles-osb.webp',
      title: 'Ossature Bois & Doublage sous Rampants OSB',
      room: 'Chantier Combles & Toiture',
      category: 'combles-deco',
      categoryLabel: 'Ossature & Isolation',
      description: 'Phase de réalisation du doublage intérieur sous charpente : pose de chevrons et contre-lattage en bois massif, pare-pluie respirant et fixation de panneaux structuraux OSB garantissant une isolation thermique performante.',
      specs: [
        'Panneaux OSB 3 sans formaldéhyde résistant à l’humidité',
        'Fixation mécanique renforcée sur ossature et fermes de charpente',
        'Écran de sous-toiture pare-pluie respirant sous couverture',
        'Isolation thermique réduisant les surchauffes estivales des combles'
      ],
      dimensions: 'Surface de rampants isolés 95 m²'
    },
    {
      id: 'chambre-decor-papier-peint',
      url: '/assets/chantiers/interieur/chambre-decor-papier-peint-floral.webp',
      title: 'Décoration Murale Panoramique & Plafond Lambris Bois',
      room: 'Chambre à Coucher Contemporaine',
      category: 'combles-deco',
      categoryLabel: 'Décoration & Papier Peint',
      description: 'Mise en valeur architecturale d’une chambre avec application de lés décoratifs en papier peint intissé aux motifs floraux et botaniques bleu nuit, encadrant un pan de mur blanc lisse, plafond lambrissé verni et plinthes assorties.',
      specs: [
        'Papier peint intissé haute densité lavable à motifs graphiques',
        'Encollage soigné sans raccords visibles ni bulles d’air',
        'Plafond chaud en lambris bois dur verni satiné naturel',
        'Plinthes d’arrêt carrelées sombres protégeant la base du mur'
      ],
      dimensions: 'Chambre 14 m² • Hauteur sous plafond 2.70 m'
    },
    {
      id: 'decoration-peinture',
      url: '/assets/chantiers/interieur/decoration-peinture-tableau-mural.webp',
      title: 'Finitions Peinture Satinée & Décoration Murale',
      room: 'Séjour / Salon Intérieur',
      category: 'combles-deco',
      categoryLabel: 'Peinture & Décoration',
      description: 'Travaux de plâtrerie et d’enduisage fin, mise en peinture satinée lessivable blanc épuré sur cloisons maçonnées, mise en scène par un tableau d’art contemporain aux cygnes.',
      specs: [
        'Enduit de lissage soigné appliqué en passes croisées',
        'Peinture de finition velours blanc pur à fort pouvoir couvrant',
        'Arêtes murales droites et angles sans défauts',
        'Mise en valeur d’œuvres d’art et mobilier contemporain'
      ],
      dimensions: 'Cloison salon 15 m² • Finition haute qualité'
    }
  ];

  const categories = [
    { key: 'all', label: 'Toutes les finitions', count: photos.length },
    { key: 'salle-de-bain', label: 'Salles de bain & WC', count: photos.filter(p => p.category === 'salle-de-bain').length },
    { key: 'revetement', label: 'Carrelages & Marbres', count: photos.filter(p => p.category === 'revetement').length },
    { key: 'menuiserie-metal', label: 'Menuiseries & Métal', count: photos.filter(p => p.category === 'menuiserie-metal').length },
    { key: 'agencement-bois', label: 'Agencement & Bois', count: photos.filter(p => p.category === 'agencement-bois').length },
    { key: 'combles-deco', label: 'Combles & Déco', count: photos.filter(p => p.category === 'combles-deco').length },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory);


  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex(prev => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0));
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex(prev => (prev !== null ? (prev + 1) % filteredPhotos.length : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const whatsappInquiryUrl = (photoTitle: string) =>
    `https://wa.me/261375135964?text=${encodeURIComponent(
      `Bonjour Stanley Construction, j'ai vu la réalisation "${photoTitle}" dans votre galerie intérieure. Je souhaite un devis similaire pour mon projet à Antananarivo.`
    )}`;

  return (
    <section
      id="galerie-interieur"
      aria-label="Galerie Aménagement Intérieur et Second Œuvre Antananarivo"
      className="py-24 bg-white dark:bg-stanley-charcoal relative border-t border-zinc-200 dark:border-stanley-steel transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-stanley-yellow/30 text-stanley-gold dark:text-stanley-yellow text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>15 Réalisations Photographiées • Second Œuvre &amp; Finitions</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 dark:text-slate-50 tracking-tight">
              Galerie Intérieur &amp; Finitions Haut de Gamme
            </h2>
            <p className="text-zinc-600 dark:text-slate-300 text-base leading-relaxed">
              Découvrez la précision du second œuvre exécuté par nos artisans sur nos chantiers à Antananarivo : faïences marbrées Calacatta et Emperador, salles d'eau avec douches balnéo, menuiserie et métallerie contemporaines, agencement sur mesure en bois massif, combles isolés et décoration soignée.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.key
                    ? 'bg-stanley-yellow text-stanley-black shadow-md'
                    : 'bg-zinc-100 dark:bg-stanley-black border border-zinc-200 dark:border-stanley-steel text-zinc-700 dark:text-slate-300 hover:border-stanley-yellow/60 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.key ? 'bg-black/20 text-stanley-black' : 'bg-zinc-200 dark:bg-stanley-charcoal text-zinc-600 dark:text-zinc-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Interior Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredPhotos.map((photo, index) => {
                        return (
              <article
                key={photo.id}
                className="group rounded-2xl overflow-hidden bg-zinc-50 dark:bg-stanley-black border border-zinc-200 dark:border-stanley-steel hover:border-stanley-yellow/70 dark:hover:border-stanley-yellow/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 shadow-sm"
              >
                {/* Image Showcase */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => setSelectedPhotoIndex(index)}
                  title="Cliquer pour agrandir et inspecter les détails"
                >
                  <InteriorCardImage src={photo.url} alt={photo.title} />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="bg-black/80 dark:bg-stanley-black/90 backdrop-blur-md text-stanley-yellow border border-zinc-700 dark:border-stanley-steel text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                      {photo.categoryLabel}
                    </span>
                    <span className="bg-stanley-yellow text-stanley-black text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                      RÉEL
                    </span>
                  </div>

                  {/* Zoom Pill Overlay */}
                  <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-slate-100 text-xs font-semibold border border-zinc-700">
                      <Maximize2 className="w-3.5 h-3.5 text-stanley-yellow" />
                      <span>Zoom HD</span>
                    </span>
                  </div>

                  {/* Room indicator */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-medium text-slate-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      {photo.room}
                    </span>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-slate-50 mb-2 group-hover:text-stanley-gold dark:group-hover:text-stanley-yellow transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-slate-300 text-xs leading-relaxed mb-4">
                      {photo.description}
                    </p>

                    {/* Technical Specs List */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-200 dark:border-stanley-steel/80">
                      {photo.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-zinc-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-stanley-gold dark:text-stanley-yellow shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-3 border-t border-zinc-200 dark:border-stanley-steel flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedPhotoIndex(index)}
                      className="text-xs font-bold text-zinc-800 dark:text-slate-200 hover:text-stanley-gold dark:hover:text-stanley-yellow flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Inspecter les détails</span>
                      <Maximize2 className="w-3 h-3 text-stanley-yellow" />
                    </button>

                    <a
                      href={whatsappInquiryUrl(photo.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-stanley-charcoal border border-zinc-300 dark:border-stanley-steel hover:border-[#25D366] text-zinc-900 dark:text-slate-100 text-[11px] font-bold transition-all shadow-xs group/wa"
                      title="Demander cette finition sur WhatsApp"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span>Ce modèle</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quality Guarantees Bar for Interior Finishes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-stanley-black border border-zinc-200 dark:border-stanley-steel">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-stanley-yellow/30 flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-zinc-900 dark:text-slate-100 uppercase tracking-wide">
                Marbrerie &amp; Grand Format
              </h4>
              <p className="text-[11px] text-zinc-600 dark:text-slate-400 mt-1 leading-snug">
                Calepinage au laser, découpes d'angles d'onglet nettes à 45° et joints fins hydrofuges.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-stanley-yellow/30 flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-zinc-900 dark:text-slate-100 uppercase tracking-wide">
                Étanchéité Certifiée
              </h4>
              <p className="text-[11px] text-zinc-600 dark:text-slate-400 mt-1 leading-snug">
                Système de Protection à l'Eau sous Carrelage (SPEC) avec bandes d'étanchéité aux angles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-stanley-yellow/30 flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-zinc-900 dark:text-slate-100 uppercase tracking-wide">
                Ferronnerie &amp; Sécurité
              </h4>
              <p className="text-[11px] text-zinc-600 dark:text-slate-400 mt-1 leading-snug">
                Grilles forgées en fer plein scellées et garde-corps acier thermolaqué anti-corrosion.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-stanley-yellow/30 flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
              <Hammer className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-zinc-900 dark:text-slate-100 uppercase tracking-wide">
                Coordination 100% Locale
              </h4>
              <p className="text-[11px] text-zinc-600 dark:text-slate-400 mt-1 leading-snug">
                Plombiers, électriciens, carreleurs et menuisiers supervisés par un conducteur dédié.
              </p>
            </div>
          </div>
        </div>

        {/* Quick CTA Bottom Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-stanley-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-base text-zinc-900 dark:text-slate-50">
              Vous planifiez une rénovation intérieure ou la finition de votre villa ?
            </h4>
            <p className="text-xs text-zinc-600 dark:text-slate-300">
              Envoyez-nous vos plans ou photos par WhatsApp pour obtenir une estimation chiffrée sous 24h.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20devis%20pour%20des%20finitions%20int%C3%A9rieures%20(salle%20de%20bain,%20carrelage,%20escalier,%20mobilier)%20%C3%A0%20Antananarivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Devis Intérieur WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-xs shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>Estimateur en ligne</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/75 dark:bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedPhotoIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[94vh] transition-colors"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 border-b border-zinc-200 dark:border-stanley-steel flex items-center justify-between bg-zinc-50 dark:bg-stanley-black shrink-0 gap-3 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                <span className="px-2.5 py-1 rounded bg-amber-500/10 dark:bg-stanley-yellow/15 text-stanley-gold dark:text-stanley-yellow border border-amber-500/20 dark:border-stanley-yellow/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                  {activePhoto.categoryLabel}
                </span>
                <h4 className="font-display font-bold text-xs sm:text-base text-zinc-900 dark:text-slate-100 truncate">
                  {activePhoto.title}
                </h4>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs hidden sm:inline">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-xs transition-all cursor-pointer shadow-sm hover:shadow"
                  aria-label="Fermer la vue agrandie"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                  <span>Fermer ✕</span>
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 flex flex-col overflow-hidden bg-zinc-950 dark:bg-black/85 relative">
              <div className="relative flex-1 flex items-center justify-center p-2 min-h-[200px] sm:min-h-[460px]">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="max-h-[48vh] sm:max-h-[58vh] max-w-full object-contain rounded-lg shadow-2xl"
                />

                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedPhotoIndex(
                          (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-stanley-charcoal/90 border border-zinc-200 dark:border-stanley-steel text-zinc-800 dark:text-slate-100 hover:bg-stanley-yellow hover:text-stanley-black transition-all cursor-pointer shadow-xl"
                      aria-label="Photo précédente"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() =>
                        setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-stanley-charcoal/90 border border-zinc-200 dark:border-stanley-steel text-zinc-800 dark:text-slate-100 hover:bg-stanley-yellow hover:text-stanley-black transition-all cursor-pointer shadow-xl"
                      aria-label="Photo suivante"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Details Footer */}
              <div className="p-4 sm:p-5 bg-white dark:bg-stanley-charcoal border-t border-zinc-200 dark:border-stanley-steel flex flex-col gap-3 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-stanley-gold dark:text-stanley-yellow">{activePhoto.room}</span>
                      {activePhoto.dimensions && (
                        <>
                          <span className="text-zinc-400 dark:text-zinc-500">•</span>
                          <span className="text-zinc-600 dark:text-slate-300 text-[11px]">{activePhoto.dimensions}</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 leading-relaxed">
                      {activePhoto.description}
                    </p>
                  </div>

                  {/* Direct WhatsApp CTA for this specific photo */}
                  <a
                    href={whatsappInquiryUrl(activePhoto.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Demander sur WhatsApp</span>
                  </a>
                </div>

                {/* Thumbnails Navigator */}
                {filteredPhotos.length > 1 && (
                  <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1 border-t border-zinc-200 dark:border-stanley-steel/60 pt-2">
                    {filteredPhotos.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPhotoIndex(idx)}
                        className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          idx === selectedPhotoIndex
                            ? 'border-stanley-yellow scale-105 shadow-md ring-2 ring-stanley-yellow/40'
                            : 'border-zinc-300 dark:border-stanley-steel opacity-60 hover:opacity-100'
                        }`}
                        title={p.title}
                      >
                        <img src={p.thumbUrl || getThumbUrl(p.url)} alt="" loading="lazy" decoding="async" width={56} height={44} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
