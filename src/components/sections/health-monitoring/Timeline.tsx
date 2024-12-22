import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { brandColors, TimelineItem } from './types';

interface TimelineProps {
  items: TimelineItem[];
  isMobile: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ items, isMobile }) => {
  return (
    <section className="max-w-7xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Daily Timeline</h2>
      
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-emerald-200"></div>
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-center ${
                isMobile ? 'ml-6' : index % 2 === 0 ? 'md:mr-1/2' : 'md:ml-1/2 md:flex-row-reverse'
              }`}
            >
              <div 
                className={`absolute ${isMobile ? 'left-0' : 'md:left-1/2'} w-4 h-4 rounded-full ${
                  item.status === 'complete' ? brandColors.emerald.default :
                  item.status === 'current' ? brandColors.peach.default :
                  'bg-gray-200'
                } transform -translate-x-1/2`}
              ></div>
              
              <Card className={`${
                item.status === 'complete' ? brandColors.gradients.secondary :
                item.status === 'current' ? brandColors.peach.light :
                'bg-white'
              } ml-4 flex-1`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">{item.time}</span>
                    {item.status === 'complete' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  <p className={`font-medium ${
                    item.status === 'current' ? 'text-orange-700' :
                    item.status === 'complete' ? 'text-emerald-700' :
                    'text-gray-600'
                  }`}>{item.event}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};