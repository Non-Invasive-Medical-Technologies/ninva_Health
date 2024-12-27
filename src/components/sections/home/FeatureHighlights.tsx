import React from 'react';
import { Heart, Activity, Lock } from 'lucide-react';

const features = [
  {
    title: "Advanced Health Monitoring",
    description: "Revolutionary multi-parameter health assessment powered by AI",
    icon: <Heart className="w-8 h-8 text-ninva-light" />
  },
  {
    title: "Medical-Grade Precision",
    description: "Professional diagnostics meeting clinical standards",
    icon: <Activity className="w-8 h-8 text-ninva-light" />
  },
  {
    title: "Privacy First",
    description: "Bank-grade encryption and HIPAA compliance",
    icon: <Lock className="w-8 h-8 text-ninva-light" />
  }
];

export const FeatureHighlights = () => {
  return (
    <div className="bg-gradient-to-b from-ninva-darker to-ninva py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Advanced Health Monitoring
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-ninva-light lg:mx-auto">
            Professional-grade diagnostics in the comfort of your home
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ninva text-white group-hover:bg-ninva-secondary transition-colors duration-300">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg font-medium text-white">
                  {feature.title}
                </p>
                <p className="mt-2 ml-16 text-base text-ninva-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};