import React from 'react';
import { Button } from '@/components/ui/button';
import { AuthButton } from '@/components/auth/AuthButton';

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-ninva/5 via-ninva/10 to-ninva/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-ninva/10 blur-3xl animate-pulse" />
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-ninva/5 blur-3xl animate-pulse delay-700" />
        <div className="absolute h-40 w-40 -bottom-10 left-20 rounded-full bg-ninva/10 blur-2xl animate-pulse delay-500" />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-ninva/30 animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-ninva/20 animate-ping delay-300" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-ninva/40 animate-ping delay-700" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-up">
                <span className="block">Your Health Journey,</span>
                <span className="block text-ninva">Reimagined</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-up [animation-delay:200ms]">
                Experience professional-grade health monitoring with Kolibri. 
                Advanced sensors combined with AI-powered analytics provide 
                unprecedented insights into your health.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-up [animation-delay:400ms]">
                <AuthButton />
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};