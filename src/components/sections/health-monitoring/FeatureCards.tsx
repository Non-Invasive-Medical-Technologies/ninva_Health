import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { brandColors, HealthFeature } from './types';

interface FeatureCardsProps {
  features: HealthFeature[];
  activeFeature: number;
  isMobile: boolean;
  onFeatureClick: (index: number) => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  features,
  activeFeature,
  isMobile,
  onFeatureClick
}) => {
  return (
    <section className="max-w-7xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Health Monitoring</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card 
            key={feature.id}
            className={`transform transition-all duration-300 ${
              isMobile ? 'hover:shadow-md' : 'hover:-translate-y-1 hover:shadow-xl'
            } ${activeFeature === index ? brandColors.gradients.secondary : 'bg-white'}`}
            onClick={() => onFeatureClick(index)}
          >
            <CardContent className="p-4">
              <div className={`w-12 h-12 rounded-full ${brandColors.gradients.primary} text-white flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              
              <div className="grid grid-cols-2 gap-2">
                {feature.metrics.map((metric, idx) => (
                  <div key={idx} className={`${brandColors.emerald.light} p-2 rounded`}>
                    <p className="text-xs text-gray-500">{metric.label}</p>
                    <p className="text-sm font-semibold text-emerald-700">{metric.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};