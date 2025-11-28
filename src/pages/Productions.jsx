import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Leaf, Sun, Droplets } from 'lucide-react';

const Productions = () => {
  const products = [
    {
      name: "Cacao Premium",
      desc: "Cultivé sous ombrage forestier, notre cacao développe des arômes riches et complexes, typiques du terroir volcanique.",
      image: "https://images.unsplash.com/photo-1598514936302-6029285743c7?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Café Arabica",
      desc: "Des grains d'altitude récoltés à la main à pleine maturité, offrant une tasse équilibrée aux notes fruitées.",
      image: "https://images.unsplash.com/photo-1552346989-e069318e20a5?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Cultures Vivrières",
      desc: "Maïs, Haricot et Soja produits pour renforcer la sécurité alimentaire locale avec des semences résilientes.",
      image: "https://images.unsplash.com/photo-1634467524884-897d0af5e08e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Hero 
        title="Nos Productions Agricoles" 
        subtitle="La richesse de la terre du Kivu"
        image="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Une Agriculture Régénératrice" 
            subtitle="Notre Approche" 
            center
          />
          <p className="text-center text-gray-500 max-w-3xl mx-auto mb-20 text-lg font-sans leading-relaxed">
            Chez GBC SARLU, nous ne nous contentons pas de récolter. Nous nourrissons le sol qui nous nourrit. 
            Nos pratiques agro-écologiques garantissent des produits sains tout en préservant la fertilité des terres volcaniques du Nord-Kivu pour les générations futures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-2xl p-4 hover:shadow-card transition-shadow duration-300 border border-gray-50">
                <div className="overflow-hidden rounded-xl mb-6 shadow-sm h-64 relative">
                  <div className="absolute inset-0 bg-gbc-black/20 group-hover:bg-transparent transition-colors z-10"/>
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-gbc-black mb-3 group-hover:text-gbc-green transition-colors">{p.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf size={40} className="text-gbc-green" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gbc-black">Agroforesterie</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Association d'arbres et de cultures pour la biodiversité.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun size={40} className="text-gbc-yellow" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gbc-black">Séchage Naturel</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Procédés solaires pour préserver les qualités organoleptiques.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets size={40} className="text-gbc-blue" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gbc-black">Gestion de l'Eau</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Irrigation raisonnée et protection des bassins versants.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productions;
