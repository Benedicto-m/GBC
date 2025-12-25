import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Leaf, Sun, Droplets, Banana, TreePine, Carrot, Flame, Cherry, Apple } from 'lucide-react';
import { banniereProductions, bananePlantain, cacaoyer, courge, piment, prune, maracuja } from '../components/img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Productions = () => {
  const { language } = useLanguage();
  
  // S'assurer que les traductions sont disponibles avec fallback
  const currentLang = language || 'fr';
  const t = (currentLang === 'en' ? en : fr);

  // Vérification de sécurité avec fallback
  const productionsData = t?.productions || {
    hero: { title: "Nos Productions Agricoles", subtitle: "La richesse de la terre du Kivu" },
    intro: { title: "Une Agriculture Régénératrice", subtitle: "Notre Approche", text: "" },
    products: {
      plantains: { name: "Bananes Plantains", desc: "" },
      cocoa: { name: "Cacaoyer", desc: "" },
      squash: { name: "Courges", desc: "" },
      pepper: { name: "Piment", desc: "" },
      plums: { name: "Prunes", desc: "" },
      passionfruit: { name: "Maracuja", desc: "" }
    },
    methods: {
      agroforestry: { title: "Agroforesterie", description: "" },
      drying: { title: "Séchage Naturel", description: "" },
      water: { title: "Gestion de l'Eau", description: "" }
    }
  };

  const products = [
    {
      name: productionsData.products.plantains?.name || "Bananes Plantains",
      desc: productionsData.products.plantains?.desc || "",
      image: bananePlantain,
      icon: Banana,
      color: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      name: productionsData.products.cocoa?.name || "Cacaoyer",
      desc: productionsData.products.cocoa?.desc || "",
      image: cacaoyer,
      icon: TreePine,
      color: "bg-amber-50",
      iconColor: "text-amber-700"
    },
    {
      name: productionsData.products.squash?.name || "Courges",
      desc: productionsData.products.squash?.desc || "",
      image: courge,
      icon: Carrot,
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      name: productionsData.products.pepper?.name || "Piment",
      desc: productionsData.products.pepper?.desc || "",
      image: piment,
      icon: Flame,
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      name: productionsData.products.plums?.name || "Prunes",
      desc: productionsData.products.plums?.desc || "",
      image: prune,
      icon: Cherry,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      name: productionsData.products.passionfruit?.name || "Maracuja",
      desc: productionsData.products.passionfruit?.desc || "",
      image: maracuja,
      icon: Apple,
      color: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <>
      <Hero 
        title={productionsData.hero.title} 
        subtitle={productionsData.hero.subtitle}
        image={banniereProductions}
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={productionsData.intro.title} 
            subtitle={productionsData.intro.subtitle} 
            center
          />
          <p className="text-center text-gray-500 max-w-3xl mx-auto mb-20 text-lg font-sans leading-relaxed">
            {productionsData.intro.text}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => {
              const IconComponent = p.icon;
              return (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300 border border-gray-100 hover:border-gbc-green">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`${p.color} rounded-full p-3 shadow-lg`}>
                        <IconComponent size={24} className={p.iconColor} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-gbc-black mb-3 group-hover:text-gbc-green transition-colors flex items-center gap-3">
                      <IconComponent size={20} className={p.iconColor} />
                      {p.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
              );
            })}
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
              <h4 className="text-xl font-bold mb-3 text-gbc-black">{productionsData.methods.agroforestry.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{productionsData.methods.agroforestry.description}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun size={40} className="text-gbc-yellow" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gbc-black">{productionsData.methods.drying.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{productionsData.methods.drying.description}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets size={40} className="text-gbc-blue" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gbc-black">{productionsData.methods.water.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{productionsData.methods.water.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productions;
