import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './img/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Productions', href: '/productions' },
    { name: 'Apiculture', href: '/apiculture' },
    { name: 'Transformation', href: '/transformation' },
    { name: 'Impact', href: '/impact' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img src={logo} alt="GBC Logo" className="h-12 w-auto object-contain" />
                
                 <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-gbc-black tracking-tight leading-none group-hover:text-gbc-green transition-colors">
                  GBC SARLU
                </span>
                <span className="text-[10px] font-medium text-gbc-blue tracking-widest uppercase mt-0.5">
                  Agribusiness & Innovation
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
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
            <Link 
              to="/contact"
              className="ml-6 px-6 py-2.5 bg-gbc-blue text-white rounded-xl text-sm font-bold hover:bg-gbc-green transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
            >
              Rejoindre
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gbc-green hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
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
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-3 bg-gbc-blue text-white rounded-xl font-bold hover:bg-gbc-green transition-colors"
            >
              Nous Rejoindre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
