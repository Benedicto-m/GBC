import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = false, light = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            light 
              ? 'bg-white/10 text-gbc-yellow border border-white/20' 
              : 'bg-gbc-green/10 text-gbc-green border border-gbc-green/20'
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight ${
          light ? 'text-white' : 'text-gbc-black'
        }`}
      >
        {title}
      </motion.h2>
      
      {/* Decorative Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`h-1.5 rounded-full mt-6 bg-gbc-blue ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;
