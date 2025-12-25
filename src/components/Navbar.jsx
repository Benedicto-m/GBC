import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { logo } from './img';
import { useLanguage } from '../context/LanguageContext';
import { fr } from '../translations/fr';
import { en } from '../translations/en';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  
  const translations = { fr, en };
  const t = translations[language];

  const NAVIGATION = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.productions, href: '/productions' },
    { name: t.nav.apiculture, href: '/apiculture' },
    { name: t.nav.transformation, href: '/transformation' },
    { name: t.nav.impact, href: '/impact' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 group">
              <img src={logo} alt="GBC Logo" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
                
                 <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-gbc-black tracking-tight leading-none group-hover:text-gbc-green transition-colors">
                  GBC SARLU
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-gbc-blue tracking-wide mt-0.5 leading-tight line-clamp-2 sm:line-clamp-none">
                  {t.home.hero.subtitle}
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-gbc-green bg-gbc-green/10'
                    : 'text-gray-600 hover:text-gbc-green hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Sélecteur de langue */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-gbc-gray hover:bg-gbc-green/10 rounded-xl transition-all duration-300 border border-gray-200 hover:border-gbc-green group"
              aria-label={t.common.changeLanguage}
            >
              <Languages size={18} className="text-gbc-green group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gbc-black text-sm">
                {language === 'fr' ? 'FR' : 'EN'}
              </span>
              <span className="text-gray-400">/</span>
              <span className={`font-semibold text-sm ${language === 'fr' ? 'text-gray-400' : 'text-gbc-green'}`}>
                {language === 'fr' ? 'EN' : 'FR'}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 bg-gbc-gray hover:bg-gbc-green/10 rounded-xl transition-all duration-300 border border-gray-200 hover:border-gbc-green"
              aria-label={t.common.changeLanguage}
            >
              <Languages size={18} className="text-gbc-green" />
              <span className="font-semibold text-gbc-black text-xs">
                {language === 'fr' ? 'FR' : 'EN'}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gbc-green hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">{t.common.openMenu}</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                  isActive(item.href)
                    ? 'text-gbc-green bg-gbc-green/10'
                    : 'text-gray-600 hover:text-gbc-green hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
