import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, ChevronDown, Clock, Zap, Target, Video, Mountain } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20devis%20pour%20un%20projet%20à%20Antananarivo.";

  return (
    <section id="accueil" aria-label="Présentation Stanley Construction Antananarivo" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-950">
      {/* Background Gradients & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-navy-900 to-navy-950 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Badge top */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Antananarivo & Régions • Entreprise Fondée il y a 1 an • Équipe de +15 ans d'expérience</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-50 leading-[1.15]">
            Construire à Antananarivo : <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200 bg-clip-text text-transparent">
              Rigueur Technique & Suivi Diaspora
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Créée il y a 1 an pour apporter transparence et réactivité sur le marché malgache, <strong className="text-slate-50 font-semibold">Stanley Construction</strong> met 
            à profit l'expérience cumulée de plus de <strong className="text-amber-400 font-semibold">+15 ans sur chantiers</strong> de son équipe. 
            Résidents à Tana ou membres de la diaspora finançant au pays, bénéficiez de fondations adaptées à nos sols et d'un reporting photo/vidéo régulier.
          </p>

          {/* Call to actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
            >
              <span>Devis Réactif sous 24h</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>WhatsApp : +261 37 51 359 64</span>
            </a>
          </div>

          {/* Quick Hotline Mention */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Appel direct chantiers : <a href="tel:+261348110715" className="text-amber-400 font-bold hover:underline tracking-wide">+261 34 81 107 15</a>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Ligne WhatsApp : <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline tracking-wide">+261 37 51 359 64</a>
            </span>
          </div>

          {/* Local Reassurance Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <Mountain className="w-4 h-4 text-amber-500" />
              <span>Spécialiste Sols en Pente & Soutènement</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <Video className="w-4 h-4 text-amber-500" />
              <span>Reporting Photo & Vidéo HD Diaspora</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Matériaux aux Normes & Dosages Contrôlés</span>
            </div>
          </div>
        </div>

        {/* Floating statistics strip highlighting directives */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-slate-800 text-center hover:border-amber-500/30 transition-all shadow-lg">
            <div className="flex justify-center mb-2 text-amber-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-50">1 An</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Nouvelle Approche Tana</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Disponibilité & transparence</div>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-slate-800 text-center hover:border-amber-500/30 transition-all shadow-lg">
            <div className="flex justify-center mb-2 text-amber-500">
              <Clock className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-50">+15 Ans</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Expérience Cumulée</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Maîtrise du terrain malgache</div>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-slate-800 text-center hover:border-amber-500/30 transition-all shadow-lg">
            <div className="flex justify-center mb-2 text-emerald-400">
              <Zap className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-50">&lt; 24h</div>
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mt-1">Réactivité WhatsApp</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Chiffrage clair & visite terrain</div>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-slate-800 text-center hover:border-amber-500/30 transition-all shadow-lg">
            <div className="flex justify-center mb-2 text-amber-500">
              <Target className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-50">100%</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Dosages & Normes</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Béton vibré & ferraillage vérifié</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 text-slate-500 hover:text-amber-400 transition-colors">
          <a href="#valeurs" aria-label="Découvrir nos solutions techniques pour Antananarivo" className="animate-bounce p-2">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
