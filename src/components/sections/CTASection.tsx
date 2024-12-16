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
    <div className="bg-ninva">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to take control</span>
          <span className="block">of your health?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-ninva-light">
          Join thousands of users who trust Kolibri Health for their wellness journey.
        </p>
        <Button 
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-ninva bg-white hover:bg-ninva-light sm:w-auto"
          onClick={() => console.log('[CTASection] CTA button clicked')}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};