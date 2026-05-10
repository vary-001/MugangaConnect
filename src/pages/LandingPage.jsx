import React from 'react';
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Footer from "../components/layout/Footer";

const FeatureCard = ({ number, title, desc }) => (
  <div className="p-8 sm:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-gray-50 group">
    <span className="text-orangeCTA font-black text-xs tracking-[0.4em] mb-6 block">{number}</span>
    <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tighter uppercase">{title}</h3>
    <p className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed uppercase">{desc}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              number="01. CONNECT" 
              title="Global Network" 
              desc="Link with licensed doctors across various continents in minutes."
            />
            <FeatureCard 
              number="02. COUNSEL" 
              title="Mental Health" 
              desc="Private and secure sessions with professional wellness therapists."
            />
            <FeatureCard 
              number="03. HEAL" 
              title="Digital Care" 
              desc="Full recovery tracking and digital prescriptions on your dashboard."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;