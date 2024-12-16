import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { VideoDevice } from './hero/VideoDevice';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Option 1: Darker gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-ninva-dark to-transparent">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Option 2: Lighter gradient (comment out Option 1 and uncomment this for lighter version) */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-ninva-light via-white/50 to-transparent">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div> */}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-32 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left lg:flex lg:items-center lg:gap-12">
              <HeroContent />
              <VideoDevice />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};