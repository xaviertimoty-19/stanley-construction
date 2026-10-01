import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-navy-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Values />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      {/* Bouton WhatsApp flottant indispensable */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
