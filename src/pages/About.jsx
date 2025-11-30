import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Target, Heart, Globe, TrendingUp, User, Users } from 'lucide-react';

const About = () => {
  // Données pour l'Administration
  const administrationTeam = [
    { role: "Directeur Général", name: "Nom du Directeur", placeholder: "DG" },
    { role: "Directeur Financier", name: "Nom du DAF", placeholder: "Finance" },
    { role: "Secrétaire Administratif", name: "Nom Secrétaire", placeholder: "Admin" },
    { role: "Resp. Ressources Humaines", name: "Nom RH", placeholder: "RH" },
    { role: "Resp. Commercial", name: "Nom Commercial", placeholder: "Vente" },
  ];

  // Données pour les Ouvriers et le Staff Technique
  const technicalTeam = [
    { role: "Chef d'Exploitation", name: "Nom du Chef", placeholder: "Chef Exp" },
    { role: "Responsable Apiculture", name: "Nom Resp.", placeholder: "Api" },
    { role: "Responsable Agriculture", name: "Nom Resp.", placeholder: "Agri" },
    { role: "Technicien de Transformation", name: "Nom Tech", placeholder: "Tech 1" },
    { role: "Technicien de Transformation", name: "Nom Tech", placeholder: "Tech 2" },
    { role: "Ouvrier Agricole", name: "Nom Ouvrier", placeholder: "Ouvrier 1" },
    { role: "Ouvrier Agricole", name: "Nom Ouvrier", placeholder: "Ouvrier 2" },
    { role: "Ouvrier Agricole", name: "Nom Ouvrier", placeholder: "Ouvrier 3" },
    { role: "Chauffeur / Logistique", name: "Nom Staff", placeholder: "Logistique" },
    { role: "Sécurité", name: "Nom Staff", placeholder: "Sécurité" },
  ];

  return (
    <>
      <Hero 
        title="Notre Histoire & Vision" 
        subtitle="Enracinés au Congo, Ouverts sur le Monde"
        image="https://placehold.co/1920x1080/1a472a/ffffff?text=Image+Hero+A+Propos"
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
                  Fondée au cœur du Nord-Kivu, GBC SARLU (Global BINYAVANGA COMPANY) est née d'une conviction profonde : l'agriculture est la clé de la résilience et du développement économique de la RDC.
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
                <div className="relative overflow-hidden rounded-2xl shadow-card h-64 w-full bg-gray-200 group">
                  <img src="https://placehold.co/600x800/e2e8f0/1e293b?text=Image+Champs" alt="Champs" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white font-bold">Remplacer Image</div>
                </div>
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
                <div className="relative overflow-hidden rounded-2xl shadow-card h-64 w-full bg-gray-200 group">
                  <img src="https://placehold.co/600x800/e2e8f0/1e293b?text=Image+Abeilles" alt="Abeilles" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white font-bold">Remplacer Image</div>
                </div>
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

      {/* Team Structure - Administration */}
      <section className="py-24 bg-gbc-gray">
        <div className="container-custom">
          <SectionTitle title="Organigramme & Équipe" subtitle="Notre Force Humaine" center />
          
          {/* Administration Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="p-2 bg-gbc-blue/10 rounded-full text-gbc-blue">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gbc-black">Administration & Direction</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {administrationTeam.map((member, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl text-center shadow-soft hover:shadow-card border-b-4 border-gbc-blue transition-all duration-300 hover:-translate-y-1">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-sm relative group">
                     <img 
                      src={`https://placehold.co/400x400/e2e8f0/1e293b?text=${member.placeholder}`} 
                      alt={member.role} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
                      Modifier
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-gbc-black mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Staff Section */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="p-2 bg-gbc-green/10 rounded-full text-gbc-green">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gbc-black">Personnel Technique & Ouvriers</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technicalTeam.map((member, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-50 relative group">
                     <img 
                      src={`https://placehold.co/200x200/f1f5f9/475569?text=${member.placeholder}`} 
                      alt={member.role} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    />
                  </div>
                  <h4 className="font-bold text-md text-gbc-black mb-1 leading-tight">{member.name}</h4>
                  <p className="text-xs text-gbc-green font-medium uppercase tracking-wide">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
