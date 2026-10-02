import React from 'react';
import { ShieldCheck, ArrowRight, ChevronDown, Clock, Video, Mountain } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" aria-label="Présentation Stanley Construction Antananarivo" className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-zinc-50 dark:bg-stanley-black transition-colors duration-200">
      {/* Subtle vignette background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/80 via-zinc-50 to-zinc-50 dark:from-black/80 dark:via-stanley-black dark:to-stanley-black -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Main Title */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-900 dark:text-slate-50 leading-[1.15]">
            Construire à Antananarivo : <br />
            <span className="text-stanley-yellow">
              Rigueur Technique & Suivi Diaspora
            </span>
          </h1>

          {/* Description - Concise and confident without repetitive claims */}
          <p className="text-zinc-600 dark:text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Entreprise générale de bâtiment spécialisée en gros œuvre, fondations adaptées aux reliefs de Tana et constructions soignées. 
            Accompagnement de confiance pour les résidents et la diaspora avec un reporting photo &amp; vidéo régulier.
          </p>

          {/* Single Focused Call to Action */}
          <div className="flex items-center justify-center pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/15 hover:shadow-amber-500/30 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
            >
              <span>Demander un devis sous 24h</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* 4 Professional Industrial Metric Cards - Styled to reflect the Stanley Logo */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel text-left hover:border-stanley-yellow/60 transition-all shadow-sm dark:shadow-md group">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow mb-3 group-hover:border-stanley-yellow transition-colors">
              <Mountain className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="font-display font-bold text-base text-zinc-900 dark:text-slate-50">Sols & Murs de Soutènement</div>
            <div className="text-xs text-stanley-gold dark:text-stanley-yellow font-semibold mt-0.5">Reliefs & Pentes de Tana</div>
            <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-1 leading-snug">Calculs de poussée, moellons & drainage pluvial</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel text-left hover:border-stanley-yellow/60 transition-all shadow-sm dark:shadow-md group">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow mb-3 group-hover:border-stanley-yellow transition-colors">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="font-display font-bold text-base text-zinc-900 dark:text-slate-50">Dosages Normés</div>
            <div className="text-xs text-stanley-gold dark:text-stanley-yellow font-semibold mt-0.5">Béton dosé à 350 kg/m³</div>
            <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-1 leading-snug">Aciers certifiés FeE500 & vibration continue</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel text-left hover:border-stanley-yellow/60 transition-all shadow-sm dark:shadow-md group">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow mb-3 group-hover:border-stanley-yellow transition-colors">
              <Video className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="font-display font-bold text-base text-zinc-900 dark:text-slate-50">Suivi Transparent Diaspora</div>
            <div className="text-xs text-stanley-gold dark:text-stanley-yellow font-semibold mt-0.5">Direct WhatsApp 7j/7</div>
            <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-1 leading-snug">Photos & vidéos HD transmises à chaque coulée</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel text-left hover:border-stanley-yellow/60 transition-all shadow-sm dark:shadow-md group">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow mb-3 group-hover:border-stanley-yellow transition-colors">
              <Clock className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="font-display font-bold text-base text-zinc-900 dark:text-slate-50">Chiffrage Réactif</div>
            <div className="text-xs text-stanley-gold dark:text-stanley-yellow font-semibold mt-0.5">Devis sous 24h ouvrées</div>
            <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-1 leading-snug">Visite technique sur terrain à Antananarivo</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-10 text-zinc-400 dark:text-slate-500 hover:text-stanley-yellow transition-colors">
          <a href="#valeurs" aria-label="Découvrir nos solutions techniques pour Antananarivo" className="animate-bounce p-2">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
