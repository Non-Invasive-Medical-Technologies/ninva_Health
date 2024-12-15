import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, Heart, Shield, Stethoscope, Brain, Share2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Advanced Health Monitoring",
      description: "Professional-grade multi-parameter health assessment powered by cutting-edge sensors and AI technology.",
      icon: <Heart className="w-8 h-8 text-primary" />
    },
    {
      title: "Real-time Analytics",
      description: "Instant health data analysis with AI-powered insights for proactive health management.",
      icon: <Activity className="w-8 h-8 text-primary" />
    },
    {
      title: "Secure Data Protection",
      description: "Bank-grade encryption and HIPAA compliance ensure your health data remains private and secure.",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Telemedicine Integration",
      description: "Seamless connection with healthcare providers for virtual consultations and continuous care.",
      icon: <Stethoscope className="w-8 h-8 text-primary" />
    },
    {
      title: "AI Health Assistant",
      description: "Personalized health recommendations and insights powered by advanced machine learning.",
      icon: <Brain className="w-8 h-8 text-primary" />
    },
    {
      title: "Health Data Sharing",
      description: "Secure sharing of health data with healthcare providers and trusted family members.",
      icon: <Share2 className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Advanced Features for
              <span className="text-primary block">Modern Healthcare</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience the next generation of health monitoring with our comprehensive suite of features designed for both patients and healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;