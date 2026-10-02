import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20renseignement%20pour%20un%20chantier" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-stanley-charcoal border-2 border-stanley-yellow text-stanley-gold dark:text-stanley-yellow hover:bg-stanley-yellow hover:text-stanley-black p-3.5 rounded-2xl shadow-xl dark:shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer group"
      aria-label="Contacter Stanley Construction sur WhatsApp (+261 37 51 359 64)"
      title="Discuter sur WhatsApp (+261 37 51 359 64)"
    >
      <MessageCircle className="w-6 h-6 stroke-[2.2]" />
      <span className="hidden sm:inline text-xs font-extrabold tracking-wider uppercase text-zinc-900 dark:text-slate-100 group-hover:text-stanley-black transition-colors pr-1">
        WhatsApp
      </span>
    </a>
  );
};
