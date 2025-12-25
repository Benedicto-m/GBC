import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Users, TreeDeciduous } from 'lucide-react';
import { banniereImpact } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Impact = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.impact.hero.title} 
        subtitle={t.impact.hero.subtitle}
        image={banniereImpact}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-gbc-black mb-8">{t.impact.model.title}</h2>
            <p className="text-gray-500 text-xl font-light">
              {t.impact.model.text}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-24 h-24 bg-green-50 text-gbc-green rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gbc-green group-hover:text-white transition-colors duration-300">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gbc-black">{t.impact.impacts.empowerment.title}</h3>
              <p className="text-gray-500 px-4">
                {t.impact.impacts.empowerment.text}
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-yellow-50 text-gbc-yellow rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gbc-yellow group-hover:text-gbc-black transition-colors duration-300">
                <TreeDeciduous size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gbc-black">{t.impact.impacts.reforestation.title}</h3>
              <p className="text-gray-500 px-4">
                {t.impact.impacts.reforestation.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 bg-gbc-black text-white relative">
        {/* Pattern overlay removed - using gradient only */}
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-display font-medium leading-relaxed mb-10 text-gray-200">
              "{t.impact.testimonial.quote}"
            </blockquote>
            <cite className="not-italic flex flex-col items-center gap-2">
                <span className="font-bold text-gbc-yellow text-lg">{t.impact.testimonial.author}</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">{t.impact.testimonial.role}</span>
            </cite>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
