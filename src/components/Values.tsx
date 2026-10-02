import React from 'react';
import { Mountain, Video, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CertifiedBadge } from './CertifiedBadge';

export const Values: React.FC = () => {
  return (
    <section id="valeurs" aria-label="Nos Engagements et Spécificités Techniques à Antananarivo" className="py-20 bg-stanley-black border-y border-stanley-steel relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-stanley-yellow font-bold">
            Piliers Techniques &amp; Transparence
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-50 tracking-tight">
            Les Engagements Stanley Construction à Tana
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Face aux exigences géologiques des collines d'Antananarivo et aux attentes de la diaspora, nous appliquons une rigueur de chantier stricte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Sols d'Antananarivo */}
          <div className="p-8 rounded-2xl bg-stanley-charcoal border border-stanley-steel hover:border-stanley-yellow/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-stanley-black border border-stanley-steel flex items-center justify-center text-stanley-yellow mb-6 group-hover:scale-105 group-hover:border-stanley-yellow transition-all shadow-inner">
                <Mountain className="w-7 h-7 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
                Sols &amp; Murs de Soutènement
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Antananarivo présente des reliefs escarpés et des sols argileux vulnérables aux eaux de pluie. Nos ingénieurs conçoivent des ouvrages de soutènement et d'ancrage calculés pour durer.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-stanley-steel pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Murs de soutènement en béton armé et moellons appareillés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Systèmes de drainage des eaux pluviales et barbacanes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Étude d'assise et ancrage sur roche saine</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-stanley-yellow font-bold text-xs uppercase tracking-wider">
              Sécurité Géotechnique Maximale
            </div>
          </div>

          {/* Pillar 2: Reporting Diaspora */}
          <div className="p-8 rounded-2xl bg-stanley-charcoal border border-stanley-steel hover:border-stanley-yellow/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-stanley-black border border-stanley-steel flex items-center justify-center text-stanley-yellow mb-6 group-hover:scale-105 group-hover:border-stanley-yellow transition-all shadow-inner">
                <Video className="w-7 h-7 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
                Suivi à Distance &amp; Diaspora
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Vous financez votre projet depuis l'étranger ? Nous éliminons l'incertitude grâce à un canal de communication direct et des comptes-rendus visuels continus.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-stanley-steel pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Envoi régulier de photos &amp; vidéos HD sur WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Points de situation en direct lors des coulées et étapes clés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Facturation par tranches validées avec justificatifs de chantier</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-stanley-yellow font-bold text-xs uppercase tracking-wider">
              Contrôle Total à Distance
            </div>
          </div>

          {/* Pillar 3: Matériaux aux normes */}
          <div className="p-8 rounded-2xl bg-stanley-charcoal border border-stanley-steel hover:border-stanley-yellow/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-stanley-black border border-stanley-steel flex items-center justify-center text-stanley-yellow mb-6 group-hover:scale-105 group-hover:border-stanley-yellow transition-all shadow-inner">
                <ShieldCheck className="w-7 h-7 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
                Matériaux &amp; Dosages Contrôlés
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                La résistance d'un bâtiment dépend du dosage scrupuleux des agrégats et de la conformité du ferraillage. Aucun compromis n'est toléré sur nos chantiers.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-stanley-steel pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Ciments certifiés de premier choix (dosage 350 kg/m³ minimum)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Aciers haute adhérence conformes FeE500</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stanley-yellow shrink-0" />
                  <span>Vibration systématique du béton pour éliminer les poches d'air</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-stanley-yellow font-bold text-xs uppercase tracking-wider">
              Excellence Structurelle Garantie
            </div>
          </div>
        </div>

        {/* Bloc officiel Entreprise Agréée & Déclarée Madagascar */}
        <CertifiedBadge className="mt-12" />
      </div>
    </section>
  );
};
