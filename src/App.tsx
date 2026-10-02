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
    <div className="min-h-screen bg-stanley-black text-slate-100 flex flex-col font-sans selection:bg-stanley-yellow selection:text-stanley-black">
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
