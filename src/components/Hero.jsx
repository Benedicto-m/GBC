import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ title, image, height = "min-h-[50vh]" }) => {
  return (
    <div className={`relative w-full ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image - Using img tag for better quality control and dimensions */}
      <img 
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      
      {/* Modern Gradient Overlay: Blue Energy to Green Banana - Lighter for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-gbc-black/40 via-gbc-black/30 to-gbc-green/20 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
          
          {/* Decorative element */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-2 w-24 bg-gradient-to-r from-gbc-green to-gbc-blue rounded-full origin-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
