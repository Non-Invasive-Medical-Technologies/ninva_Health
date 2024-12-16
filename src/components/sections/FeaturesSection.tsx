import React from 'react';
import { Dna, Microscope, Brain } from 'lucide-react';

const features = [
  {
    title: "Personalized Health Solutions",
    description: "Tailored healthcare monitoring for your unique needs",
    icon: <Dna className="w-8 h-8 text-ninva" />,
    number: "01"
  },
  {
    title: "Precision And Accuracy",
    description: "Medical-grade diagnostics with proven reliability",
    icon: <Microscope className="w-8 h-8 text-ninva" />,
    number: "02"
  },
  {
    title: "Scientific Innovation",
    description: "Cutting-edge technology for better health outcomes",
    icon: <Brain className="w-8 h-8 text-ninva" />,
    number: "03"
  }
];

export const FeaturesSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-ninva/10 rounded-lg">
                  {feature.icon}
                </div>
                <span className="text-4xl font-light text-gray-200">
                  {feature.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-ninva hover:text-ninva-dark transition-colors"
              >
                Learn more 
                <svg 
                  className="w-4 h-4 ml-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};