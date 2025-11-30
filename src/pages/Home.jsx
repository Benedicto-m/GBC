import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Users, Sprout, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero 
        title="Cultivons l'Excellence Agricole au Nord-Kivu"
        subtitle="Innovation • Durabilité • Communauté"
        image="https://placehold.co/1920x1080/1a472a/ffffff?text=Banniere+Accueil"
        height="min-h-[85vh]"
      />

      {/* Intro Section - Clean White */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gbc-green/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="GBC SARLU : Au service de la terre et des hommes"
                subtitle="Notre Mission"
              />
              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-sans">
                GBC SARLU est une entreprise agro-pastorale leader basée au Nord-Kivu, dédiée à la transformation durable de notre potentiel agricole. 
                Nous combinons savoir-faire traditionnel et technologies modernes pour produire une alimentation de qualité tout en préservant notre biodiversité unique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary shadow-lg hover:shadow-xl">
                  Découvrir notre vision
                </Link>
                <Link to="/productions" className="btn-outline">
                  Nos Productions
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gbc-blue rounded-3xl transform rotate-3 transition-transform group-hover:rotate-1 opacity-10"></div>
              <img 
                src="https://placehold.co/800x600/e2e8f0/1e293b?text=Photo+Intro+Agriculteur" 
                alt="Agriculteur au travail" 
                className="relative rounded-3xl shadow-card transform -rotate-2 transition-transform duration-500 group-hover:rotate-0 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-gbc-yellow/20 rounded-lg text-gbc-yellow">
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-gbc-black">Excellence Certifiée</span>
                </div>
                <p className="text-xs text-gray-500">Engagés pour une qualité supérieure et durable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Activities - Light Gray Background */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle 
            title="Nos Piliers d'Excellence" 
            subtitle="Ce que nous faisons" 
            center 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ProductCard 
              title="Apiculture Moderne"
              description="Production de miel de haute qualité, cire et produits dérivés. Nous formons et équipons les apiculteurs locaux pour une production respectueuse des abeilles."
              image="https://placehold.co/800x600/e2e8f0/1e293b?text=Apiculture+Miel"
              link="/apiculture"
            />
            <ProductCard 
              title="Agriculture Durable"
              description="Cultures vivrières et pérennes (Cacao, Café) gérées selon des pratiques agro-écologiques pour garantir la sécurité alimentaire et des revenus stables."
              image="https://placehold.co/800x600/e2e8f0/1e293b?text=Agriculture+Cacao"
              link="/productions"
            />
            <ProductCard 
              title="Transformation & Valeur"
              description="Unités de transformation locale pour nos produits. Création d'emplois et valorisation des récoltes sur place avant commercialisation."
              image="https://placehold.co/800x600/e2e8f0/1e293b?text=Usine+Transformation"
              link="/transformation"
            />
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
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">500+</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Agriculteurs</div>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <Sprout size={48} className="mx-auto text-gbc-yellow mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">120ha</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Terres Cultivées</div>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4"
            >
              <TrendingUp size={48} className="mx-auto text-gbc-blue mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">15T</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Production/An</div>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1] }} 
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4"
            >
              <Award size={48} className="mx-auto text-gbc-green mb-6 stroke-[1.5]" />
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">100%</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Qualité Naturelle</div>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Prêt à collaborer avec nous ?</h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto font-light">
            Que vous soyez distributeur, partenaire au développement ou investisseur, rejoignez l'aventure GBC SARLU.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gbc-yellow text-gbc-black font-bold rounded-xl hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
              Contactez-nous
            </Link>
            <Link to="/products" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gbc-blue transition-all">
              Nos Productions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
