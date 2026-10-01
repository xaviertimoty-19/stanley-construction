import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, AlertCircle, MessageCircle } from 'lucide-react';
import { initContactForm } from '../scripts/contact.js';
import { DiasporaCallout } from './DiasporaCallout';
import { CertifiedBadge } from './CertifiedBadge';

export const Contact: React.FC = () => {
  const [clientProfile, setClientProfile] = useState<'resident' | 'diaspora'>('resident');
  const [projectType, setProjectType] = useState<string>('gros-oeuvre');
  const [surface, setSurface] = useState<number>(120);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    quartier: '',
    message: '',
  });

  const whatsappDirectUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20à%20Antananarivo.";

  useEffect(() => {
    initContactForm();

    const handleCustomSubmit = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFormData(prev => ({
          ...prev,
          name: customEvent.detail.name || prev.name,
          email: customEvent.detail.email || prev.email,
          phone: customEvent.detail.phone || prev.phone,
        }));
      }
      setIsSubmitted(true);
    };

    window.addEventListener('devis-submitted', handleCustomSubmit);
    return () => window.removeEventListener('devis-submitted', handleCustomSubmit);
  }, []);

  const projectTypes = [
    { id: 'gros-oeuvre', label: 'Gros Œuvre & Murs de Soutènement' },
    { id: 'villa-diaspora', label: 'Villa Clé en Main (Suivi Diaspora)' },
    { id: 'travaux-publics', label: 'VRD, Drainage & Piste d\'accès' },
    { id: 'renovation', label: 'Rénovation & Surélévation Tana' },
    { id: 'cloture', label: 'Clôture Maçonnée & Sécurisation' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Veuillez renseigner votre Nom, Email et Numéro de Téléphone (ou WhatsApp).');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Demande de Devis et Contact Antananarivo" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Contact & Devis Madagascar
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 tracking-tight mt-4">
                Chiffrage Rapide à Tana & Écoute Active Diaspora
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Fondée il y a 1 an avec une vision moderne du BTP à Madagascar, <strong className="text-slate-50">Stanley Construction</strong> s'appuie 
                sur l'expérience cumulée de +15 ans de ses compagnons. Visite technique rapide sur votre terrain à Antananarivo et communication transparente 7j/7.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-900 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Ligne WhatsApp Directe (Diaspora & Tana)</div>
                  <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                    +261 37 51 359 64
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">Échanges instantanés, photos & devis PDF</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-900 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Appel Direct Madagascar</div>
                  <a href="tel:+261348110715" className="text-sm font-bold text-slate-50 hover:text-amber-400 transition-colors">
                    +261 34 81 107 15 <span className="text-xs text-slate-400 font-normal">(034 81 107 15)</span>
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">Lundi au Samedi : 07h30 - 18h00</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-900 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Courriel Technique</div>
                  <a href="mailto:contact@stanley-construction.mg" className="text-sm font-bold text-slate-50 hover:text-amber-400 transition-colors">
                    contact@stanley-construction.mg
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">Réponse garantie sous 24h ouvrées</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-900 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Siège Social Déclaré &amp; Chantiers</div>
                  <div className="text-sm font-bold text-slate-50">Lot IDL 50 Vonelina Fiombonana, Antananarivo</div>
                  <div className="text-[11px] text-stanley-yellow font-medium mt-0.5">Centre Fiscal Itaosy • NIF : 5019315595 • STAT : 41001 11 2025 0 05583</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Intervention : Antananarivo Renivohitra, Atsimondrano, Avaradrano &amp; Provinces</div>
                </div>
              </div>
            </div>

            {/* Badge Entreprise Agréée & Déclarée Madagascar */}
            <CertifiedBadge className="my-0 shadow-xl" />

            {/* Carte Diaspora & Suivi Vidéo Extérieur */}
            <DiasporaCallout />

            {/* Commitments Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Nos Engagements Techniques Locaux</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  Murs de soutènement calculés selon l'inclinaison des terrains à Tana
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  Reporting WhatsApp transparent avec vidéos HD des coulées
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  Aciers certifiés FeE500 et ciment de haute qualité (dosage contrôlé)
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Accessible Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 relative">
              {isSubmitted ? (
                <div role="status" aria-live="polite" className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-50">
                    Demande de devis transmise avec succès !
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Misaotra tompoko, merci <strong className="text-slate-50">{formData.name}</strong>. Nos ingénieurs à Antananarivo ont bien reçu votre demande ({projectType}, ~{surface} m²).
                  </p>
                  <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 text-xs text-slate-300 max-w-sm mx-auto text-left space-y-1">
                    <div><strong>Contact direct :</strong> sous 24h au <span className="text-amber-400">{formData.phone}</span></div>
                    <div><strong>Suivi WhatsApp :</strong> actif sur le numéro renseigné</div>
                    <div><strong>Email de confirmation :</strong> envoyé à <span className="text-amber-400">{formData.email}</span></div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', whatsapp: '', quartier: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Effectuer une nouvelle simulation
                  </button>
                </div>
              ) : (
                <form id="devis-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  {errorMessage && (
                    <div role="alert" className="flex items-center gap-2 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Client Profile Toggle (Résident vs Diaspora) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Profil du Demandeur
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-navy-900 border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setClientProfile('resident')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          clientProfile === 'resident'
                            ? 'bg-amber-500 text-navy-950 shadow-sm'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        Particulier / Pro à Madagascar
                      </button>
                      <button
                        type="button"
                        onClick={() => setClientProfile('diaspora')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          clientProfile === 'diaspora'
                            ? 'bg-emerald-500 text-slate-950 shadow-sm'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        Diaspora Malgache (France, Europe...)
                      </button>
                    </div>
                  </div>

                  {/* Step 1: Type of project */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                      1. Type de Lot / Travaux à Antananarivo
                    </label>
                    <input type="hidden" name="projectType" value={projectType} />
                    <input type="hidden" name="clientProfile" value={clientProfile} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => setProjectType(type.id)}
                          className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                            projectType === type.id
                              ? 'bg-amber-500/10 border-amber-500 text-amber-300 shadow-sm'
                              : 'bg-navy-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Surface */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="surface-range" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        2. Emprise ou Surface Estimée du Projet
                      </label>
                      <span className="font-display font-bold text-amber-400 text-base">
                        {surface} m²
                      </span>
                    </div>
                    <input
                      id="surface-range"
                      name="surface"
                      type="range"
                      min="20"
                      max="1000"
                      step="20"
                      value={surface}
                      onChange={(e) => setSurface(parseInt(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>20 m²</span>
                      <span>500 m²</span>
                      <span>1 000 m²+</span>
                    </div>
                  </div>

                  {/* Step 3: Identity & Contact Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                      3. Vos Coordonnées & Suivi WhatsApp
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="client-name" className="block text-[11px] text-slate-400 mb-1">
                          Nom & Prénom <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="client-name"
                          name="name"
                          type="text"
                          required
                          aria-required="true"
                          placeholder="Ex: Ravelojaona Hery"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-sm text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="client-phone" className="block text-[11px] text-slate-400 mb-1">
                          Numéro WhatsApp / Téléphone <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="client-phone"
                          name="phone"
                          type="tel"
                          required
                          aria-required="true"
                          placeholder={clientProfile === 'diaspora' ? '+33 6 12 34 56 78' : '034 00 000 00'}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-sm text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="client-email" className="block text-[11px] text-slate-400 mb-1">
                          Adresse Email <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="client-email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          placeholder="votre.email@domaine.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-sm text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="client-quartier" className="block text-[11px] text-slate-400 mb-1">
                          Localisation du Chantier à Tana
                        </label>
                        <input
                          id="client-quartier"
                          name="quartier"
                          type="text"
                          placeholder="Ex: Ambatobe, Ivato, Ilafy, By-pass..."
                          value={formData.quartier}
                          onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-sm text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Description */}
                  <div>
                    <label htmlFor="client-message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      4. Détails du terrain (pente, accès route, eau/électricité)
                    </label>
                    <textarea
                      id="client-message"
                      name="message"
                      rows={3}
                      placeholder="Précisez si le terrain est en pente, l'accessibilité pour camion benne, présence de rochers, vos délais souhaités..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-sm text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    id="submit-quote-btn"
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <Send className="w-5 h-5 stroke-[2.2]" />
                    <span>Demander mon étude & devis gratuit</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Devis confidentiel sans engagement. Visite technique rapide sur votre terrain à Antananarivo.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
