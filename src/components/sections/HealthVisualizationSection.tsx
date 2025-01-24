import React from 'react';
import { motion } from 'framer-motion';

export const HealthVisualizationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Advanced Health Monitoring
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Real-time health tracking across all your devices
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-[85%] mx-auto" // Using 85% of the container width for a size between previous and current
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-3xl" />
          <img
            src="/lovable-uploads/1b5b5e2e-f063-4f7c-88fd-e25368ec804e.png"
            alt="Kolibri Health App Interface"
            className="w-full h-auto object-contain relative z-10 rounded-lg"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
              maxHeight: '450px' // Adjusted maxHeight to be proportional to the new width
            }}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Monitor your heart health, track diagnostics, and connect with healthcare professionals
            all from your smartphone or smartwatch
          </p>
        </motion.div>
      </div>
    </section>
  );
};