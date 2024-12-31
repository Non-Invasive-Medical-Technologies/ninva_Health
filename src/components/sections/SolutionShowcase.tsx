import React from 'react';
import { ProblemSolutionHero } from './solutions/ProblemSolutionHero';
import { InteractiveSolutionDemo } from './solutions/InteractiveSolutionDemo';
import { SolutionCTA } from './solutions/SolutionCTA';

const SolutionShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-24">
      <ProblemSolutionHero />
      <InteractiveSolutionDemo />
      <SolutionCTA />
    </div>
  );
};

export default SolutionShowcase;