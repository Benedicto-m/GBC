import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Settings, Package, Truck } from 'lucide-react';

const Transformation = () => {
  return (
    <>
      <Hero 
        title="Transformation & Valorisation" 
        subtitle="Créer de la valeur locale"
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="L'Industrialisation Rurale" 
            subtitle="Notre Démarche" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="text-gray-500 space-y-6 text-lg font-sans">
              <p>
                L'exportation de matières premières brutes a longtemps été un frein au développement économique de la RDC. GBC SARLU change la donne en investissant dans des unités de transformation locales.
              </p>
              <p>
                En transformant nos produits sur place, nous :
              </p>
              <ul className="space-y-4 ml-2">
                {[
                  "Créons des emplois qualifiés en zone rurale.",
                  "Réduisons les pertes post-récolte.",
                  "Garantissons une meilleure rémunération aux producteurs.",
                  "Offrons des produits finis de qualité supérieure."
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gbc-blue rounded-full"></div>
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1597528662465-58cafb67460c?q=80&w=800&auto=format&fit=crop" 
                alt="Usine de transformation" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-gbc-green transition-colors group">
              <Settings className="w-14 h-14 text-gbc-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-4 text-gbc-black">Unités de Traitement</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Stations de lavage de café et centres de fermentation de cacao équipés pour assurer une qualité constante.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-gbc-blue transition-colors group">
              <Package className="w-14 h-14 text-gbc-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-4 text-gbc-black">Conditionnement</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lignes d'emballage modernes respectant les normes d'hygiène internationales pour le miel et les produits secs.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-gbc-yellow transition-colors group">
              <Truck className="w-14 h-14 text-gbc-yellow mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-4 text-gbc-black">Logistique</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Flotte de transport adaptée aux terrains difficiles pour acheminer les produits des zones reculées vers les centres urbains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transformation;
