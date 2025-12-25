import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Microscope, Sprout, Lightbulb } from 'lucide-react';
import { banniereDevelopment } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Development = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.development.hero.title} 
        subtitle={t.development.hero.subtitle}
        image={banniereDevelopment}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={t.development.intro.title} 
            subtitle={t.development.intro.subtitle} 
          />
          <p className="text-gray-500 mb-16 max-w-3xl text-lg font-sans">
            {t.development.intro.text}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gbc-blue transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-gbc-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-gbc-blue group-hover:text-white transition-colors">
                <Microscope size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-gbc-black">{t.development.projects.selection.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.development.projects.selection.description}
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gbc-green transition-all duration-300 group">
               <div className="w-14 h-14 bg-green-50 text-gbc-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-gbc-green group-hover:text-white transition-colors">
                <Sprout size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-gbc-black">{t.development.projects.biofertilizers.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.development.projects.biofertilizers.description}
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gbc-yellow transition-all duration-300 group">
               <div className="w-14 h-14 bg-yellow-50 text-gbc-yellow rounded-xl flex items-center justify-center mb-6 group-hover:bg-gbc-yellow group-hover:text-gbc-black transition-colors">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-gbc-black">{t.development.projects.smartfarming.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.development.projects.smartfarming.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Development;
