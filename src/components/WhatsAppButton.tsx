import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20renseignement%20pour%20un%20chantier" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-white/30 hover:border-white/60 ring-4 ring-[#25D366]/25"
      aria-label="Contacter Stanley Construction sur WhatsApp (+261 37 51 359 64)"
      title="Discuter sur WhatsApp (+261 37 51 359 64)"
    >
      <WhatsAppIcon className="w-6 h-6 text-white shrink-0 fill-current drop-shadow-sm" />
      <span className="hidden sm:inline text-xs font-extrabold tracking-wider uppercase text-white pr-0.5 drop-shadow-sm">
        WhatsApp
      </span>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
    </a>
  );
};
