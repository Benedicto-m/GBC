import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Settings, Package, Truck } from 'lucide-react';
import { banniereTransformation, usineTransformationDetail } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Transformation = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.transformation.hero.title} 
        subtitle={t.transformation.hero.subtitle}
        image={banniereTransformation}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={t.transformation.intro.title} 
            subtitle={t.transformation.intro.subtitle} 
          />
          
          {/* Badge pour indiquer que c'est stratégique */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gbc-blue/10 border-l-4 border-gbc-blue rounded-r-xl p-6">
              <p className="text-gray-700 font-sans leading-relaxed">
                <strong className="text-gbc-black">{t.transformation.intro.note}</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="text-gray-500 space-y-6 text-lg font-sans">
              <p>
                {t.transformation.intro.text1}
              </p>
              <p>
                {t.transformation.intro.text2}
              </p>
              <ul className="space-y-4 ml-2">
                {t.transformation.intro.goals.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gbc-blue rounded-full"></div>
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={usineTransformationDetail} 
                alt="Usine de transformation" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-gbc-green transition-colors group">
              <Settings className="w-14 h-14 text-gbc-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-4 text-gbc-black">{t.transformation.units.processing.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.transformation.units.processing.description}
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-gbc-blue transition-colors group">
              <Package className="w-14 h-14 text-gbc-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-4 text-gbc-black">{t.transformation.units.packaging.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.transformation.units.packaging.description}
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-gbc-yellow transition-colors group">
              <Truck className="w-14 h-14 text-gbc-yellow mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-4 text-gbc-black">{t.transformation.units.logistics.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.transformation.units.logistics.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transformation;
