import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Target, Heart, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <>
      <Hero 
        title="Notre Histoire & Vision" 
        subtitle="Enracinés au Congo, Ouverts sur le Monde"
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop"
      />

      {/* History & Mission */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTitle 
                title="GBC SARLU : Une force motrice pour le Nord-Kivu" 
                subtitle="Qui sommes-nous" 
              />
              <div className="space-y-6 text-gray-600 leading-relaxed font-sans text-lg">
                <p>
                  Fondée au cœur du Nord-Kivu, GBC SARLU (Green Business Congo) est née d'une conviction profonde : l'agriculture est la clé de la résilience et du développement économique de la RDC.
                </p>
                <p>
                  Face aux défis de notre région, nous avons choisi d'agir. Nous avons structuré une entreprise capable non seulement de produire, mais de transformer et de valoriser les ressources locales. Notre approche intègre l'ensemble de la chaîne de valeur, du petit producteur au consommateur final.
                </p>
                <p>
                  Aujourd'hui, GBC SARLU est un acteur reconnu dans l'apiculture moderne et l'agrobusiness, travaillant main dans la main avec les communautés locales pour un avenir durable.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <img src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?q=80&w=600&auto=format&fit=crop" alt="Champs" className="rounded-2xl shadow-card w-full h-64 object-cover" />
                <div className="bg-gbc-green/10 p-6 rounded-2xl">
                   <h4 className="font-bold text-gbc-green mb-2">100% Local</h4>
                   <p className="text-sm text-gray-600">Produit et transformé en RDC</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gbc-blue/10 p-6 rounded-2xl">
                   <h4 className="font-bold text-gbc-blue mb-2">Innovation</h4>
                   <p className="text-sm text-gray-600">Technologies modernes</p>
                </div>
                <img src="https://images.unsplash.com/photo-1471193945509-9adadd8d0jd4?q=80&w=600&auto=format&fit=crop" alt="Abeilles" className="rounded-2xl shadow-card w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle title="Nos Valeurs Fondamentales" center subtitle="Ce qui nous guide" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Target, title: "Excellence", text: "Nous visons la plus haute qualité dans chaque pot de miel et chaque récolte.", color: "text-gbc-blue" },
              { icon: Heart, title: "Communauté", text: "Le progrès n'a de sens que s'il est partagé avec nos producteurs partenaires.", color: "text-gbc-green" },
              { icon: Globe, title: "Durabilité", text: "Nous protégeons notre écosystème unique pour les générations futures.", color: "text-gbc-brown" }
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

      {/* Vision 3-5 Years (Graph Placeholder) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gbc-black rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gbc-black to-gray-900 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                 <SectionTitle title="Vision Stratégique 2025-2028" subtitle="Croissance & Impact" light />
                 <div className="hidden md:block text-right pb-16">
                    <div className="text-gbc-yellow font-bold text-xl">Projections</div>
                    <div className="text-gray-400 text-sm">Objectifs de croissance</div>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                <div>
                  <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                    Notre plan de développement sur 5 ans vise à multiplier notre impact par dix. Nous prévoyons d'étendre nos activités d'exportation et de diversifier nos unités de transformation.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "Installation d'une usine de transformation moderne (2026)",
                      "Certification Bio et Fairtrade pour l'export (2026)",
                      "Extension du réseau à 2000 apiculteurs (2027)",
                      "Lancement de la gamme cosmétique à base de miel (2028)"
                    ].map((item, idx) => (
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
                    Projection Production (Tonnes)
                  </h4>
                  <div className="flex items-end justify-between h-56 gap-4">
                    {[
                      { year: '2024', val: '30%', label: '15T' },
                      { year: '2025', val: '45%', label: '25T' },
                      { year: '2026', val: '65%', label: '45T' },
                      { year: '2027', val: '80%', label: '80T' },
                      { year: '2028', val: '100%', label: '120T' },
                    ].map((bar, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-3 flex-1 group">
                        <div className="text-xs font-bold text-gbc-yellow opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{bar.label}</div>
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: bar.val }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="w-full bg-gradient-to-t from-gbc-blue to-gbc-green rounded-t-lg opacity-70 group-hover:opacity-100 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </motion.div>
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

      {/* Team Structure */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle title="Notre Équipe de Direction" subtitle="Structure SARLU" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
            {[
              { role: "Gérant Statutaire", name: "Direction Générale", color: "border-gbc-green" },
              { role: "Resp. Opérations", name: "Département Technique", color: "border-gbc-blue" },
              { role: "Resp. Finance", name: "Administration", color: "border-gbc-yellow" },
              { role: "Coord. Apiculture", name: "Pôle Miel", color: "border-gbc-brown" },
            ].map((member, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-2xl text-center shadow-soft hover:shadow-card border-b-4 ${member.color} transition-all duration-300 hover:-translate-y-1`}>
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-sm">
                   <img src={`https://ui-avatars.com/api/?name=${member.role}&background=random&color=fff`} alt={member.role} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg text-gbc-black mb-1">{member.name}</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
