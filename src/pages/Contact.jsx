import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Hero 
        title="Contactez-nous" 
        subtitle="Démarrons une conversation"
        image="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1920&auto=format&fit=crop"
        height="min-h-[60vh]"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <div>
              <SectionTitle title="Nos Coordonnées" subtitle="Restons en contact" />
              <p className="text-gray-500 mb-12 text-lg font-sans">
                Vous avez une question sur nos produits ? Vous souhaitez devenir partenaire ou distributeur ? 
                N'hésitez pas à nous contacter ou à nous rendre visite à nos bureaux de Goma.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gbc-green/10 text-gbc-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbc-green group-hover:text-white transition-colors shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">Notre Siège</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Quartier Les Volcans, Av. des Ronds Points<br/>
                      Goma, Nord-Kivu, RDC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gbc-blue/10 text-gbc-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbc-blue group-hover:text-white transition-colors shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">Téléphone</h4>
                    <p className="text-gray-500">+243 999 000 000</p>
                    <p className="text-gray-500">+243 810 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gbc-yellow/10 text-gbc-yellow rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbc-yellow group-hover:text-white transition-colors shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">Email</h4>
                    <p className="text-gray-500">info@gbc-sarlu.cd</p>
                    <p className="text-gray-500">sales@gbc-sarlu.cd</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 group-hover:text-white transition-colors shadow-sm">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gbc-black text-xl mb-2">Heures d'ouverture</h4>
                    <p className="text-gray-500">Lundi - Vendredi: 8h00 - 17h00</p>
                    <p className="text-gray-500">Samedi: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-3xl shadow-card border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-gbc-black mb-8">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gbc-black mb-2">Nom</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gbc-black mb-2">Prénom</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all" placeholder="Votre prénom" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gbc-black mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all" placeholder="exemple@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gbc-black mb-2">Sujet</label>
                  <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all">
                    <option>Demande d'information</option>
                    <option>Partenariat / Distribution</option>
                    <option>Commande</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gbc-black mb-2">Message</label>
                  <textarea rows="5" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gbc-green focus:border-transparent outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 px-8 py-4 bg-gbc-green text-white font-bold rounded-xl hover:bg-gbc-black transition-colors shadow-lg">
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

