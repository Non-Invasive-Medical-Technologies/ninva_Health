import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-medical-primary/5 to-surface-light">
        {/* Animated circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-medical-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-medical-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-medical-accent/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(43, 124, 126, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} />

        {/* Diagnostic lines */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [-100, 100, -100]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-medical-primary/30 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [100, -100, 100]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-medical-secondary/30 to-transparent"
        />

        {/* Analysis points */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-3 rounded-full bg-medical-primary/30"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};