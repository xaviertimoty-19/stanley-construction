import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    /* Bouton flottant WhatsApp */
    <a 
      href="https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20renseignement%20pour%20un%20chantier" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer group"
      aria-label="Contacter Stanley Construction sur WhatsApp (+261 37 51 359 64)"
      title="Discuter sur WhatsApp (+261 37 51 359 64)"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      {/* Pulse beacon effect */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
      </span>
    </a>
  );
};
