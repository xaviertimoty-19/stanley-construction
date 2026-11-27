import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Calculator, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { calculateEstimate, PROJECT_TYPES } from '../utils/estimator';
import { ScrollReveal } from './ScrollReveal';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  quartier: string;
  message: string;
}

interface ContactFieldConfig {
  id: string;
  name: keyof ContactFormData;
  label: string;
  type: 'text' | 'tel' | 'email';
  required?: boolean;
  autoComplete: string;
  placeholder: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact: React.FC = () => {
  const [clientProfile, setClientProfile] = useState<'resident' | 'diaspora'>('resident');
  const [projectType, setProjectType] = useState<string>('gros-oeuvre');
  const [surface, setSurface] = useState<number>(120);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    quartier: '',
    message: '',
  });

  const estimate = calculateEstimate(projectType, surface);

  const contactFields: ContactFieldConfig[] = [
    {
      id: 'client-name',
      name: 'name',
      label: 'Nom & Prénom',
      type: 'text',
      required: true,
      autoComplete: 'name',
      placeholder: 'Ex: Ravelojaona Hery',
    },
    {
      id: 'client-phone',
      name: 'phone',
      label: 'Numéro WhatsApp / Téléphone',
      type: 'tel',
      required: true,
      autoComplete: 'tel',
      placeholder: clientProfile === 'diaspora' ? '+33 6 12 34 56 78' : '034 00 000 00',
    },
    {
      id: 'client-email',
      name: 'email',
      label: 'Adresse Email',
      type: 'email',
      required: true,
      autoComplete: 'email',
      placeholder: 'votre.email@domaine.com',
    },
    {
      id: 'client-quartier',
      name: 'quartier',
      label: 'Localisation du Chantier (Tana / Provinces)',
      type: 'text',
      required: false,
      autoComplete: 'address-level2',
      placeholder: 'Ex: Ambatobe, Ivato, Itaosy, Antsiranana...',
    },
  ];

  const buildSummaryLines = () =>
    [
      '🏗️ DEMANDE DE DEVIS — STANLEY CONSTRUCTION',
      `• Client : ${formData.name.trim() || 'Prospect'} (${clientProfile === 'diaspora' ? 'Diaspora Malgache' : 'Résident Madagascar'})`,
      `• Contact : ${formData.phone.trim() || 'Non renseigné'} | ${formData.email.trim() || 'Non renseigné'}`,
      `• Lot / Travaux : ${estimate.projectType}`,
      `• Surface estimée : ~${surface} m²`,
      `• Fourchette indicative : ${estimate.formattedAr} (soit env. ${estimate.formattedEur})`,
      formData.quartier.trim() ? `• Localisation chantier : ${formData.quartier.trim()}` : '',
      formData.message.trim() ? `• Spécificités terrain : ${formData.message.trim()}` : '',
    ].filter(Boolean);

  const buildWhatsAppMessage = () =>
    `https://wa.me/261375135964?text=${encodeURIComponent(buildSummaryLines().join('\n'))}`;

  const buildMailtoUrl = () => {
    const subject = `Demande de devis — ${estimate.projectType} (~${surface} m²)`;
    const body = buildSummaryLines().join('\n');
    return `mailto:contact@stanley-construction.mg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsappDirectUrl = "https://wa.me/261375135964?text=Bonjour%20Stanley%20Construction,%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20à%20Madagascar.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName || !trimmedPhone || !trimmedEmail) {
      setErrorMessage('Veuillez renseigner votre Nom, Numéro de Téléphone (ou WhatsApp) et Adresse Email.');
      return;
    }

    if (trimmedPhone.replace(/\D/g, '').length < 6) {
      setErrorMessage('Veuillez saisir un numéro de téléphone ou WhatsApp valide.');
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setErrorMessage('Veuillez saisir une adresse email valide.');
      return;
    }

    setErrorMessage('');

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

    window.open(buildWhatsAppMessage(), '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Demande de Devis et Contact Antananarivo" className="py-24 bg-zinc-50 dark:bg-stanley-black relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Reassurance */}
          <ScrollReveal className="lg:col-span-5 space-y-6">
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
          </ScrollReveal>

          {/* Right Column: Accessible Interactive Form & Real-Time Estimator */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-stanley-charcoal border border-zinc-200 dark:border-stanley-steel relative shadow-md dark:shadow-xl">
              {isSubmitted ? (
                <div role="status" aria-live="polite" className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-stanley-black border-2 border-stanley-gold dark:border-stanley-yellow flex items-center justify-center text-stanley-gold dark:text-stanley-yellow mx-auto">
                    <CheckCircle className="w-8 h-8 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-slate-50">
                    Récapitulatif prêt pour envoi !
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Misaotra tompoko, <strong className="text-zinc-900 dark:text-slate-50">{formData.name}</strong>. Votre estimation (<span className="text-stanley-yellow font-semibold">{estimate.projectType}</span>, ~{surface} m²) est prête à être transmise sur WhatsApp ou par email.
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
                    <div><strong>Téléphone / WhatsApp :</strong> <span className="text-stanley-gold dark:text-stanley-yellow font-bold">{formData.phone}</span></div>
                    <div><strong>Email :</strong> <span className="text-stanley-gold dark:text-stanley-yellow font-bold">{formData.email}</span></div>
                  </div>

                  {/* Immediate WhatsApp & Mailto transmission buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
                    <a
                      href={buildWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 cursor-pointer uppercase tracking-wider"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0" />
                      <span>Envoyer sur WhatsApp</span>
                    </a>
                    <a
                      href={buildMailtoUrl()}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                    >
                      <Mail className="w-4 h-4 stroke-[2.2]" />
                      <span>Envoyer par Email</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage('');
                        setFormData({ name: '', email: '', phone: '', quartier: '', message: '' });
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
                      {contactFields.map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-[11px] text-zinc-600 dark:text-slate-400 mb-1">
                            {field.label} {field.required && <span className="text-stanley-yellow">*</span>}
                          </label>
                          <input
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            aria-required={field.required ? 'true' : undefined}
                            autoComplete={field.autoComplete}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-stanley-black border border-zinc-300 dark:border-stanley-steel text-sm text-zinc-900 dark:text-slate-50 placeholder-zinc-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-stanley-yellow focus:border-stanley-yellow focus:outline-none transition-all"
                          />
                        </div>
                      ))}
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
                      className="w-full py-4 rounded-xl bg-stanley-yellow hover:bg-stanley-gold text-stanley-black font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all cursor-pointer uppercase tracking-wider"
                    >
                      <Send className="w-5 h-5 stroke-[2.2]" />
                      <span>Valider et envoyer sur WhatsApp</span>
                    </button>

                    {/* Mailto fallback option */}
                    <a
                      href={buildMailtoUrl()}
                      className="w-full py-3.5 rounded-xl bg-white dark:bg-stanley-charcoal hover:bg-amber-500/10 border border-zinc-300 dark:border-stanley-steel hover:border-stanley-yellow text-zinc-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                      title="Ouvrir votre messagerie avec les détails du devis"
                    >
                      <Mail className="w-4 h-4 text-stanley-gold dark:text-stanley-yellow shrink-0" />
                      <span>Ou préparer l'envoi par Email (contact@stanley-construction.mg)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stanley-gold dark:text-stanley-yellow" />
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
