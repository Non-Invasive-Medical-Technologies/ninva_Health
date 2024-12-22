import React from 'react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  console.log('[CTASection] Rendering CTASection');

  React.useEffect(() => {
    console.log('[CTASection] Component mounted');
    return () => {
      console.log('[CTASection] Component unmounted');
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-brand-primary-main via-brand-supporting-turquoise to-brand-supporting-mint">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-display-lg font-display font-bold text-white sm:text-display-xl">
          <span className="block">Ready to take control</span>
          <span className="block">of your health?</span>
        </h2>
        <p className="mt-4 text-body-lg font-text text-white/90">
          Join thousands of users who trust Ninva Health for their wellness journey.
        </p>
        <Button 
          className="mt-8 w-full sm:w-auto bg-white hover:bg-white/90 text-brand-primary-main font-semibold px-8 py-6"
          size="lg"
          onClick={() => console.log('[CTASection] CTA button clicked')}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};