import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Calculator, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { calculateEstimate, PROJECT_TYPES } from '../utils/estimator';

export const Contact: React.FC = () => {
  const [clientProfile, setClientProfile] = useState<'resident' | 'diaspora'>('resident');
  const [projectType, setProjectType] = useState<string>('gros-oeuvre');
  const [surface, setSurface] = useState<number>(120);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    quartier: '',
    message: '',
  });

  const estimate = calculateEstimate(projectType, surface);

  const buildWhatsAppMessage = () => {
    const lines = [
      '🏗️ *DEMANDE DE DEVIS — STANLEY CONSTRUCTION*',
      `• *Client* : ${formData.name.trim() || 'Prospect'} (${clientProfile === 'diaspora' ? 'Diaspora Malgache' : 'Résident Tana'})`,
      `• *Contact* : ${formData.phone.trim() || 'Non renseigné'} | ${formData.email.trim() || 'Non renseigné'}`,
      `• *Lot / Travaux* : ${estimate.projectType}`,
      `• *Surface estimée* : ~${surface} m²`,
      `• *Fourchette indicative* : ${estimate.formattedAr} (soit env. ${estimate.formattedEur})`,
      formData.quartier.trim() ? `• *Localisation chantier* : ${formData.quartier.trim()}` : '',
      formData.message.trim() ? `• *Spécificités terrain* : ${formData.message.trim()}` : '',
    ].filter(Boolean);

    return `https://wa.me/261375135964?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const whatsappDirectUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20à%20Antananarivo.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Veuillez renseigner votre Nom, Email et Numéro de Téléphone (ou WhatsApp).');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // Simulation asynchrone avec persistance locale pour garantir l'historique côté client
      await new Promise(resolve => setTimeout(resolve, 600));
      try {
        const history = JSON.parse(localStorage.getItem('stanley_lead_requests') || '[]');
        history.push({
          date: new Date().toISOString(),
          profile: clientProfile,
          projectType,
          surface,
          estimate,
          ...formData,
        });
        localStorage.setItem('stanley_lead_requests', JSON.stringify(history));
      } catch (_) {}

      setIsSubmitted(true);
    } catch {
      setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous joindre sur WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-label="Demande de Devis et Contact Antananarivo" className="py-24 bg-zinc-50 dark:bg-stanley-black relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-stanley-gold dark:text-stanley-yellow font-bold">
                Contact Direct &amp; Devis Gratuit
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-slate-50 tracking-tight mt-3">
                Chiffrage Rapide à Tana &amp; Écoute Active Diaspora
              </h2>
              <p className="text-zinc-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Visite technique sur votre terrain à Antananarivo, dimensionnement des fondations selon le relief et chiffrage clair par corps d'état.
              </p>
            </div>

            {/* Direct Cards - Pro Industrial Style */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel hover:border-[#25D366]/60 transition-colors shadow-xs group">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 dark:bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] fill-current" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-slate-400 font-medium">Ligne WhatsApp Directe (Diaspora &amp; Tana)</div>
                  <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#25D366] hover:text-[#20ba5a] transition-colors inline-block mt-0.5">
                    +261 37 51 359 64
                  </a>
                  <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-0.5">Échanges directs, transmission de plans &amp; devis PDF</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel hover:border-stanley-yellow/50 transition-colors shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
                  <Phone className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-slate-400 font-medium">Appel Direct Madagascar</div>
                  <a href="tel:+261348110715" className="text-sm font-bold text-zinc-900 dark:text-slate-50 hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">
                    +261 34 81 107 15 <span className="text-xs text-zinc-500 dark:text-slate-400 font-normal">(034 81 107 15)</span>
                  </a>
                  <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-0.5">Lundi au Samedi : 07h30 - 18h00</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel hover:border-stanley-yellow/50 transition-colors shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
                  <Mail className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-slate-400 font-medium">Courriel Technique</div>
                  <a href="mailto:contact@stanley-construction.mg" className="text-sm font-bold text-zinc-900 dark:text-slate-50 hover:text-stanley-gold dark:hover:text-stanley-yellow transition-colors">
                    contact@stanley-construction.mg
                  </a>
                  <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-0.5">Réponse garantie sous 24h ouvrées</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel hover:border-stanley-yellow/50 transition-colors shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-stanley-black border border-amber-200 dark:border-stanley-steel flex items-center justify-center text-stanley-gold dark:text-stanley-yellow shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-slate-400 font-medium">Siège Social Déclaré &amp; Chantiers</div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-slate-50">Lot IDL 50 Vonelina Fiombonana, Antananarivo</div>
                  <div className="text-[11px] text-stanley-gold dark:text-stanley-yellow font-medium mt-0.5">NIF : 5019315595 • STAT : 41001 11 2025 0 05583</div>
                  <div className="text-[11px] text-zinc-500 dark:text-slate-400 mt-0.5">Interventions : Antananarivo, périphéries &amp; provinces</div>
                </div>
              </div>
            </div>

            {/* Reassurance Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel text-xs text-zinc-600 dark:text-slate-300 space-y-1 shadow-xs">
              <span className="font-bold text-stanley-gold dark:text-stanley-yellow uppercase tracking-wider block text-[11px]">
                Engagement &amp; Réactivité
              </span>
              <p className="text-[11px] text-zinc-500 dark:text-slate-400 leading-relaxed">
                Prise de contact sous 24h, visite sur site et devis estimatif détaillé sans engagement.
              </p>
            </div>
          </div>

          {/* Right Column: Accessible Interactive Form & Real-Time Estimator */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel relative shadow-md dark:shadow-xl">
              {isSubmitted ? (
                <div role="status" aria-live="polite" className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-stanley-black border-2 border-stanley-gold dark:border-stanley-yellow flex items-center justify-center text-stanley-gold dark:text-stanley-yellow mx-auto">
                    <CheckCircle className="w-8 h-8 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-slate-50">
                    Demande de devis enregistrée !
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Misaotra tompoko, merci <strong className="text-zinc-900 dark:text-slate-50">{formData.name}</strong>. Nos techniciens à Antananarivo analysent votre projet (<span className="text-stanley-yellow font-semibold">{estimate.projectType}</span>, ~{surface} m²).
                  </p>
                  
                  {/* Estimation summary card */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-200 dark:border-stanley-steel text-xs text-zinc-700 dark:text-slate-300 max-w-md mx-auto text-left space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-200 dark:border-stanley-steel">
                      <span className="font-semibold">Fourchette estimative indicative :</span>
                      <span className="font-display font-bold text-stanley-gold dark:text-stanley-yellow text-sm">{estimate.formattedAr}</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-slate-400">
                      Soit environ <strong className="text-zinc-800 dark:text-slate-200">{estimate.formattedEur}</strong> selon les conditions du terrain.
                    </div>
                    <div><strong>Contact direct :</strong> sous 24h au <span className="text-stanley-gold dark:text-stanley-yellow font-bold">{formData.phone}</span></div>
                    <div><strong>Suivi :</strong> email envoyé à <span className="text-stanley-gold dark:text-stanley-yellow font-bold">{formData.email}</span></div>
                  </div>

                  {/* Immediate WhatsApp transmission button */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={buildWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 cursor-pointer uppercase tracking-wider"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0" />
                      <span>Transmettre sur WhatsApp (+261 37 51 359 64)</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage('');
                        setFormData({ name: '', email: '', phone: '', whatsapp: '', quartier: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-100 dark:bg-stanley-black hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-stanley-steel text-zinc-800 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Nouvelle simulation
                    </button>
                  </div>
                </div>
              ) : (
                <form id="devis-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  {errorMessage && (
                    <div role="alert" className="flex items-center gap-2 p-3 rounded-xl bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Client Profile Toggle (Résident vs Diaspora) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300 mb-2">
                       Profil du Demandeur
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-zinc-100 dark:bg-stanley-black border border-zinc-200 dark:border-stanley-steel">
                      <button
                        type="button"
                        onClick={() => setClientProfile('resident')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          clientProfile === 'resident'
                            ? 'bg-stanley-yellow text-stanley-black shadow-sm'
                            : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white'
                        }`}
                      >
                        Particulier / Pro à Madagascar
                      </button>
                      <button
                        type="button"
                        onClick={() => setClientProfile('diaspora')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          clientProfile === 'diaspora'
                            ? 'bg-stanley-yellow text-stanley-black shadow-sm'
                            : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white'
                        }`}
                      >
                        Diaspora Malgache (France, Europe...)
                      </button>
                    </div>
                  </div>

                  {/* Step 1: Type of project */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300 mb-3">
                      1. Type de Lot / Travaux à Antananarivo
                    </label>
                    <input type="hidden" name="projectType" value={projectType} />
                    <input type="hidden" name="clientProfile" value={clientProfile} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => setProjectType(type.id)}
                          className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer flex flex-col justify-between ${
                            projectType === type.id
                              ? 'bg-amber-50 dark:bg-stanley-black border-stanley-gold dark:border-stanley-yellow text-stanley-gold dark:text-stanley-yellow shadow-xs ring-1 ring-stanley-yellow/30'
                              : 'bg-zinc-50 dark:bg-stanley-black/60 border-zinc-200 dark:border-stanley-steel text-zinc-700 dark:text-slate-300 hover:border-zinc-400 dark:hover:border-slate-700'
                          }`}
                        >
                          <span className="font-bold">{type.label}</span>
                          <span className="text-[10px] opacity-75 mt-1 leading-snug">{type.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Surface */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="surface-range" className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300">
                        2. Emprise ou Surface Estimée du Projet
                      </label>
                      <span className="font-display font-bold text-stanley-gold dark:text-stanley-yellow text-base">
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
                      className="w-full accent-amber-500 h-2 bg-zinc-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-500 dark:text-slate-400 mt-1">
                      <span>20 m²</span>
                      <span>500 m²</span>
                      <span>1 000 m²+</span>
                    </div>
                  </div>

                  {/* Real-Time Live Estimation Banner */}
                  <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-stanley-black border border-stanley-yellow/40 dark:border-stanley-yellow/30">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-stanley-gold dark:text-stanley-yellow shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-slate-200">
                          Estimation Budgétaire Réactive
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-stanley-gold dark:text-stanley-yellow bg-stanley-yellow/15 px-2 py-0.5 rounded">
                        Fourchette Indicative HT
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1 border-t border-amber-500/20 dark:border-stanley-steel">
                      <div className="font-display font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-stanley-yellow">
                        {estimate.formattedAr}
                      </div>
                      <div className="text-xs font-semibold text-zinc-600 dark:text-slate-300">
                        Soit env. <span className="text-stanley-gold dark:text-stanley-yellow font-bold">{estimate.formattedEur}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-zinc-500 dark:text-slate-400 mt-2 leading-relaxed">
                      * Estimation indicative calculée selon les cours des matériaux à Antananarivo (ciment 350kg/m³, ferraillage FeE500, main-d'œuvre qualifiée). Visite technique terrain requise pour validation.
                    </div>
                  </div>

                  {/* Step 3: Identity & Contact Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300 mb-3">
                      3. Vos Coordonnées &amp; Suivi WhatsApp
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="client-name" className="block text-[11px] text-zinc-600 dark:text-slate-400 mb-1">
                          Nom &amp; Prénom <span className="text-stanley-yellow">*</span>
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
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-300 dark:border-stanley-steel text-sm text-zinc-900 dark:text-slate-50 placeholder-zinc-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-stanley-yellow focus:border-stanley-yellow focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="client-phone" className="block text-[11px] text-zinc-600 dark:text-slate-400 mb-1">
                          Numéro WhatsApp / Téléphone <span className="text-stanley-yellow">*</span>
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
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-300 dark:border-stanley-steel text-sm text-zinc-900 dark:text-slate-50 placeholder-zinc-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-stanley-yellow focus:border-stanley-yellow focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="client-email" className="block text-[11px] text-zinc-600 dark:text-slate-400 mb-1">
                          Adresse Email <span className="text-stanley-yellow">*</span>
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
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-300 dark:border-stanley-steel text-sm text-zinc-900 dark:text-slate-50 placeholder-zinc-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-stanley-yellow focus:border-stanley-yellow focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="client-quartier" className="block text-[11px] text-zinc-600 dark:text-slate-400 mb-1">
                          Localisation du Chantier à Tana
                        </label>
                        <input
                          id="client-quartier"
                          name="quartier"
                          type="text"
                          placeholder="Ex: Ambatobe, Ivato, Ilafy, By-pass, Itaosy..."
                          value={formData.quartier}
                          onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-300 dark:border-stanley-steel text-sm text-zinc-900 dark:text-slate-50 placeholder-zinc-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-stanley-yellow focus:border-stanley-yellow focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Description */}
                  <div>
                    <label htmlFor="client-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300 mb-2">
                      4. Détails du terrain (pente, accès route, eau/électricité)
                    </label>
                    <textarea
                      id="client-message"
                      name="message"
                      rows={3}
                      placeholder="Précisez si le terrain est en pente, l'accessibilité pour camion benne, présence de rochers, vos délais souhaités..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-300 dark:border-stanley-steel text-sm text-zinc-900 dark:text-slate-50 placeholder-zinc-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-stanley-yellow focus:border-stanley-yellow focus:outline-none transition-all"
                    />
                  </div>

                  {/* Submit CTAs */}
                  <div className="space-y-3 pt-2">
                    <button
                      id="submit-quote-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-stanley-yellow hover:bg-stanley-gold disabled:opacity-75 disabled:cursor-not-allowed text-stanley-black font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all cursor-pointer uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Transmission de votre demande...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 stroke-[2.2]" />
                          <span>Valider ma demande d'étude gratuite</span>
                        </>
                      )}
                    </button>

                    {/* Fast WhatsApp direct dispatch option */}
                    <a
                      href={buildWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-white dark:bg-stanley-charcoal hover:bg-[#25D366]/10 border border-zinc-300 dark:border-stanley-steel hover:border-[#25D366] text-zinc-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                      title="Envoyer instantanément les paramètres du devis via WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current text-[#25D366] shrink-0" />
                      <span>Ou transmettre directement les détails sur WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#25D366]" />
                    </a>
                  </div>

                  <p className="text-[11px] text-zinc-500 dark:text-slate-400 text-center">
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
