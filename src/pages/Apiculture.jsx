import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle } from 'lucide-react';
import { banniereApiculture, ruches, potMiel } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Apiculture = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.apiculture.hero.title} 
        subtitle={t.apiculture.hero.subtitle}
        image={banniereApiculture}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle title={t.apiculture.passion.title} subtitle={t.apiculture.passion.subtitle} />
              <p className="text-gray-500 text-lg mb-8 font-sans leading-relaxed">
                {t.apiculture.passion.text1}
              </p>
              <p className="text-gray-500 mb-10 font-sans">
                {t.apiculture.passion.text2}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.apiculture.passion.products.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gbc-yellow transition-colors">
                    <CheckCircle size={24} className="text-gbc-yellow flex-shrink-0" />
                    <span className="font-bold text-gbc-black text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-gbc-yellow/10 rounded-full blur-3xl"></div>
              <div className="relative group rounded-2xl overflow-hidden mt-12 shadow-lg h-64 w-full">
                 <img src={ruches} alt="Ruches" className="relative z-10 w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative group rounded-2xl overflow-hidden shadow-lg h-64 w-full">
                <img src={potMiel} alt="Pot de miel" className="relative z-10 w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-gbc-gray relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionTitle title={t.apiculture.process.title} subtitle={t.apiculture.process.subtitle} center />
          
          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gbc-yellow/20 via-gbc-yellow to-gbc-yellow/20 -z-10 hidden md:block transform -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {t.apiculture.process.steps.map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="w-16 h-16 bg-gbc-yellow text-gbc-black rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-6 border-4 border-white shadow-md relative z-10">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-gbc-black">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apiculture;
