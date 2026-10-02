import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, MapPin, Building, Lock } from 'lucide-react';
import { Logo } from './Logo';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-stanley-steel pb-4 mb-6">
          <div className="flex items-center gap-3">
            <Logo emblemOnly className="w-8 h-8 shrink-0" />
            <div>
              <h3 id="legal-modal-title" className="font-display font-bold text-lg text-zinc-900 dark:text-slate-50 tracking-tight">
                Données Légales &amp; Transparence Fiscale
              </h3>
              <p className="text-xs text-stanley-gold dark:text-stanley-yellow font-medium">République de Madagascar • Région Analamanga</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-stanley-steel/50 hover:bg-zinc-200 dark:hover:bg-stanley-steel text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          {/* Section 1: Identification */}
          <div className="bg-zinc-50 dark:bg-stanley-black/60 rounded-xl p-4 border border-zinc-200 dark:border-stanley-steel space-y-3">
            <div className="flex items-center gap-2 text-stanley-gold dark:text-stanley-yellow font-bold text-xs uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Identité de l'Entreprise</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-zinc-500 dark:text-slate-400 block text-[11px]">Marque Commerciale :</span>
                <strong className="text-zinc-900 dark:text-slate-50 text-sm">STANLEY CONSTRUCTION</strong>
              </div>
              <div>
                <span className="text-zinc-500 dark:text-slate-400 block text-[11px]">Exploitant Légal Titulaire :</span>
                <strong className="text-zinc-900 dark:text-slate-50">RAKOTONDRAMANANA Gilberto Venceslas</strong>
              </div>
            </div>
          </div>

          {/* Section 2: Données Fiscales & Statistiques */}
          <div className="bg-zinc-50 dark:bg-stanley-black/60 rounded-xl p-4 border border-zinc-200 dark:border-stanley-steel space-y-3">
            <div className="flex items-center gap-2 text-stanley-gold dark:text-stanley-yellow font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Immatriculations Fiscales Officielles (Madagascar)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel/60 shadow-xs">
                <span className="text-zinc-500 dark:text-slate-400 block text-[10px] uppercase">NIF (Identifiant Fiscal)</span>
                <span className="font-mono font-bold text-stanley-gold dark:text-stanley-yellow text-sm">5019315595</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel/60 shadow-xs">
                <span className="text-zinc-500 dark:text-slate-400 block text-[10px] uppercase">STAT (Statistique)</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-slate-100 text-xs">41001 11 2025 0 05583</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel/60 shadow-xs">
                <span className="text-zinc-500 dark:text-slate-400 block text-[10px] uppercase">Centre Fiscal</span>
                <span className="font-bold text-zinc-900 dark:text-slate-100 text-xs">Centre Fiscal Itaosy</span>
              </div>
            </div>
          </div>

          {/* Section 3: Siège Social */}
          <div className="bg-zinc-50 dark:bg-stanley-black/60 rounded-xl p-4 border border-zinc-200 dark:border-stanley-steel space-y-2">
            <div className="flex items-center gap-2 text-stanley-gold dark:text-stanley-yellow font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Siège Social &amp; Rayon d'Intervention</span>
            </div>
            <p className="text-xs text-zinc-700 dark:text-slate-300">
              <strong className="text-zinc-900 dark:text-slate-100">Adresse officielle :</strong> Lot IDL 50 Vonelina Fiombonana, Antananarivo (Centre Fiscal Itaosy), Région Analamanga, Madagascar.
            </p>
            <p className="text-[11px] text-zinc-500 dark:text-slate-400">
              Chantiers pris en charge : Antananarivo Renivohitra, Atsimondrano (Itaosy, By-pass, etc.), Avaradrano (Ambatobe, Ilafy, Ivato) et provinces sur devis.
            </p>
          </div>

          {/* Section 4: Activités Déclarées */}
          <div className="bg-zinc-50 dark:bg-stanley-black/60 rounded-xl p-4 border border-zinc-200 dark:border-stanley-steel space-y-2.5">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-slate-200 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-stanley-gold dark:text-stanley-yellow" />
              <span>Activités Déclarées au Registre</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stanley-gold dark:bg-stanley-yellow"></span>
                <span>Entreprise Générale BTP</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stanley-gold dark:bg-stanley-yellow"></span>
                <span>Gros œuvre &amp; Maçonnerie structurée</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stanley-gold dark:bg-stanley-yellow"></span>
                <span>Murs de soutènement &amp; Fondations en pente</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stanley-gold dark:bg-stanley-yellow"></span>
                <span>Installation sanitaire &amp; Plomberie</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stanley-gold dark:bg-stanley-yellow"></span>
                <span>Électricité &amp; Réseaux de distribution</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stanley-gold dark:bg-stanley-yellow"></span>
                <span>Finitions intérieures &amp; Revêtements de sols/murs</span>
              </li>
            </ul>
          </div>

          {/* Section 5: Règle de Sécurité & Confidentialité */}
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-stanley-yellow/10 border border-amber-200 dark:border-stanley-yellow/20 text-xs text-zinc-800 dark:text-slate-300 flex items-start gap-3">
            <Lock className="w-4 h-4 text-stanley-gold dark:text-stanley-yellow shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed">
              <strong className="text-stanley-gold dark:text-stanley-yellow">Engagement de Sécurité &amp; Confidentialité :</strong> Conformément aux règles de protection de l'identité et de lutte contre la fraude documentaire, les numéros de Carte d'Identité Nationale (CIN) et copies scannées ne sont jamais publiés en ligne. Les formalités contractuelles font l'objet d'échanges directs sous protocole sécurisé.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-stanley-steel flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stanley-yellow text-stanley-black font-bold text-xs hover:bg-stanley-gold transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
