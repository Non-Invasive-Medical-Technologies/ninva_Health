import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, Activity, Shield, Brain, 
  Smartphone, Cloud, Lock, ArrowRight
} from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const steps = [
    {
      title: "Place Device",
      description: "Hold the Kolibri device between your palms",
      icon: Smartphone,
      animation: (
        <div className="relative h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-32 bg-medical-success rounded-lg animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <div className="w-32 h-32 rounded-full border-4 border-medical-primary animate-ping" />
          </div>
        </div>
      )
    },
    {
      title: "Measure Vitals",
      description: "Advanced sensors capture your health data",
      icon: Activity,
      animation: (
        <div className="relative h-32">
          <div className="flex items-center justify-center gap-4">
            {[Heart, Activity, Shield].map((Icon, idx) => (
              <div 
                key={idx}
                className="p-4 bg-medical-success/20 rounded-lg animate-bounce"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <Icon className="w-8 h-8 text-medical-primary" />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "AI Analysis",
      description: "Our AI processes your health data",
      icon: Brain,
      animation: (
        <div className="relative h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-16 h-16 text-medical-primary animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-medical-success/20 rounded">
                <div 
                  className="h-full bg-medical-primary rounded transition-all duration-1000"
                  style={{ width: showAnimation ? '100%' : '0%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Secure Results",
      description: "View your encrypted health insights",
      icon: Lock,
      animation: (
        <div className="relative h-32">
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 bg-medical-success/20 rounded-lg">
              <Cloud className="w-8 h-8 text-medical-primary" />
            </div>
            <ArrowRight className="w-6 h-6 text-medical-primary animate-pulse" />
            <div className="p-4 bg-medical-primary rounded-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setShowAnimation(true);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setShowAnimation(true);
    const timer = setTimeout(() => setShowAnimation(false), 2500);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const UseCases = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {[
        {
          title: "Personal Health",
          description: "Daily health monitoring and insights",
          icon: Heart,
          features: ["Vital tracking", "Health trends", "AI recommendations"]
        },
        {
          title: "Professional Care",
          description: "For healthcare providers and clinics",
          icon: Activity,
          features: ["Patient monitoring", "Clinical analytics", "Care coordination"]
        },
        {
          title: "Research & Development",
          description: "Advanced health data analysis",
          icon: Brain,
          features: ["Data collection", "Pattern analysis", "Research insights"]
        }
      ].map((useCase, idx) => (
        <Card key={idx} className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-medical-primary/5 to-medical-success/10 transform transition-transform group-hover:scale-105" />
          <CardContent className="p-6 relative">
            <div className="mb-4">
              <useCase.icon className="w-8 h-8 text-medical-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
            <p className="text-gray-600 mb-4">{useCase.description}</p>
            <ul className="space-y-2">
              {useCase.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-medical-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-medical-primary mb-4">How It Works</h2>
        <p className="text-xl text-gray-600">Simple steps to monitor your health</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {steps.map((step, idx) => (
          <Card 
            key={idx}
            className={`transition-all duration-500 ${
              activeStep === idx ? 'ring-2 ring-medical-primary shadow-lg' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <step.icon className="w-8 h-8 text-medical-primary" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{step.description}</p>
              {activeStep === idx && (
                <div className="animate-fade-in">
                  {step.animation}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <UseCases />
    </div>
  );
};

export default HowItWorksSection;