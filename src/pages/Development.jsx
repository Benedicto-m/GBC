import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Microscope, Sprout, Lightbulb } from 'lucide-react';

const Development = () => {
  return (
    <>
      <Hero 
        title="Recherche & Développement" 
        subtitle="Innover pour l'agriculture de demain"
        image="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="L'Innovation au Cœur de Notre Stratégie" 
            subtitle="Nos Projets R&D" 
          />
          <p className="text-gray-500 mb-16 max-w-3xl text-lg font-sans">
            L'agriculture au Nord-Kivu fait face à des défis climatiques et structurels uniques. 
            Notre département R&D travaille sur des solutions adaptées pour améliorer les rendements tout en respectant l'environnement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gbc-blue transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-gbc-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-gbc-blue group-hover:text-white transition-colors">
                <Microscope size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-gbc-black">Sélection Variétale</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Identification et multiplication de souches de cacao et café résistantes aux maladies locales et adaptées à l'altitude du Kivu.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gbc-green transition-all duration-300 group">
               <div className="w-14 h-14 bg-green-50 text-gbc-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-gbc-green group-hover:text-white transition-colors">
                <Sprout size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-gbc-black">Bio-Fertilisants</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Développement d'engrais organiques à base de résidus de récolte et de compost pour enrichir les sols sans chimie.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gbc-yellow transition-all duration-300 group">
               <div className="w-14 h-14 bg-yellow-50 text-gbc-yellow rounded-xl flex items-center justify-center mb-6 group-hover:bg-gbc-yellow group-hover:text-gbc-black transition-colors">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-gbc-black">Smart Farming</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Projet pilote d'utilisation de capteurs IoT pour le suivi de l'humidité des sols et la santé des ruches à distance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Development;
