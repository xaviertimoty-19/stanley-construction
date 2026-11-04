import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" aria-label="Présentation Stanley Construction Antananarivo" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-zinc-50 dark:bg-stanley-black transition-colors duration-200">
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

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 sm:mt-16 text-zinc-400 dark:text-slate-500 hover:text-stanley-yellow transition-colors">
          <a href="#valeurs" aria-label="Découvrir nos solutions techniques pour Antananarivo" className="animate-bounce p-2">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
