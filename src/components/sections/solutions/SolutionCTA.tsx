import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const SolutionCTA = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-medical-primary to-medical-secondary rounded-3xl transform -skew-y-2" />
      <div className="relative z-10 text-center py-16 px-8">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to transform your health monitoring?
        </h2>
        <Button 
          variant="secondary"
          className="bg-white text-medical-primary hover:bg-medical-success/20"
        >
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};