import React from 'react';
import { Mountain, Video, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CertifiedBadge } from './CertifiedBadge';

export const Values: React.FC = () => {
  return (
    <section id="valeurs" aria-label="Nos Engagements et Spécificités Techniques à Antananarivo" className="py-20 bg-navy-900 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Expertise Locale & Réassurance
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-50 tracking-tight">
            Les Engagements Stanley Construction à Tana
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Face aux défis géologiques d'Antananarivo et aux exigences de transparence de la diaspora, nous apportons des réponses d'ingénierie concrètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Sols d'Antananarivo */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-navy-950 transition-all">
                <Mountain className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
                Sols & Murs de Soutènement
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Antananarivo présente des reliefs escarpés et des sols argileux/latéritiques vulnérables aux fortes pluies. Nos ingénieurs conçoivent des ouvrages de fondation pérennes.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Murs de soutènement en béton armé et moellons appareillés</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Systèmes de drainage des eaux pluviales et barbacanes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Étude d'assise et ancrage sur roche saine</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-amber-400 font-bold text-xs uppercase tracking-wider">
              Sécurité Géotechnique Maximale
            </div>
          </div>

          {/* Pillar 2: Reporting Diaspora */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-navy-950 transition-all">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
                Suivi à Distance & Diaspora
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Vous financez votre maison depuis la France ou l'étranger ? Fini le stress des intermédiaires non fiables : nous vous garantissons une transparence absolue en direct.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Envoi hebdomadaire de photos & vidéos HD sur WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Appels vidéo en direct lors des étapes clés (coulées, toiture)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Facturation par tranches validées avec photos à l'appui</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Sérénité Totale à Distance
            </div>
          </div>

          {/* Pillar 3: Matériaux aux normes */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-navy-950 transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
                Matériaux & Dosages Certifiés
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                À Madagascar, la pérennité d'un bâtiment dépend de la pureté du sable, du dosage du ciment et de la section des fers. Chez Stanley Construction, aucun compromis n'est toléré.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Ciments certifiés de premier choix (dosage 350 kg/m³ mini)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Aciers haute adhérence conformes FeE500</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Vibration systématique du béton pour éliminer les poches</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 text-amber-400 font-bold text-xs uppercase tracking-wider">
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
