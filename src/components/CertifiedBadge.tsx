import React from 'react';

export const CertifiedBadge: React.FC<{ className?: string }> = ({ className = 'my-8' }) => {
  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-white ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
          <i className="fa-solid fa-stamp text-lg"></i>
        </div>
        <div>
          <h4 className="font-black text-base text-white">Entreprise Agréée &amp; Déclarée</h4>
          <p className="text-xs text-zinc-400">Enregistrée auprès de la DGI et de l'INSTAT Madagascar</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2 border-t border-zinc-800">
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase font-semibold">NIF</span>
          <strong className="text-amber-500 font-mono text-sm">5019315595</strong>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase font-semibold">STAT</span>
          <strong className="text-white font-mono text-sm">41001 11 2025 0 05583</strong>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Centre Fiscal</span>
          <span className="text-zinc-300 font-semibold">Itaosy, Antananarivo</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Siège</span>
          <span className="text-zinc-300 font-semibold">Fiombonana Vonelina</span>
        </div>
      </div>
    </div>
  );
};
