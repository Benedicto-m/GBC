import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle } from 'lucide-react';

const Apiculture = () => {
  return (
    <>
      <Hero 
        title="L'Excellence Apicole" 
        subtitle="L'Or Liquide du Kivu"
        image="https://placehold.co/1920x1080/1a472a/ffffff?text=Banniere+Apiculture"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle title="Un Miel Pur et Authentique" subtitle="Notre Passion" />
              <p className="text-gray-500 text-lg mb-8 font-sans leading-relaxed">
                L'apiculture est au cœur de l'identité de GBC SARLU. Nous valorisons la flore exceptionnelle du Nord-Kivu à travers une production de miel respectueuse des abeilles et de l'environnement.
              </p>
              <p className="text-gray-500 mb-10 font-sans">
                Nos ruches sont installées dans des zones préservées, loin de toute pollution, garantissant un miel "Toutes Fleurs" et "Acacia" d'une pureté absolue, sans ajout ni chauffage excessif.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Miel Toutes Fleurs', 'Cire d\'Abeille', 'Propolis', 'Formation Apicole'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gbc-yellow transition-colors">
                    <CheckCircle size={24} className="text-gbc-yellow flex-shrink-0" />
                    <span className="font-bold text-gbc-black text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-gbc-yellow/10 rounded-full blur-3xl"></div>
              <div className="relative group rounded-2xl overflow-hidden mt-12 shadow-lg h-64 w-full">
                 <img src="https://placehold.co/600x800/e2e8f0/1e293b?text=Ruches" alt="Ruches" className="relative z-10 w-full h-full object-cover" />
              </div>
              <div className="relative group rounded-2xl overflow-hidden shadow-lg h-64 w-full">
                <img src="https://placehold.co/600x800/e2e8f0/1e293b?text=Pot+Miel" alt="Pot de miel" className="relative z-10 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-gbc-gray relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionTitle title="De la Fleur au Pot" subtitle="Notre Processus Qualité" center />
          
          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gbc-yellow/20 via-gbc-yellow to-gbc-yellow/20 -z-10 hidden md:block transform -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { step: "01", title: "Installation", text: "Ruches modernes Kenyan Top Bar" },
                { step: "02", title: "Butinage", text: "Flore sauvage et préservée" },
                { step: "03", title: "Récolte", text: "Extraction à froid par gravité" },
                { step: "04", title: "Conditionnement", text: "Filtrage simple et mise en pot" },
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="w-16 h-16 bg-gbc-yellow text-gbc-black rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-6 border-4 border-white shadow-md relative z-10">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-gbc-black">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apiculture;
