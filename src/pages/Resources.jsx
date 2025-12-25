import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { FileText, Download, BookOpen } from 'lucide-react';
import { banniereResources } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Resources = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];

  const resources = [
    {
      title: t.resources.items.catalog.title,
      type: t.resources.items.catalog.type,
      size: t.resources.items.catalog.size,
      desc: t.resources.items.catalog.desc,
      icon: BookOpen,
      color: "bg-gbc-blue"
    },
    {
      title: t.resources.items.impact.title,
      type: t.resources.items.impact.type,
      size: t.resources.items.impact.size,
      desc: t.resources.items.impact.desc,
      icon: FileText,
      color: "bg-gbc-green"
    },
    {
      title: t.resources.items.guide.title,
      type: t.resources.items.guide.type,
      size: t.resources.items.guide.size,
      desc: t.resources.items.guide.desc,
      icon: FileText,
      color: "bg-gbc-yellow"
    }
  ];

  return (
    <>
      <Hero 
        title={t.resources.hero.title} 
        subtitle={t.resources.hero.subtitle}
        image={banniereResources}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((res, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-8 hover:shadow-card hover:border-gray-200 transition-all duration-300 group bg-white">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-xl text-white ${res.color} shadow-md`}>
                    <res.icon size={28} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{res.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gbc-black mb-3 font-display">{res.title}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{res.desc}</p>
                <button className="flex items-center text-sm font-bold text-gbc-black group-hover:text-gbc-blue transition-colors uppercase tracking-wide">
                  <Download size={18} className="mr-2" />
                  {t.resources.download} <span className="text-gray-400 ml-1 font-normal normal-case">({res.size})</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
