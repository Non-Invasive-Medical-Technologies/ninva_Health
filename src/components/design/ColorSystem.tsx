import React from 'react';
import { Card } from '@/components/ui/card';

const ColorSystem = () => {
  const colorCategories = [
    {
      title: "Primary Colors",
      colors: [
        { name: "medical-primary", hex: "#2B7C7E", desc: "Primary brand color" },
        { name: "medical-secondary", hex: "#4EC989", desc: "Secondary interactions" },
        { name: "medical-accent", hex: "#FFB69E", desc: "Accent elements" },
      ]
    },
    {
      title: "Status Colors",
      colors: [
        { name: "medical-success", hex: "#65C5B9", desc: "Success states" },
        { name: "medical-warning", hex: "#FFB69E", desc: "Warning states" },
        { name: "medical-error", hex: "#FF6B6B", desc: "Error states" },
        { name: "medical-info", hex: "#0474ed", desc: "Information states" },
      ]
    },
    {
      title: "Surface Colors",
      colors: [
        { name: "surface-light", hex: "#F5F9F9", desc: "Light background" },
        { name: "surface-white", hex: "#FFFFFF", desc: "White background" },
        { name: "surface-muted", hex: "#F1F5F5", desc: "Muted background" },
        { name: "surface-hover", hex: "#E6EDED", desc: "Hover state" },
      ]
    }
  ];

  const gradients = [
    { name: "Primary Gradient", class: "from-medical-primary to-medical-secondary" },
    { name: "Secondary Gradient", class: "from-medical-secondary to-medical-success" },
    { name: "Accent Gradient", class: "from-medical-accent to-medical-error" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-medical-primary mb-6">Color System</h2>
        
        {colorCategories.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.colors.map((color, colorIdx) => (
                <Card key={colorIdx} className="p-4">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-16 h-16 rounded-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-gray-600">{color.hex}</p>
                      <p className="text-sm text-gray-500">{color.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Gradients</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gradients.map((gradient, idx) => (
              <Card key={idx} className="p-4">
                <div 
                  className={`h-24 rounded-lg mb-2 bg-gradient-to-r ${gradient.class}`}
                />
                <p className="font-medium">{gradient.name}</p>
                <p className="text-sm text-gray-600">{gradient.class}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSystem;