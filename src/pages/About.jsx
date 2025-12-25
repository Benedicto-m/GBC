import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Heart, Globe, TrendingUp, User, Users, ChevronDown, Sprout, Eye, Layers, Building2, ArrowRight, CheckCircle2, Shield, Settings, Briefcase, Lightbulb, BarChart3 } from 'lucide-react';
import { banniereAPropos, imageChamps, imageAbeilles, getTeamImage } from '../components/img';
import mukizaBinyavanga from '../components/img/team/Mukiza-binyavanga-agustin.jpg';
import mirindiBenedicto from '../components/img/team/mirindi-benedicto.png';
import tumainiNsekambizi from '../components/img/team/tumaini-nsekambizi-pascal.jpg';
import nambajimanaGasigwa from '../components/img/team/nambajimana-gasigwa-jean-paul.jpg';
import ndizeyeMbanzabugabo from '../components/img/team/ndizeye-mbanzabugabo-augustin.jpg';
import nRukundoNizeyimana from '../components/img/team/N\'Rukundo-nizeyimana-clémence.jpg';
import nikuzeBenjamin from '../components/img/team/nikuze-benjamin.png';
import ntakirutimanaLaurent from '../components/img/team/ntakirutimana-laurent.jpeg';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const About = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
  // Image par défaut pour les membres sans photo
  const defaultTeamImage = getTeamImage("default", "default", 0);

  // Structure hiérarchique des Directions avec leurs adjoints
  const managementStructure = [
    {
      id: 1,
      direction: t.about.team.directions.general,
      director: {
        id: 1,
        role: t.about.team.roles.generalDirector,
        name: "MUKIZA BINYAVANGA Augustin",
        image: mukizaBinyavanga
      },
      deputy: {
        id: 2,
        role: t.about.team.roles.generalDirectorDeputy,
        name: "MIRINDI BENEDICTO",
        image: mirindiBenedicto
      },
      color: "bg-gbc-blue",
      icon: Briefcase
    },
    {
      id: 2,
      direction: t.about.team.directions.adminFinancial,
      director: {
        id: 3,
        role: t.about.team.roles.adminFinancialDirector,
        name: "NTEZIYAREMYE Jean Paul",
        image: defaultTeamImage
      },
      deputy: {
        id: 4,
        role: t.about.team.roles.adminFinancialDeputy,
        name: "TUMAINI NSEKAMBIZI Pascal",
        image: tumainiNsekambizi
      },
      color: "bg-gbc-green",
      icon: Shield
    },
    {
      id: 3,
      direction: t.about.team.directions.operations,
      director: {
        id: 5,
        role: t.about.team.roles.operationsDirector,
        name: "NAMBAJIMANA GASIGWA Jean-Paul",
        image: nambajimanaGasigwa
      },
      deputy: {
        id: 6,
        role: t.about.team.roles.operationsDeputy,
        name: "HATEGEKIMANA MUKUNDUFITE Benjamin",
        image: defaultTeamImage
      },
      color: "bg-gbc-yellow",
      icon: Settings
    },
    {
      id: 4,
      direction: t.about.team.directions.commercial,
      director: {
        id: 7,
        role: t.about.team.roles.commercialDirector,
        name: "NDIZEYE MBANZABUGABO Augustin",
        image: ndizeyeMbanzabugabo
      },
      deputy: {
        id: 8,
        role: t.about.team.roles.commercialDeputy,
        name: "N.RUKUNDO NIZEYIMANA CLEMENCE",
        image: nRukundoNizeyimana
      },
      color: "bg-gbc-brown",
      icon: TrendingUp
    },
    {
      id: 5,
      direction: t.about.team.directions.hr,
      director: {
        id: 9,
        role: t.about.team.roles.hrDirector,
        name: "NIKUZE BENJAMIN",
        image: nikuzeBenjamin
      },
      deputy: {
        id: 10,
        role: t.about.team.roles.hrDeputy,
        name: "NTAKIRUTIMANA Laurent",
        image: ntakirutimanaLaurent
      },
      color: "bg-purple-500",
      icon: Users
    },
    {
      id: 6,
      direction: t.about.team.directions.marketing,
      director: {
        id: 11,
        role: t.about.team.roles.marketingDirector,
        name: "Alexandre TWAGIRAYEZU",
        image: defaultTeamImage
      },
      deputy: {
        id: 12,
        role: t.about.team.roles.marketingDeputy,
        name: "RUGIRACYANE Claude",
        image: defaultTeamImage
      },
      color: "bg-pink-500",
      icon: Target
    },
  ];

  // Données pour les Ouvriers et le Staff Technique
  // Organisé par catégories pour faciliter le filtrage avec le menu cascade
  const technicalTeam = [
    // Personnel de supervision
    { id: 101, role: t.about.team.roles.operationsManager, name: "Nom du Chef", category: t.about.team.categories.supervision },
    { id: 102, role: t.about.team.roles.beekeepingManager, name: "Nom Resp. Api", category: t.about.team.categories.supervision },
    { id: 103, role: t.about.team.roles.agricultureManager, name: "Nom Resp. Agri", category: t.about.team.categories.supervision },
    
    // Techniciens
    { id: 201, role: t.about.team.roles.transformationTech, name: "Nom Tech 1", category: t.about.team.categories.technique },
    { id: 202, role: t.about.team.roles.transformationTech, name: "Nom Tech 2", category: t.about.team.categories.technique },
    { id: 203, role: t.about.team.roles.beekeepingTech, name: "Nom Tech Api", category: t.about.team.categories.technique },
    { id: 204, role: t.about.team.roles.agricultureTech, name: "Nom Tech Agri", category: t.about.team.categories.technique },
    
    // Ouvriers agricoles
    { id: 301, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 1", category: t.about.team.categories.farmWorkers },
    { id: 302, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 2", category: t.about.team.categories.farmWorkers },
    { id: 303, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 3", category: t.about.team.categories.farmWorkers },
    { id: 304, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 4", category: t.about.team.categories.farmWorkers },
    { id: 305, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 5", category: t.about.team.categories.farmWorkers },
    { id: 306, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 6", category: t.about.team.categories.farmWorkers },
    { id: 307, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 7", category: t.about.team.categories.farmWorkers },
    { id: 308, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 8", category: t.about.team.categories.farmWorkers },
    { id: 309, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 9", category: t.about.team.categories.farmWorkers },
    { id: 310, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 10", category: t.about.team.categories.farmWorkers },
    { id: 311, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 11", category: t.about.team.categories.farmWorkers },
    { id: 312, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 12", category: t.about.team.categories.farmWorkers },
    { id: 313, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 13", category: t.about.team.categories.farmWorkers },
    { id: 314, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 14", category: t.about.team.categories.farmWorkers },
    { id: 315, role: t.about.team.roles.farmWorker, name: "Nom Ouvrier 15", category: t.about.team.categories.farmWorkers },
    
    // Support et logistique
    { id: 401, role: t.about.team.roles.driver, name: "Nom Chauffeur 1", category: t.about.team.categories.logistics },
    { id: 402, role: t.about.team.roles.driver, name: "Nom Chauffeur 2", category: t.about.team.categories.logistics },
    { id: 403, role: t.about.team.roles.security, name: "Nom Sécurité 1", category: t.about.team.categories.security },
    { id: 404, role: t.about.team.roles.security, name: "Nom Sécurité 2", category: t.about.team.categories.security },
    { id: 405, role: t.about.team.roles.maintenance, name: "Nom Maintenance", category: t.about.team.categories.logistics },
  ];

  // État pour le chargement progressif
  const [visibleCount, setVisibleCount] = useState(12); // Afficher 12 membres initialement
  const itemsPerPage = 12; // Nombre d'éléments à charger à chaque fois

  // Filtrer les membres visibles
  const visibleTeam = technicalTeam.slice(0, visibleCount);
  const hasMore = visibleCount < technicalTeam.length;
  const hasLess = visibleCount > itemsPerPage;

  // Fonction pour charger plus de membres
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + itemsPerPage, technicalTeam.length));
  };

  // Fonction pour charger moins de membres
  const loadLess = () => {
    setVisibleCount(prev => Math.max(itemsPerPage, prev - itemsPerPage));
  };

  return (
    <>
      <Hero 
        title={t.about.hero.title} 
        subtitle={t.about.hero.subtitle}
        image={banniereAPropos}
      />

      {/* Introduction */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gbc-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle 
              title={t.about.intro.title} 
              subtitle={t.about.intro.subtitle} 
              center
            />
            <div className="space-y-6 text-gray-600 leading-relaxed font-sans text-lg">
              <p>
                <strong className="text-gbc-black">Global Binyavanga Company (GBC SARLU)</strong> {t.about.intro.text1}
              </p>
              <p>
                {t.about.intro.text2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision claire */}
      <section className="py-24 bg-gbc-gray relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gbc-blue/10 rounded-xl">
                  <Eye size={32} className="text-gbc-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gbc-black">
                  {t.about.vision.title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-lg">
                <p>
                  {t.about.vision.text1}
                </p>
                <p>
                  {t.about.vision.text2}
                </p>
                <p className="text-gbc-green font-semibold">
                  {t.about.vision.text3}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-card border-l-4 border-gbc-blue">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-gbc-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gbc-black mb-1">{t.about.vision.base1}</h4>
                      <p className="text-gray-600 text-sm">{t.about.vision.base1Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-gbc-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gbc-black mb-1">{t.about.vision.base2}</h4>
                      <p className="text-gray-600 text-sm">{t.about.vision.base2Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-gbc-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gbc-black mb-1">{t.about.vision.base3}</h4>
                      <p className="text-gray-600 text-sm">{t.about.vision.base3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Positionnement multisectoriel */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="p-3 bg-gbc-green/10 rounded-xl">
                <Layers size={32} className="text-gbc-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gbc-black text-center">
                {t.about.positioning.title}
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed font-sans text-lg text-center">
              <p>
                {t.about.positioning.text1}
              </p>
              <p>
                {t.about.positioning.text2}
              </p>
              <div className="bg-gbc-green/5 border-l-4 border-gbc-green rounded-r-xl p-6 mt-8">
                <p className="text-gbc-black font-semibold">
                  {t.about.positioning.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socle opérationnel */}
      <section className="py-24 bg-gbc-gray relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card h-80 w-full bg-gray-200 group">
                <img src={imageChamps} alt="Socle opérationnel" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-gbc-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{t.about.foundation.foundationTitle}</h3>
                  <p className="text-sm text-gray-200">{t.about.foundation.foundationDesc}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gbc-yellow/10 rounded-xl">
                  <Building2 size={32} className="text-gbc-yellow" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gbc-black">
                  {t.about.foundation.title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-lg">
                <p>
                  {t.about.foundation.text1}
                </p>
                <p className="font-semibold text-gbc-black">{t.about.foundation.text2}</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <ArrowRight size={20} className="text-gbc-green flex-shrink-0 mt-1" />
                    <span>{t.about.foundation.activity1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={20} className="text-gbc-green flex-shrink-0 mt-1" />
                    <span>{t.about.foundation.activity2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight size={20} className="text-gbc-green flex-shrink-0 mt-1" />
                    <span>{t.about.foundation.activity3}</span>
                  </li>
                </ul>
                <p className="text-gbc-green font-semibold mt-4">
                  {t.about.foundation.text3}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Croissance pensée avec discipline */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="p-3 bg-gbc-blue/10 rounded-xl">
                <TrendingUp size={32} className="text-gbc-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gbc-black text-center">
                {t.about.growth.title}
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed font-sans text-lg">
              <p className="text-center">
                {t.about.growth.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { step: "1", title: t.about.growth.step1, icon: Shield },
                  { step: "2", title: t.about.growth.step2, icon: Settings },
                  { step: "3", title: t.about.growth.step3, icon: TrendingUp },
                  { step: "4", title: t.about.growth.step4, icon: ArrowRight }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gbc-gray p-6 rounded-xl border-l-4 border-gbc-blue hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-gbc-blue rounded-full flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                        <IconComponent size={24} className="text-gbc-blue" />
                        <h3 className="font-bold text-gbc-black">{item.title}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="bg-gbc-blue/5 border-l-4 border-gbc-blue rounded-r-xl p-6 mt-8">
                <p className="text-gray-700">
                  <strong className="text-gbc-black">{t.about.growth.noteStrong}</strong><br />
                  {t.about.growth.noteRest}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* En une phrase */}
      <section className="py-24 bg-gradient-to-r from-gbc-green to-gbc-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{t.about.phrase.title}</h2>
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                <strong className="font-bold">Global Binyavanga Company</strong> {t.about.phrase.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle title={t.about.values.title} center subtitle={t.about.values.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Briefcase, title: t.about.values.work.title, text: t.about.values.work.text, color: "text-gbc-blue" },
              { icon: Shield, title: t.about.values.discipline.title, text: t.about.values.discipline.text, color: "text-gbc-green" },
              { icon: Lightbulb, title: t.about.values.innovation.title, text: t.about.values.innovation.text, color: "text-gbc-yellow" },
              { icon: Eye, title: t.about.values.honesty.title, text: t.about.values.honesty.text, color: "text-gbc-brown" },
              { icon: TrendingUp, title: t.about.values.resilience.title, text: t.about.values.resilience.text, color: "text-gbc-green" },
              { icon: BarChart3, title: t.about.values.results.title, text: t.about.values.results.text, color: "text-gbc-blue" }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 text-center group border border-transparent hover:border-gray-100">
                <div className={`w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:shadow-md transition-all`}>
                  <val.icon size={36} className={`${val.color}`} />
                </div>
                <h3 className="text-2xl font-bold font-display text-gbc-black mb-4">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'Activité - Opérationnels vs Stratégiques */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={t.about.sectors.title} 
            subtitle={t.about.sectors.subtitle} 
            center 
          />
          
          <div className="max-w-5xl mx-auto">
            {/* Secteurs Opérationnels */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-12 bg-gbc-green rounded-full"></div>
                <h3 className="text-2xl font-bold font-display text-gbc-black">
                  {t.about.sectors.operational.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg font-sans leading-relaxed">
                {t.about.sectors.operational.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gbc-green/5 border-2 border-gbc-green/20 rounded-2xl p-8 hover:border-gbc-green transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gbc-green rounded-xl flex items-center justify-center">
                      <Sprout size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold font-display text-gbc-black">{t.about.sectors.operational.agriculture.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.sectors.operational.agriculture.description}
                  </p>
                </div>
                <div className="bg-gbc-yellow/5 border-2 border-gbc-yellow/20 rounded-2xl p-8 hover:border-gbc-yellow transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gbc-yellow rounded-xl flex items-center justify-center">
                      <Users size={24} className="text-gbc-black" />
                    </div>
                    <h4 className="text-xl font-bold font-display text-gbc-black">{t.about.sectors.operational.apiculture.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t.about.sectors.operational.apiculture.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Axes Stratégiques */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-12 bg-gbc-blue rounded-full"></div>
                <h3 className="text-2xl font-bold font-display text-gbc-black">
                  {t.about.sectors.strategic.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg font-sans leading-relaxed">
                {t.about.sectors.strategic.intro}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {t.about.sectors.strategic.sectors.map((sector, idx) => (
                  <div 
                    key={idx}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-gbc-blue hover:bg-gbc-blue/5 transition-all duration-300 group"
                  >
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-gbc-blue transition-colors">
                      {sector}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gbc-blue/5 border-l-4 border-gbc-blue rounded-r-xl p-6">
                <p className="text-gray-700 font-sans leading-relaxed">
                  {t.about.sectors.strategic.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 3-5 Years (Graph Placeholder) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gbc-black rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gbc-black to-gray-900 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                 <SectionTitle title={t.about.vision2025.title} subtitle={t.about.vision2025.subtitle} light />
                 <div className="hidden md:block text-right pb-16">
                    <div className="text-gbc-yellow font-bold text-xl">{t.about.vision2025.projections}</div>
                    <div className="text-gray-400 text-sm">{t.about.vision2025.projectionsDesc}</div>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                <div>
                  <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                    {t.about.vision2025.text}
                  </p>
                  <ul className="space-y-6">
                    {t.about.vision2025.goals.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 group">
                        <div className="w-3 h-3 bg-gbc-green rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-gray-200 group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CSS Bar Chart Simulation - Tech Style */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-8 flex items-center gap-3 text-white">
                    <TrendingUp size={20} className="text-gbc-green" />
                    {t.about.vision2025.chartTitle}
                  </h4>
                  <div className="flex items-end justify-between h-64 gap-4">
                    {[
                      { year: '2024', val: '30%', label: '15T' },
                      { year: '2025', val: '45%', label: '25T' },
                      { year: '2026', val: '65%', label: '45T' },
                      { year: '2027', val: '80%', label: '80T' },
                      { year: '2028', val: '100%', label: '120T' },
                    ].map((bar, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-end h-full gap-3 flex-1 group">
                        <div className="text-xs font-bold text-gbc-yellow opacity-0 group-hover:opacity-100 transition-opacity mb-1">{bar.label}</div>
                        <div className="w-full relative flex-1 flex items-end">
                            <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: bar.val }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="w-full bg-gradient-to-t from-gbc-blue to-gbc-green rounded-t-lg opacity-70 group-hover:opacity-100 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </motion.div>
                        </div>
                        <div className="text-xs text-gray-400 font-medium">{bar.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure - Management & Directions */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle title={t.about.team.title} subtitle={t.about.team.subtitle} center />
          
          {/* Management Structure - Directions avec Directeurs et Adjoints */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="p-3 bg-gbc-blue/10 rounded-xl text-gbc-blue">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gbc-black font-display">{t.about.team.administration}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {managementStructure.map((direction, idx) => {
                const IconComponent = direction.icon;
                return (
                  <motion.div
                    key={direction.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gbc-green overflow-hidden group"
                  >
                    {/* Header compact de la Direction */}
                    <div className={`${direction.color} px-3 py-2 text-white`}>
                      <div className="flex items-center gap-2">
                        <IconComponent size={16} />
                        <h4 className="text-sm font-bold font-display truncate">{direction.direction}</h4>
                      </div>
                    </div>

                    {/* Grille compacte Directeur et Adjoint */}
                    <div className="p-3">
                      <div className="grid grid-cols-2 gap-2">
                        {/* Directeur */}
                        <div className="text-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group/item">
                          <div className="relative inline-block mb-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gbc-green shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                              <img 
                                src={direction.director.image} 
                                alt={direction.director.role} 
                                className="w-full h-full object-cover" 
                                loading="lazy"
                              />
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gbc-green rounded-full border border-white flex items-center justify-center">
                              <span className="text-white text-[8px] font-bold">D</span>
                            </div>
                          </div>
                          <h5 className="font-bold text-gbc-black text-xs mb-0.5 group-hover/item:text-gbc-green transition-colors line-clamp-1">
                            {direction.director.name}
                          </h5>
                          <p className="text-[10px] text-gray-600 font-medium line-clamp-2 leading-tight mb-1">
                            {direction.director.role}
                          </p>
                          <span className="inline-block px-1.5 py-0.5 bg-gbc-green/10 text-gbc-green text-[8px] font-bold rounded">
                            {t.about.team.director}
                          </span>
                        </div>

                        {/* Adjoint */}
                        <div className="text-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group/item">
                          <div className="relative inline-block mb-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gbc-blue shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                              <img 
                                src={direction.deputy.image} 
                                alt={direction.deputy.role} 
                                className="w-full h-full object-cover" 
                                loading="lazy"
                              />
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gbc-blue rounded-full border border-white flex items-center justify-center">
                              <span className="text-white text-[8px] font-bold">A</span>
                            </div>
                          </div>
                          <h5 className="font-bold text-gbc-black text-xs mb-0.5 group-hover/item:text-gbc-blue transition-colors line-clamp-1">
                            {direction.deputy.name}
                          </h5>
                          <p className="text-[10px] text-gray-600 font-medium line-clamp-2 leading-tight mb-1">
                            {direction.deputy.role}
                          </p>
                          <span className="inline-block px-1.5 py-0.5 bg-gbc-blue/10 text-gbc-blue text-[8px] font-bold rounded">
                            {t.about.team.deputy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Technical Staff Section - Sans catégories avec chargement progressif */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="p-2 bg-gbc-green/10 rounded-full text-gbc-green">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gbc-black">{t.about.team.technical}</h3>
            </div>

            {/* Grille des membres avec animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
              {visibleTeam.map((member, idx) => {
                const memberImage = getTeamImage(member.role, member.category, member.id);
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02, duration: 0.3 }}
                    className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-50 relative group-hover:border-gbc-green transition-colors">
                      <img 
                        src={memberImage} 
                        alt={member.role} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gbc-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{t.about.team.see}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-md text-gbc-black mb-1 leading-tight group-hover:text-gbc-green transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gbc-green font-medium uppercase tracking-wide">{member.role}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Boutons Charger plus / Charger moins */}
            <div className="text-center mt-8">
              <div className="flex items-center justify-center gap-4">
                {hasLess && (
                  <motion.button
                    onClick={loadLess}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <ChevronDown size={18} className="rotate-180" />
                    <span>{t.about.team.loadLess}</span>
                  </motion.button>
                )}
                {hasMore && (
                  <motion.button
                    onClick={loadMore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gbc-green text-white font-bold rounded-xl hover:bg-gbc-blue transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <span>{t.about.team.loadMore}</span>
                    <ChevronDown size={18} className="animate-bounce" />
                  </motion.button>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {t.about.team.showing} {visibleCount} / {technicalTeam.length} {t.about.team.members}
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
