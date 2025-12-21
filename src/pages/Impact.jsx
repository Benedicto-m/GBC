import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Heart, Users, TreeDeciduous } from 'lucide-react';

const Impact = () => {
  return (
    <>
      <Hero 
        title="Impact Social & Environnemental" 
        subtitle="Au-delà du profit"
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-gbc-black mb-8">Notre Modèle de Changement</h2>
            <p className="text-gray-500 text-xl font-light">
              Chaque produit GBC SARLU raconte l'histoire d'une communauté qui se relève. 
              Nous mesurons notre succès non seulement en chiffre d'affaires, mais en vies transformées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-green-50 text-gbc-green rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gbc-green group-hover:text-white transition-colors duration-300">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gbc-black">Autonomisation Économique</h3>
              <p className="text-gray-500 px-4">
                En augmentant les revenus des petits producteurs de <strong className="text-gbc-green">+40%</strong> en moyenne, nous permettons aux familles de scolariser leurs enfants et d'accéder aux soins de santé.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-yellow-50 text-gbc-yellow rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gbc-yellow group-hover:text-gbc-black transition-colors duration-300">
                <TreeDeciduous size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gbc-black">Reforestation</h3>
              <p className="text-gray-500 px-4">
                L'apiculture incite à la protection des arbres. Nous avons planté plus de <strong className="text-gbc-yellow">5,000 arbres</strong> mellifères pour soutenir nos colonies d'abeilles et lutter contre l'érosion.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-50 text-gbc-blue rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gbc-blue group-hover:text-white transition-colors duration-300">
                <Heart size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gbc-black">Inclusion des Femmes</h3>
              <p className="text-gray-500 px-4">
                <strong className="text-gbc-blue">60%</strong> de nos partenaires de transformation sont des femmes. Nous promouvons activement leur leadership au sein des coopératives agricoles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 bg-gbc-black text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-display font-medium leading-relaxed mb-10 text-gray-200">
              "Depuis que je travaille avec GBC, je ne vends plus mon miel au hasard. J'ai un partenaire fiable qui valorise mon travail et me forme pour produire mieux."
            </blockquote>
            <cite className="not-italic flex flex-col items-center gap-2">
                <span className="font-bold text-gbc-yellow text-lg">Papa X</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Apiculteur à Rutshuru</span>
            </cite>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
