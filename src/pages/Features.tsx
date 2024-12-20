import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, Heart, Shield, Stethoscope, Brain, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { HealthcareFlowsSection } from '@/components/sections/HealthcareFlowsSection';
import { DeviceShowcase } from '@/components/sections/features/DeviceShowcase';
import { Footer } from '@/components/layout/Footer';

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
      {/* Hero Section with gradient and device showcase */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-b from-white via-ninva/5 to-transparent overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,123,120,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Advanced Features for</span>
                    <span className="block text-ninva">Modern Healthcare</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Experience the next generation of health monitoring with our comprehensive suite of features 
                    designed for both patients and healthcare providers.
                  </p>
                </div>
                <div className="relative">
                  <DeviceShowcase />
                </div>
              </div>
            </main>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

      {/* Healthcare Flows Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Experience Our Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Interactive demonstration of our healthcare platform
            </p>
          </div>
          <HealthcareFlowsSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Features;
