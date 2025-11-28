import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from './img/logo.webp';

const Footer = () => {
  return (
    <footer className="bg-gbc-black text-white pt-20 pb-10 rounded-t-3xl mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="GBC Logo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-2xl text-white">
                GBC SARLU
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              L'avenir de l'agro-industrie au Nord-Kivu. Innovation technologique et respect de la terre pour une croissance durable.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-gbc-blue hover:text-white transition-all hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-gbc-green hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-gbc-blue hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-gbc-yellow">Navigation</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><Link to="/about" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> À Propos</Link></li>
              <li><Link to="/productions" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> Nos Productions</Link></li>
              <li><Link to="/apiculture" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> Apiculture</Link></li>
              <li><Link to="/impact" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> Impact Social</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-gbc-yellow">Contact</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-gbc-blue">
                   <MapPin size={18} />
                </div>
                <span>Goma, Nord-Kivu<br/>République Démocratique du Congo</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-gbc-green">
                   <Phone size={18} />
                </div>
                <span>+243 990 146 584</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-gbc-yellow">
                   <Mail size={18} />
                </div>
                <span>contact@gbc-sarlu.cd</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-gbc-yellow">Restez Informé</h3>
            <p className="text-gray-400 text-sm mb-4">Inscrivez-vous pour recevoir nos actualités et rapports d'impact.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gbc-green focus:ring-1 focus:ring-gbc-green transition-all text-sm"
              />
              <button className="w-full py-3 bg-gbc-green text-white rounded-xl font-bold text-sm hover:bg-gbc-blue transition-colors shadow-lg">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} GBC SARLU. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
