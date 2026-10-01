import React, { useState } from 'react';
import { ShieldCheck, ArrowUp, Mail, Phone, MapPin, MessageCircle, Mountain, Video } from 'lucide-react';
import { Logo } from './Logo';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20des%20informations%20pour%20mon%20chantier%20à%20Madagascar.";

  return (
    <footer id="engagements" className="bg-navy-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Reassurance Strip for Tana & Diaspora */}
      <div className="border-b border-slate-900 bg-navy-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-50 text-sm">Spécialiste Sols & Pentes Tana</h4>
                <p className="text-slate-400 text-xs mt-0.5">Fondations, murs de soutènement et drainage pluvial durable.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-50 text-sm">Suivi Transparent Diaspora 7j/7</h4>
                <p className="text-slate-400 text-xs mt-0.5">Reporting WhatsApp photos & vidéos HD pour piloter depuis l'étranger.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-50 text-sm">Matériaux Certifiés & Dosages</h4>
                <p className="text-slate-400 text-xs mt-0.5">Aciers FeE500, ciments certifiés et dosages de béton scrupuleux.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Logo variant="dark" className="h-14 sm:h-16 w-auto" />
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Entreprise générale de bâtiment et gros œuvre à Antananarivo (Madagascar). Fondée il y a 1 an avec une équipe cumulant +15 ans d'expérience pour bâtir durablement sur les terres malgaches.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1.5 border-t border-slate-900 mt-3 pt-3">
              <div><strong className="text-slate-200">Exploitant Légal :</strong> RAKOTONDRAMANANA Gilberto Venceslas</div>
              <div><strong className="text-slate-200">NIF :</strong> 5019315595 • <strong className="text-slate-200">STAT :</strong> 41001 11 2025 0 05583</div>
              <div><strong className="text-slate-200">Siège :</strong> Lot IDL 50 Vonelina Fiombonana, Antananarivo</div>
              <div className="text-[10px] text-stanley-yellow font-medium">Centre Fiscal Itaosy • Activités BTP déclarées aux normes</div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-slate-50 text-xs uppercase tracking-wider">Expertises Tana</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Murs de Soutènement & Pentes</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Villas Clé en Main Diaspora</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Gros Œuvre & Maçonnerie</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">VRD, Drainage & Pistes</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Rénovation de Bâtiments</a></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-slate-50 text-xs uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#accueil" className="hover:text-amber-400 transition-colors">Accueil</a></li>
              <li><a href="#valeurs" className="hover:text-amber-400 transition-colors">Solutions Sols & Diaspora</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Nos Chantiers à Antananarivo</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Demander un Devis Gratuit</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Assistance WhatsApp Directe</a></li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-slate-50 text-xs uppercase tracking-wider">Contact & Agence</h5>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="tel:+261348110715" className="hover:text-amber-400 transition-colors">
                  +261 34 81 107 15
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 font-bold">
                  WhatsApp direct (+261 37 51 359 64)
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>contact@stanley-construction.mg</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Lot IDL 50 Vonelina Fiombonana, Antananarivo (Centre Fiscal Itaosy)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bandeau officiel de conformité & droits (Madagascar) */}
      <div className="bg-zinc-950 text-zinc-500 py-10 border-t border-zinc-900 text-xs">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400">© 2026 STANLEY CONSTRUCTION. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 text-[11px]">
              <span>NIF : 5019315595</span>
              <span>•</span>
              <span>STAT : 41001 11 2025 0 05583</span>
              <span>•</span>
              <span>Lot IDL 50 Vonelina Fiombonana, Antananarivo</span>
              <span>•</span>
              <button
                onClick={() => setLegalModalOpen(true)}
                className="text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4 cursor-pointer"
              >
                Fiche Transparence
              </button>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 text-center md:text-left">
            Entreprise générale de bâtiment et travaux publics • Travaux de maçonnerie, électricité, plomberie sanitaire et finitions intérieures.
          </p>
        </div>
      </div>

      {/* Modal Données Légales & Transparence */}
      <LegalModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} />
    </footer>
  );
};
