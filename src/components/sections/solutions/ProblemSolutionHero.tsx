import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export const ProblemSolutionHero = () => {
  const problems = [
    'Multiple doctor visits',
    'Invasive blood tests',
    'Delayed results',
    'Disconnected data'
  ];

  const solutions = [
    'Non-invasive measurements',
    'Instant health insights',
    'Continuous monitoring',
    'AI-powered analysis'
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-medical-primary">Traditional health monitoring</span>
          <br />is time-consuming and complex
        </h2>
        <div className="space-y-4 mb-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-600">
              <Clock className="w-5 h-5 text-medical-error" />
              <span>{problem}</span>
            </div>
          ))}
        </div>
        <div className="h-px bg-gradient-to-r from-medical-primary to-transparent mb-8" />
        <h3 className="text-2xl font-bold mb-6">
          We make it <span className="text-medical-primary">simple</span>
        </h3>
        <div className="space-y-4">
          {solutions.map((solution, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-medical-success" />
              <span>{solution}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-primary/5 to-medical-success/10 rounded-3xl" />
        <img 
          src="/lovable-uploads/2afd0ae0-a1fa-4901-8295-713b02a4b474.png" 
          alt="Health Monitoring" 
          className="rounded-3xl shadow-lg relative z-10"
        />
      </div>
    </section>
  );
};