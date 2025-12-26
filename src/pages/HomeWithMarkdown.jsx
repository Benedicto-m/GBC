import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import MarkdownContent from '../components/MarkdownContent';
import { motion } from 'framer-motion';
import { Users, Sprout, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';
import { banniereAccueil, photoIntroAgriculteur, agricultureCacao, apicultureMiel } from '../components/img';

/**
 * Exemple de page Home utilisant le système Markdown
 * Montre comment intégrer le contenu Markdown dans une page existante
 */
const HomeWithMarkdown = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  
  return (
    <>
      <Hero 
        title={t.home.hero.title}
        image={banniereAccueil}
        height="min-h-[50vh]"
      />

      {/* Section Mission avec Markdown */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gbc-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenu Markdown */}
            <div>
              <MarkdownContent 
                source="pages/home.md"
                className="markdown-mission"
              />
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/about" className="btn-primary shadow-lg hover:shadow-xl">
                  {t.home.mission.discoverVision}
                </Link>
                <Link to="/productions" className="btn-outline">
                  {t.home.mission.ourProductions}
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gbc-blue rounded-3xl transform rotate-3 transition-transform group-hover:rotate-1 opacity-10"></div>
              <img 
                src={photoIntroAgriculteur} 
                alt="Agriculteur au travail" 
                className="relative rounded-3xl shadow-card transform -rotate-2 transition-transform duration-500 group-hover:rotate-0 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission détaillée depuis Markdown */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <MarkdownContent 
            source="sections/mission.md"
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Core Activities - Light Gray Background */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle 
            title={t.home.sectors.title} 
            subtitle={t.home.sectors.subtitle} 
            center 
          />
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg font-sans">
            {t.home.sectors.intro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <ProductCard 
              title={t.home.sectors.agriculture.title}
              description={t.home.sectors.agriculture.description}
              image={agricultureCacao}
              link="/productions"
            />
            <ProductCard 
              title={t.home.sectors.apiculture.title}
              description={t.home.sectors.apiculture.description}
              image={apicultureMiel}
              link="/apiculture"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gbc-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gbc-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gbc-green/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              className="p-4"
            >
              <Users size={48} className="mx-auto text-gbc-green mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">40</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{t.home.stats.farmers}</div>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <Sprout size={48} className="mx-auto text-gbc-yellow mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">6ha</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{t.home.stats.cultivated}</div>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4"
            >
              <TrendingUp size={48} className="mx-auto text-gbc-blue mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">15T</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{t.home.stats.production}</div>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4"
            >
              <Award size={48} className="mx-auto text-gbc-green mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">100%</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{t.home.stats.quality}</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWithMarkdown;


