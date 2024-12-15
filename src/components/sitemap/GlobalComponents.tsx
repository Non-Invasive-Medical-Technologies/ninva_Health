import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const componentGroups = [
  {
    title: 'Navigation',
    items: ['Main Nav', 'Mobile Nav', 'User Menu', 'Footer']
  },
  {
    title: 'CTAs',
    items: ['Primary', 'Secondary', 'Contact Forms', 'Newsletter']
  },
  {
    title: 'Content',
    items: ['Feature Cards', 'Health Cards', 'Blog Cards', 'Team Cards']
  },
  {
    title: 'Interactive',
    items: ['AI Chat', 'Health Data', 'Device Demo', 'Integration']
  }
];

export const GlobalComponents = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[#26652C] mb-6">Global Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {componentGroups.map((group, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-[#26652C]">{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2">
                {group.items.map((item, i) => (
                  <li 
                    key={i}
                    className="p-2 bg-[#8FD5CA]/10 rounded text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};