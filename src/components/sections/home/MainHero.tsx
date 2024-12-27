import React from 'react';
import { Button } from '@/components/ui/button';

export const MainHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-ninva to-ninva-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Your Health Journey,</span>
                <span className="block bg-gradient-to-r from-ninva-light via-ninva-tertiary to-ninva-light bg-clip-text text-transparent animate-gradient-flow">
                  Reimagined
                </span>
              </h1>
              <p className="mt-3 text-base text-ninva-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience professional-grade health monitoring with Kolibri. 
                Advanced sensors combined with AI-powered analytics provide 
                unprecedented insights into your health.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button 
                  className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-ninva bg-ninva-light hover:bg-white transition-colors duration-300"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-ninva-light border-ninva-light hover:bg-ninva-light/10 transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};