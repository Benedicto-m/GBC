import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="card-base h-full flex flex-col group overflow-hidden bg-white"
    >
      <div className="h-56 overflow-hidden relative">
        {/* Placeholder overlay for images */}
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gbc-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-30">
        <h3 className="text-2xl font-display font-bold text-gbc-black mb-3 group-hover:text-gbc-green transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 mb-6 flex-grow leading-relaxed font-sans">
          {description}
        </p>
        <Link 
          to={link} 
          className="inline-flex items-center text-sm font-bold text-gbc-blue group-hover:text-gbc-green transition-colors uppercase tracking-wide"
        >
          Découvrir <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default React.memo(ProductCard);
