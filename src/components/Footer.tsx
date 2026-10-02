import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20des%20informations%20pour%20mon%20chantier%20à%20Madagascar.";

  return (
    <footer id="engagements" className="bg-zinc-100 dark:bg-stanley-black border-t border-zinc-200 dark:border-stanley-steel text-zinc-600 dark:text-slate-400 text-xs transition-colors duration-200">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Logo variant="auto" className="h-12 sm:h-14 w-auto" />
            </div>
            <p className="text-zinc-600 dark:text-slate-300 text-xs leading-relaxed max-w-sm">
              Entreprise générale de bâtiment et travaux publics à Antananarivo (Madagascar), engagée pour la solidité structurelle de vos ouvrages et la transparence de suivi de chantier.
            </p>
            <div className="text-[11px] text-zinc-500 dark:text-slate-400 space-y-1.5 border-t border-zinc-200 dark:border-stanley-steel mt-3 pt-3">
              <div><strong className="text-zinc-800 dark:text-slate-200">NIF :</strong> 5019315595 • <strong className="text-zinc-800 dark:text-slate-200">STAT :</strong> 41001 11 2025 0 05583</div>
              <div><strong className="text-zinc-800 dark:text-slate-200">Siège Déclaré :</strong> Lot IDL 50 Vonelina Fiombonana, Antananarivo</div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-zinc-900 dark:text-slate-50 text-xs uppercase tracking-wider">Expertises Tana</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Murs de Soutènement &amp; Pentes</a></li>
              <li><a href="#services" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Villas Clé en Main Diaspora</a></li>
              <li><a href="#services" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Gros Œuvre &amp; Maçonnerie</a></li>
              <li><a href="#services" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">VRD, Drainage &amp; Pistes</a></li>
              <li><a href="#services" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Rénovation de Bâtiments</a></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-zinc-900 dark:text-slate-50 text-xs uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#accueil" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Accueil</a></li>
              <li><a href="#valeurs" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Solutions Sols &amp; Diaspora</a></li>
              <li><a href="#portfolio" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Nos Chantiers à Antananarivo</a></li>
              <li><a href="#contact" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Demander un Devis Gratuit</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">Ligne WhatsApp Directe</a></li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-zinc-900 dark:text-slate-50 text-xs uppercase tracking-wider">Contact &amp; Agence</h5>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2.5 text-zinc-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-stanley-charcoal border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
                  <Phone className="w-3 h-3 stroke-[2.2]" />
                </div>
                <a href="tel:+261348110715" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">
                  +261 34 81 107 15
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-stanley-charcoal border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
                  <MessageCircle className="w-3 h-3 stroke-[2.2]" />
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-stanley-gold dark:text-stanley-yellow font-bold hover:underline">
                  WhatsApp direct (+261 37 51 359 64)
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-stanley-charcoal border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
                  <Mail className="w-3 h-3 stroke-[2.2]" />
                </div>
                <a href="mailto:contact@stanley-construction.mg" className="hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">
                  contact@stanley-construction.mg
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-stanley-charcoal border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 stroke-[2.2]" />
                </div>
                <span>Lot IDL 50 Vonelina Fiombonana, Antananarivo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bandeau officiel de conformité & droits (Madagascar) */}
      <div className="bg-zinc-200 dark:bg-stanley-charcoal text-zinc-600 dark:text-slate-400 py-8 border-t border-zinc-300 dark:border-stanley-steel text-xs">
        <div className="max-w-7xl mx-auto px-6 space-y-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-700 dark:text-slate-300">© 2026 STANLEY CONSTRUCTION. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 text-[11px]">
              <span>NIF : 5019315595</span>
              <span>•</span>
              <span>STAT : 41001 11 2025 0 05583</span>
              <span>•</span>
              <button
                onClick={() => setLegalModalOpen(true)}
                className="text-stanley-gold dark:text-stanley-yellow hover:underline transition-colors cursor-pointer font-medium"
              >
                Fiche Transparence
              </button>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-stanley-black hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-stanley-steel text-zinc-700 dark:text-slate-300 hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors flex items-center gap-1 cursor-pointer shrink-0 shadow-xs"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Données Légales & Transparence */}
      <LegalModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} />
    </footer>
  );
};
