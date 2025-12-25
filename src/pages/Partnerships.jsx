import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bannierePartnerships } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Partnerships = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.partnerships.hero.title} 
        subtitle={t.partnerships.hero.subtitle}
        image={bannierePartnerships}
      />

      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <SectionTitle title={t.partnerships.intro.title} center />
          <p className="max-w-2xl mx-auto text-gray-500 mb-20">
            {t.partnerships.intro.text}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Mock Partner Logos using Placeholders - Clean Style */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-center h-40 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-soft transition-all duration-300 group">
                <span className="font-display font-bold text-xl text-gray-300 group-hover:text-gbc-blue transition-colors">PARTENAIRE {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <div className="bg-white p-12 rounded-3xl shadow-card flex flex-col md:flex-row items-center gap-10 border border-gray-100">
            <div className="bg-gbc-green/10 p-8 rounded-full flex-shrink-0">
              <Handshake size={64} className="text-gbc-green" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold font-display text-gbc-black mb-4">{t.partnerships.cta.title}</h3>
              <p className="text-gray-500 text-lg">
                {t.partnerships.cta.text}
              </p>
            </div>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-gbc-green text-white font-bold rounded-xl hover:bg-gbc-black transition-colors whitespace-nowrap shadow-lg"
            >
              {t.partnerships.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnerships;
