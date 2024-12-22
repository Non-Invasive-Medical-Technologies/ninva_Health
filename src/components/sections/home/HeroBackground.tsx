import React from 'react';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-brand-primary-main via-brand-supporting-turquoise to-brand-supporting-mint"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient-wave 15s ease infinite',
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[100px] bg-white/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  );
};