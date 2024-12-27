import React from 'react';
import { MainHero } from './home/MainHero';
import { FeatureHighlights } from './home/FeatureHighlights';
import { PrivacyFeatures } from './home/PrivacyFeatures';
import { Button } from '@/components/ui/button';

const HeroSections = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ninva-darker to-ninva">
      <MainHero />
      <FeatureHighlights />
      <PrivacyFeatures />
      
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-ninva via-ninva-secondary to-ninva">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control</span>
            <span className="block">of your health?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-ninva-light">
            Join thousands of users who trust Ninva Health for their wellness journey.
          </p>
          <Button 
            className="mt-8 w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-ninva bg-ninva-light hover:bg-white transition-colors duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;