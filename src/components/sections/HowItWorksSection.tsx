import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Smartphone, 
  Cloud, 
  Heart,
  CheckCircle2,
  Activity
} from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Device Reading",
      description: "Hold the Kolibri device between your palms for 1-5 minutes in a relaxed position",
      icon: <Heart className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Data Processing",
      description: "The device transmits your health data securely to our app",
      icon: <Activity className="w-8 h-8 text-green-500" />
    },
    {
      title: "Analysis & Results",
      description: "Advanced AI analyzes your data and provides detailed health insights",
      icon: <Cloud className="w-8 h-8 text-purple-500" />
    }
  ];

  const appFeatures = [
    {
      title: "Results Display",
      description: "Clear visualization of your health metrics and trends",
      icon: <Activity className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Health Guidance",
      description: "Personalized recommendations based on your results",
      icon: <Heart className="h-6 w-6 text-green-500" />
    },
    {
      title: "Professional Consultation",
      description: "Connect with healthcare providers for expert advice",
      icon: <CheckCircle2 className="h-6 w-6 text-purple-500" />
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            KOLIBRI: HOW IT WORKS
          </h2>
          <p className="mt-4 text-xl text-blue-600 italic">
            "A simple process that guarantees remarkable results."
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 ${
                activeStep === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Diagram */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Device Image */}
            <div className="flex-shrink-0">
              <img 
                src="/api/placeholder/200/150" 
                alt="Kolibri Device" 
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Flow Arrows */}
            <div className="flex-grow">
              <div className="relative h-2 bg-blue-100 rounded">
                <div 
                  className="absolute h-2 bg-blue-500 rounded transition-all duration-500"
                  style={{ width: `${(activeStep + 1) * 33.33}%` }}
                />
              </div>
            </div>

            {/* Mobile App */}
            <div className="flex-shrink-0">
              <img 
                src="/api/placeholder/100/200" 
                alt="Mobile App" 
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Cloud Server */}
            <div className="flex-shrink-0">
              <Cloud className="w-16 h-16 text-blue-500" />
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Features of the Mobile App
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="bg-blue-600 text-white">
            Learn More About Kolibri
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
