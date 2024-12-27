import React from 'react';
import { Shield, Award, Lock } from 'lucide-react';

const privacyFeatures = [
  {
    title: "End-to-End Encryption",
    description: "Your health data is encrypted at all times",
    icon: <Shield className="w-6 h-6 text-ninva-light" />
  },
  {
    title: "HIPAA Compliant",
    description: "Meeting highest healthcare privacy standards",
    icon: <Award className="w-6 h-6 text-ninva-light" />
  },
  {
    title: "Data Control",
    description: "You own and control your health data",
    icon: <Lock className="w-6 h-6 text-ninva-light" />
  }
];

export const PrivacyFeatures = () => {
  return (
    <div className="bg-gradient-to-br from-ninva to-ninva-secondary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Your Privacy is Our Priority
          </h2>
          <p className="mt-4 text-lg text-ninva-light">
            Industry-leading security measures to protect your health data
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          {privacyFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ninva-tertiary group-hover:bg-ninva-secondary transition-colors duration-300">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg font-medium text-white">
                  {feature.title}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-ninva-light">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};