import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const CertifiedBadge: React.FC<{ className?: string }> = ({ className = 'my-8' }) => {
  return (
    <div className={`bg-stanley-charcoal border border-stanley-steel rounded-2xl p-6 text-white ${className}`}>
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-10 h-10 rounded-xl bg-stanley-black border border-stanley-steel text-stanley-yellow flex items-center justify-center font-bold shrink-0">
          <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
        </div>
        <div>
          <h4 className="font-bold text-base text-slate-50">Entreprise Agréée &amp; Immatriculée</h4>
          <p className="text-xs text-slate-400">Enregistrée auprès de la Direction Générale des Impôts et de l'INSTAT Madagascar</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-3 border-t border-stanley-steel">
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">NIF</span>
          <strong className="text-stanley-yellow font-mono text-sm">5019315595</strong>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">STAT</span>
          <strong className="text-slate-100 font-mono text-sm">41001 11 2025 0 05583</strong>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">Région Fiscale</span>
          <span className="text-slate-200 font-semibold">Analamanga, Tana</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase font-semibold">Siège Déclaré</span>
          <span className="text-slate-200 font-semibold">Fiombonana Vonelina</span>
        </div>
      </div>
    </div>
  );
};
