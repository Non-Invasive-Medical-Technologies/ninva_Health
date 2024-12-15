import React from 'react';
import { Shield, Award, Lock } from 'lucide-react';

const privacyFeatures = [
  {
    title: "End-to-End Encryption",
    description: "Your health data is encrypted at all times",
    icon: <Shield className="w-6 h-6 text-ninva" />
  },
  {
    title: "HIPAA Compliant",
    description: "Meeting highest healthcare privacy standards",
    icon: <Award className="w-6 h-6 text-ninva" />
  },
  {
    title: "Data Control",
    description: "You own and control your health data",
    icon: <Lock className="w-6 h-6 text-ninva" />
  }
];

export const PrivacySection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Your Privacy is Our Priority
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Industry-leading security measures to protect your health data
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          {privacyFeatures.map((feature, index) => (
            <div key={index} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ninva text-white">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.title}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};