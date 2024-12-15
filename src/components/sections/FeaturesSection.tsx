import React from 'react';
import { Heart, Activity, Lock } from 'lucide-react';

const features = [
  {
    title: "Advanced Health Monitoring",
    description: "Revolutionary multi-parameter health assessment powered by AI",
    icon: <Heart className="w-8 h-8 text-ninva" />
  },
  {
    title: "Medical-Grade Precision",
    description: "Professional diagnostics meeting clinical standards",
    icon: <Activity className="w-8 h-8 text-ninva" />
  },
  {
    title: "Privacy First",
    description: "Bank-grade encryption and HIPAA compliance",
    icon: <Lock className="w-8 h-8 text-ninva" />
  }
];

export const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Health Monitoring
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Professional-grade diagnostics in the comfort of your home
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ninva text-white">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.title}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
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