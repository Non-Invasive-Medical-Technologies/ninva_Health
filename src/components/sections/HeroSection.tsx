import React from 'react';
import { HeroBackground } from './home/HeroBackground';
import { HeroContent } from './home/HeroContent';
import { DeviceShowcase } from './home/DeviceShowcase';

export const HeroSection = () => {
  console.log('[HeroSection] Rendering HeroSection');

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-12 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <HeroContent />
              <DeviceShowcase />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};