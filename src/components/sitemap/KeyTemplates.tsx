import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const templates = [
  'Home Template',
  'Product Template',
  'Solution Template',
  'Resource Template',
  'Documentation',
  'Blog Template',
  'Account Template',
  'Support Template'
];

export const KeyTemplates = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[#26652C] mb-6">Key Page Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template, index) => (
          <Card key={index} className="bg-[#FFF8F0]">
            <CardContent className="p-4">
              <p className="font-medium text-[#26652C]">{template}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};