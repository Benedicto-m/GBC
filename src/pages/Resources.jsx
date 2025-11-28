import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { FileText, Download, BookOpen } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Catalogue Produits 2024",
      type: "PDF",
      size: "2.4 MB",
      desc: "Découvrez notre gamme complète de miels, cafés et produits dérivés avec tarifs pro.",
      icon: BookOpen,
      color: "bg-gbc-blue"
    },
    {
      title: "Rapport d'Impact Annuel",
      type: "PDF",
      size: "5.1 MB",
      desc: "Analyse détaillée de nos retombées sociales, économiques et environnementales au Nord-Kivu.",
      icon: FileText,
      color: "bg-gbc-green"
    },
    {
      title: "Guide de l'Apiculteur Débutant",
      type: "PDF",
      size: "1.8 MB",
      desc: "Ressource technique gratuite pour nos partenaires souhaitant se lancer dans l'apiculture.",
      icon: FileText,
      color: "bg-gbc-yellow"
    }
  ];

  return (
    <>
      <Hero 
        title="Ressources & Documentation" 
        subtitle="S'informer et Apprendre"
        image="https://images.unsplash.com/photo-1456324854829-25bf18add190?q=80&w=1920&auto=format&fit=crop"
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
                  Télécharger <span className="text-gray-400 ml-1 font-normal normal-case">({res.size})</span>
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
