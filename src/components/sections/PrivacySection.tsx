import React from 'react';
import { Shield, Award, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const PrivacySection = () => {
  const privacyFeatures = [
    {
      title: "End-to-End Encryption",
      description: "Your health data is encrypted at all times",
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: "HIPAA Compliant",
      description: "Meeting highest healthcare privacy standards",
      icon: <Award className="w-6 h-6 text-green-500" />
    },
    {
      title: "Data Control",
      description: "You own and control your health data",
      icon: <Lock className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            Your Privacy is Our Priority
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Industry-leading security measures to protect your health data
          </p>
        </motion.div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          {privacyFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <dt>
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <p className="ml-3 text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </p>
                </div>
              </dt>
              <dd className="text-base text-gray-500">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};