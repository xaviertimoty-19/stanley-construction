import React from 'react';
import { Home, Hammer, Building2, Shovel, Compass, Shield, ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  points: string[];
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: Shield,
      title: "Gros Œuvre & Maçonnerie Générale",
      badge: "Cœur de Métier",
      description: "Fondations profondes, dallage béton armé, élévation de murs porteurs, reprise en sous-œuvre et ouvrages structurels de haute exigence.",
      points: ["Étude géotechnique & calculs d'ingénieur", "Garantie Décennale SMA BTP", "Matériaux certifiés NF & conformité DTU"]
    },
    {
      icon: Shovel,
      title: "Travaux Publics & VRD",
      badge: "Infrastructures",
      description: "Terrassement lourd, nivellement de terrains, raccordements voirie et réseaux divers (VRD), assainissement et accès carrossables.",
      points: ["Engins de chantier adaptés tous sols", "Réseaux d'eau, électricité et tout-à-l'égout", "Enrobés, pavage et bordures durables"]
    },
    {
      icon: Hammer,
      title: "Rénovation Complète & Réhabilitation",
      badge: "Tous Corps d'État",
      description: "Restauration lourde de bâtiments, corps de ferme, plateaux bruts et immeubles de caractère. Gestion intégrale second œuvre et finitions.",
      points: ["Dépose & curage soigné", "Mise aux normes électriques et plomberie", "Interlocuteur unique tout au long du chantier"]
    },
    {
      icon: Home,
      title: "Construction Neuve RE2020",
      badge: "Clé en main",
      description: "Édification de pavillons et villas bioclimatiques modernes selon les réglementations environnementales RE2020 pour une consommation minimale.",
      points: ["Performance thermique & isolation biosourcée", "Contrat clair avec pénalités de retard", "Suivi hebdomadaire avec photos d'avancement"]
    },
    {
      icon: Building2,
      title: "Extension & Surélévation",
      badge: "Gain de Surface",
      description: "Agrandissement vertical ou horizontal d'habitats existants en maçonnerie ou ossature bois avec intégration harmonieuse au bâti existant.",
      points: ["Études de descente de charges", "Pose rapide & étanchéité soignée", "Optimisation de l'emprise au sol"]
    },
    {
      icon: Compass,
      title: "Maîtrise d'Œuvre & Pilotage Technique",
      badge: "Accompagnement",
      description: "Pilotage direct des chantiers avec rigueur d'ordonnancement, de pilotage et de coordination (OPC). Présence active de nos équipes sur site.",
      points: ["Comptes-rendus de chantier réguliers", "Contrôle qualité à chaque étape", "Réception de travaux avec levée de réserves"]
    }
  ];

  return (
    <section id="services" aria-label="Services et Expertises BTP" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Expertises Tout Corps d'État
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-50 tracking-tight">
            Bâtiment, Gros Œuvre & Travaux Publics
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            De la préparation du terrain jusqu'aux finitions d'exception, nous mobilisons l'expérience éprouvée de nos compagnons terrain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="group relative rounded-2xl bg-navy-950 border border-slate-800 p-8 hover:border-amber-500/40 hover:bg-navy-950/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-navy-950 transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-50 mb-3 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-4">
                    {service.points.map((point, ptIndex) => (
                      <li key={ptIndex} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors pt-2 group-hover:translate-x-1"
                >
                  <span>Étudier ce lot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
