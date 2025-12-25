import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Users, Sprout, TrendingUp, Award, ArrowRight, Banana, TreePine, Carrot, Flame, Cherry, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';
import { banniereAccueil, photoIntroAgriculteur, agricultureCacao, apicultureMiel } from '../components/img';

const Home = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  return (
    <>
      <Hero 
        title={t.home.hero.title}
        subtitle={t.home.hero.subtitle}
        image={banniereAccueil}
        height="min-h-[50vh]"
      />

      {/* Intro Section - Clean White */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gbc-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title={t.home.mission.title}
                subtitle={t.home.mission.subtitle}
              />
              <p className="text-lg text-gray-500 mb-6 leading-relaxed font-sans">
                <strong className="text-gbc-black">Global Binyavanga Company (GBC SARLU)</strong> {t.home.mission.text1}
              </p>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed font-sans">
                {t.home.mission.text2}
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-sans">
                {t.home.mission.text3}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-gbc-yellow/20 rounded-lg text-gbc-yellow">
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-gbc-black">{t.home.mission.certifiedExcellence}</span>
                </div>
                <p className="text-xs text-gray-500">{t.home.mission.qualityCommitment}</p>
              </div>
            </div>
          </div>
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

      {/* Cultures Actuelles - Détails */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={t.home.cultures.title} 
            subtitle={t.home.cultures.subtitle} 
            center 
          />
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg font-sans">
            {t.home.cultures.intro}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: t.home.cultures.plantains, icon: Banana, color: "text-yellow-500" },
              { name: t.home.cultures.cocoa, icon: TreePine, color: "text-amber-700" },
              { name: t.home.cultures.squash, icon: Carrot, color: "text-orange-500" },
              { name: t.home.cultures.pepper, icon: Flame, color: "text-red-500" },
              { name: t.home.cultures.plums, icon: Cherry, color: "text-purple-500" },
              { name: t.home.cultures.passionfruit, icon: Apple, color: "text-green-500" }
            ].map((culture, idx) => {
              const IconComponent = culture.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-gbc-gray rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100 hover:border-gbc-green"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center ${culture.color} group-hover:bg-gbc-green/10 transition-colors`}>
                      <IconComponent size={32} className={culture.color} />
                    </div>
                  </div>
                  <h4 className="font-bold text-gbc-black text-sm md:text-base group-hover:text-gbc-green transition-colors">
                    {culture.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm font-sans max-w-2xl mx-auto">
              {t.home.cultures.practices}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats - Dark Tech Theme */}
      <section className="py-24 bg-gbc-black text-white relative overflow-hidden">
        {/* Abstract shapes */}
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

      {/* CTA - Gradient Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gbc-green to-gbc-blue z-0"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">{t.home.cta.title}</h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto font-light">
            {t.home.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gbc-yellow text-gbc-black font-bold rounded-xl hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
              {t.home.cta.contact}
            </Link>
            <Link to="/productions" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gbc-blue transition-all">
              {t.home.cta.productions}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
