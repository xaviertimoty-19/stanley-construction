import React, { useState, useEffect } from 'react';
import { MapPin, Maximize2, Calendar, ArrowUpRight, Camera, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export interface ProjectPhoto {
  url: string;
  caption: string;
  tag: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'en-cours' | 'livre';
  statusLabel: string;
  category: 'gros-oeuvre' | 'tp' | 'renovation' | 'neuf' | 'diaspora';
  categoryLabel: string;
  location: string;
  surface: string;
  duration: string;
  image: string;
  gallery?: ProjectPhoto[];
  description: string;
  highlights?: string[];
  isRealChantier?: boolean;
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [activePhotoByProject, setActivePhotoByProject] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ project: Project; photoIndex: number } | null>(null);

  const handleImageLoad = (key: string) => {
    setLoadedImages(prev => ({ ...prev, [key]: true }));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const projects: Project[] = [
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
      image: '/assets/chantiers/chantier-tana-brique-facade-principale.jpg',
      isRealChantier: true,
      gallery: [
        {
          url: '/assets/chantiers/chantier-tana-brique-facade-principale.jpg',
          caption: 'Façade principale R+2 en briques cuites traditionnelles avec balcon en fer forgé et lucarnes maçonnées',
          tag: 'Façade Principale'
        },
        {
          url: '/assets/chantiers/chantier-tana-brique-facade-pignon.jpg',
          caption: 'Élévation latérale montrant le pignon triangulaire en briques cuites artisanales et mur d\'enceinte paysager',
          tag: 'Façade Pignon'
        },
        {
          url: '/assets/chantiers/chantier-tana-charpente-ferme-traditionnelle.jpg',
          caption: 'Ferme maîtresse triangulée en bois massif (arbalétriers, poinçon, contrefiches) renforcée par boulons zingués et baladeuse de chantier',
          tag: 'Charpente Bois Massif'
        },
        {
          url: '/assets/chantiers/chantier-tana-charpente-vue-lucarne.jpg',
          caption: 'Vue d\'ensemble de l\'ossature des combles avec éclairage de chantier et vue sur la lucarne de toit',
          tag: 'Combles & Lucarnes'
        },
        {
          url: '/assets/chantiers/chantier-tana-toiture-chevrons-combles.jpg',
          caption: 'Pose des chevrons calibrés sous écran pare-pluie / pare-vapeur avec scellement au mur pignon maçonné',
          tag: 'Toiture & Chevrons'
        }
      ],
      highlights: [
        "Chantier réel regroupant l'ensemble des 5 photos du projet à Atsimondrano",
        "Architecture patrimoniale en briques de terre cuite locales",
        "Taille et levage d'une charpente en bois dur massif local",
        "Écran de sous-toiture pare-pluie respirant et isolation combles",
        "Reporting vidéo régulier pour le maître d'ouvrage (Diaspora / Résident)"
      ],
      description: "Chantier d'envergure mené à Atsimondrano (Antananarivo) sur une bâtisse bourgeoise traditionnelle en briques cuites. Confortement structurel, réfection totale de la charpente en bois massif artisanal, écran pare-pluie et aménagement des combles habitables sous lucarnes."
    },
    {
      id: 'p1',
      title: "Mur de Soutènement & Plateforme en Pente",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'gros-oeuvre',
      categoryLabel: 'Gros Œuvre & Pentes',
      location: 'Imerinkasinina, Antananarivo',
      surface: '650 m²',
      duration: 'Livré • 2 mois de travaux',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?q=80&w=1200&fm=webp&auto=format&fit=crop',
      description: "Terrassement en déblai/remblai, mur de soutènement en béton armé de 4.5m de hauteur et réseau de drainage pluvial avec barbacanes."
    },
    {
      id: 'p2',
      title: "Villa R+1 Clé en Main pour la Diaspora",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'diaspora',
      categoryLabel: 'Projet Diaspora',
      location: 'Ivato Aéroport, Antananarivo',
      surface: '280 m²',
      duration: 'Livré • 7 mois de travaux',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&fm=webp&auto=format&fit=crop',
      description: "Construction complète suivie à distance depuis Paris : fondations semelles isolées, briques cuites de qualité, menuiseries alu et finitions premium."
    },
    {
      id: 'p3',
      title: "Villa d'Architecte sur les Hauteurs",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'neuf',
      categoryLabel: 'Construction Neuve',
      location: 'Ambatobe, Antananarivo',
      surface: '340 m²',
      duration: 'Livré • 8.5 mois',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&fm=webp&auto=format&fit=crop',
      description: "Ouvrage moderne avec vue panoramique sur les collines sacrées. Béton hydrofuge, grandes baies vitrées et toiture terrasse étanchée."
    },
    {
      id: 'p4',
      title: "Rénovation Lourde & Renfort de Structure",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'renovation',
      categoryLabel: 'Rénovation Tana',
      location: 'Isoraka / Antaninarenina, Tana',
      surface: '210 m²',
      duration: 'Livré • 4 mois',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&fm=webp&auto=format&fit=crop',
      description: "Reprise sous-œuvre de fondations anciennes, ouverture avec profilés IPN traités anti-corrosion et rénovation complète des réseaux."
    },
    {
      id: 'p5',
      title: "Aménagement VRD & Piste Carrossable",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'tp',
      categoryLabel: 'Travaux Publics & VRD',
      location: 'By-pass / Tanjombato, Atsimondrano',
      surface: '1 800 m²',
      duration: 'Livré • 1.5 mois',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&fm=webp&auto=format&fit=crop',
      description: "Création d'un accès privé pour résidences : caniveaux maçonnés, dallettes de franchissement, empierrement et compactage au rouleau vibrant."
    },
    {
      id: 'p6',
      title: "Résidence Familiale Contemporaine",
      status: 'livre',
      statusLabel: 'Chantier Livré',
      category: 'neuf',
      categoryLabel: 'Construction Neuve',
      location: 'Ilafy, Antananarivo',
      surface: '220 m²',
      duration: 'Livré • 6 mois',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&fm=webp&auto=format&fit=crop',
      description: "Conception thermique naturelle adaptée au climat des Hautes Terres, isolation phonique soignée et cuve de récupération d'eau intégrée."
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous nos chantiers' },
    { key: 'en-cours', label: '⚡ Chantier en cours (Atsimondrano)' },
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
      : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" aria-label="Portfolio et Réalisations BTP Antananarivo" className="py-24 bg-navy-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chantiers Réels &amp; Suivis en Direct à Antananarivo</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-50 tracking-tight">
              Nos Chantiers en Cours &amp; Réalisations
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Découvrez nos chantiers sur le terrain à Antananarivo, dont notre projet actuellement en cours à <strong className="text-amber-400 font-semibold">Atsimondrano</strong> (bâtisse R+2 en briques cuites, taille de charpente en bois massif et toiture).
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
                    ? 'bg-amber-500 text-navy-950 shadow-md shadow-amber-500/20'
                    : 'bg-navy-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
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
                className={`group rounded-2xl overflow-hidden bg-navy-900 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl ${
                  isOngoing 
                    ? 'border-amber-500/40 hover:border-amber-400 hover:shadow-amber-500/15 ring-1 ring-amber-500/20' 
                    : 'border-slate-800 hover:border-amber-500/40 hover:shadow-amber-500/10'
                }`}
              >
                {/* Image Container with Interactive Switcher */}
                <div className="relative">
                  <figure 
                    className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                    onClick={() => setLightbox({ project, photoIndex: currentPhotoIdx })}
                    title="Cliquez pour agrandir les photos en haute résolution"
                  >
                    {!loadedImages[`${project.id}-${currentPhotoIdx}`] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900 animate-pulse">
                        <Camera className="w-8 h-8 text-slate-700 animate-pulse" />
                      </div>
                    )}
                    
                    <img
                      src={currentPhoto.url}
                      alt={currentPhoto.caption}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleImageLoad(`${project.id}-${currentPhotoIdx}`)}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                        loadedImages[`${project.id}-${currentPhotoIdx}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="bg-navy-950/90 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {project.categoryLabel}
                      </span>

                      {isOngoing ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-slate-950 border border-emerald-400/40 text-[10px] font-extrabold shadow-md tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                          <span>EN COURS • ATSIMONDRANO</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-slate-300 border border-slate-700 text-[10px] font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Livré</span>
                        </span>
                      )}
                    </div>

                    {/* Photo Tag & Gallery Indicator overlay */}
                    {project.gallery && project.gallery.length > 1 && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200">
                        <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 font-semibold text-amber-400">
                          {currentPhoto.tag}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1 font-mono text-[10px]">
                          <Camera className="w-3 h-3 text-amber-400" />
                          {currentPhotoIdx + 1} / {project.gallery.length} photos
                        </span>
                      </div>
                    )}
                  </figure>

                  {/* Thumbnail Bar for project with all 5 photos */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="bg-navy-950/95 px-3 py-2 border-b border-slate-800/80 flex items-center justify-between gap-1.5 overflow-x-auto">
                      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                        {project.gallery.map((photo, pIdx) => (
                          <button
                            key={photo.url}
                            onClick={() => setActivePhotoByProject(prev => ({ ...prev, [project.id]: pIdx }))}
                            className={`w-9 h-7 rounded overflow-hidden border transition-all shrink-0 cursor-pointer ${
                              currentPhotoIdx === pIdx 
                                ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105' 
                                : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                            }`}
                            title={photo.tag}
                          >
                            <img src={photo.url} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setLightbox({ project, photoIndex: currentPhotoIdx })}
                        className="text-[10px] font-bold text-amber-400 hover:text-amber-300 px-2 py-1 rounded bg-navy-900 border border-amber-500/20 hover:border-amber-500/40 shrink-0 cursor-pointer flex items-center gap-1"
                      >
                        <span>Agrandir (5)</span>
                        <Layers className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-300">{project.location}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-50 mb-2 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4 bg-navy-950/60 rounded-xl p-3 border border-slate-800/80">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Détails &amp; Étapes du Chantier (Atsimondrano)</span>
                        </div>
                        <ul className="space-y-1 text-[11px] text-slate-300">
                          {project.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                        {project.surface}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {project.duration}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-amber-500 group-hover:text-navy-950 transition-colors"
                      aria-label={`Demander un devis similaire pour ${project.title}`}
                      title="Demander un devis pour ce type de chantier à Atsimondrano"
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-5xl w-full bg-navy-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-navy-900/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                  Chantier en cours • Atsimondrano, Antananarivo
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-100 truncate max-w-md">
                  {lightbox.project.title}
                </h4>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fermer la galerie photo"
              >
                <X className="w-5 h-5" />
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
                <div className="flex-1 flex flex-col overflow-hidden bg-black/60 relative">
                  <div className="relative flex-1 flex items-center justify-center p-2 min-h-[300px] sm:min-h-[460px]">
                    <img
                      src={current.url}
                      alt={current.caption}
                      className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
                    />

                    {photos.length > 1 && (
                      <>
                        <button
                          onClick={goPrev}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-900/80 border border-slate-700 text-slate-100 hover:bg-amber-500 hover:text-navy-950 transition-all cursor-pointer shadow-xl"
                          aria-label="Photo précédente"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                          onClick={goNext}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-900/80 border border-slate-700 text-slate-100 hover:bg-amber-500 hover:text-navy-950 transition-all cursor-pointer shadow-xl"
                          aria-label="Photo suivante"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption & Metadata Footer */}
                  <div className="p-4 sm:p-5 bg-navy-950 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-amber-400">{current.tag}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 font-mono">Photo {lightbox.photoIndex + 1} sur {photos.length}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-emerald-400 font-semibold">Chantier Atsimondrano</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {current.caption}
                      </p>
                    </div>

                    {/* Thumbnail navigation */}
                    {photos.length > 1 && (
                      <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1">
                        {photos.map((p, idx) => (
                          <button
                            key={p.url}
                            onClick={() => setLightbox(prev => prev ? { ...prev, photoIndex: idx } : null)}
                            className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                              idx === lightbox.photoIndex 
                                ? 'border-amber-400 scale-105 shadow-md' 
                                : 'border-slate-800 opacity-50 hover:opacity-90'
                            }`}
                          >
                            <img src={p.url} alt="" className="w-full h-full object-cover" />
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
