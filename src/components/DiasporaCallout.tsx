import React from 'react';

export const DiasporaCallout: React.FC = () => {
  return (
    <div className="bg-stanley-charcoal text-white p-6 rounded-xl border border-stanley-steel shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <i className="fa-solid fa-camera-retro text-stanley-yellow text-xl"></i>
        <h4 className="font-bold text-base">Vous construisez depuis l'étranger ?</h4>
      </div>
      <p className="text-slate-300 text-xs leading-relaxed">
        Pour la diaspora et les propriétaires non résidents à Antananarivo, Stanley Construction fournit un rapport photo et vidéo à chaque étape d'avancement pour un contrôle total de votre investissement.
      </p>
    </div>
  );
};
