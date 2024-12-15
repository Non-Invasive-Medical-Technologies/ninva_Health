import React from 'react';
import { AuthButton } from '@/components/auth/AuthButton';

export const CTASection = () => {
  return (
    <div className="bg-ninva">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to take control</span>
          <span className="block">of your health?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-ninva-light">
          Join thousands of users who trust Ninva Health for their wellness journey.
        </p>
        <AuthButton />
      </div>
    </div>
  );
};