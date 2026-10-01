import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Nos Valeurs', href: '#valeurs' },
    { name: 'Expertises Tana', href: '#services' },
    { name: 'Chantiers', href: '#portfolio' },
    { name: 'Diaspora & Suivi', href: '#valeurs' },
    { name: 'Contact & Devis', href: '#contact' },
  ];

  const whatsappUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20devis%20de%20construction%20à%20Antananarivo.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Officiel Stanley Construction */}
          <a href="#accueil" className="flex items-center group py-0.5" aria-label="Accueil Stanley Construction">
            <Logo
              variant="dark"
              className={`w-auto group-hover:scale-[1.02] transition-all duration-300 ${
                isScrolled ? 'h-11 sm:h-12 lg:h-14' : 'h-12 sm:h-14 lg:h-16'
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Contact & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+261348110715"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              title="Appel direct: +261 34 81 107 15"
            >
              <div className="w-8 h-8 rounded-full bg-navy-900 border border-slate-700 flex items-center justify-center text-amber-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-slate-400 font-normal">Appel direct Tana</span>
                <span className="font-bold">+261 34 81 107 15</span>
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-semibold text-xs transition-all cursor-pointer"
              title="Discuter sur WhatsApp: +261 37 51 359 64"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
              <span className="hidden xl:inline text-[11px] font-normal opacity-90">(+261 37 51 359 64)</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
            >
              <span>Devis Rapide</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Ouvrir le menu mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-amber-400 py-2 border-b border-slate-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="tel:+261348110715"
                className="flex items-center gap-3 text-xs text-slate-300 py-2"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+261 34 81 107 15 (Lundi - Samedi)</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuter sur WhatsApp (+261 37 51 359 64)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-bold text-xs shadow-lg shadow-amber-500/20"
              >
                Demander un devis détaillé
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
