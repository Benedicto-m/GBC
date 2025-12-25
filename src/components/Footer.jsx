import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from './img/logo.webp';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Footer = () => {
  const { language } = useLanguage();
  const translations = { fr, en };
  const t = translations[language];
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
              {t.footer.description}
            </p>
            <div className="flex space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-xl hover:bg-[#1877F2] hover:text-white transition-all hover:-translate-y-1">
                <FaFacebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-all hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-xl hover:bg-[#0077B5] hover:text-white transition-all hover:-translate-y-1">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-gbc-yellow">{t.footer.navigation}</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><Link to="/about" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t.footer.about}</Link></li>
              <li><Link to="/productions" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t.footer.productions}</Link></li>
              <li><Link to="/apiculture" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t.footer.apiculture}</Link></li>
              <li><Link to="/impact" className="hover:text-gbc-green transition-colors flex items-center gap-2"><ArrowRight size={14}/> {t.footer.socialImpact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-gbc-yellow">{t.footer.contactTitle}</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-gbc-blue">
                   <MapPin size={18} />
                </div>
                <span className="whitespace-pre-line">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-gbc-green">
                   <Phone size={18} />
                </div>
                <a href="tel:+243985727861" className="hover:text-gbc-green transition-colors">+243985727861</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-[#25D366]">
                   <FaWhatsapp size={18} />
                </div>
                <a 
                  href="https://wa.me/243985727861" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-gbc-yellow">
                   <Mail size={18} />
                </div>
                <a href="mailto:contact@gbc-sarlu.cd" className="hover:text-gbc-green transition-colors">contact@gbc-sarlu.cd</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-gbc-yellow">{t.footer.stayInformed}</h3>
            <p className="text-gray-400 text-sm mb-4">{t.footer.newsletterText}</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder={t.footer.emailPlaceholder} 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gbc-green focus:ring-1 focus:ring-gbc-green transition-all text-sm"
              />
              <button className="w-full py-3 bg-gbc-green text-white rounded-xl font-bold text-sm hover:bg-gbc-blue transition-colors shadow-lg">
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} GBC SARLU. {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
