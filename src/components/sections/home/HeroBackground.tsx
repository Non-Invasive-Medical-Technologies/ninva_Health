import React from 'react';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-primary-main via-brand-supporting-turquoise to-brand-supporting-mint opacity-90"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-wave 15s ease infinite'
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};