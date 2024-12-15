import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const breakpoints = [
  { name: 'Mobile', range: '320px - 767px' },
  { name: 'Tablet', range: '768px - 1023px' },
  { name: 'Desktop', range: '1024px - 1439px' },
  { name: 'Large Desktop', range: '1440px+' }
];

export const ResponsiveBreakpoints = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[#26652C] mb-6">Responsive Breakpoints</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {breakpoints.map((breakpoint, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-medium text-[#26652C]">{breakpoint.name}</h3>
              <p className="text-sm text-gray-600">{breakpoint.range}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};