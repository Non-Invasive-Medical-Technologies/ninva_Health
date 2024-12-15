import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AuthButton } from '@/components/auth/AuthButton';
import { Lock, Heart, Activity, Shield, Award } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Advanced Health Monitoring",
      description: "Revolutionary multi-parameter health assessment powered by AI",
      icon: <Heart className="w-8 h-8 text-ninva" />
    },
    {
      title: "Medical-Grade Precision",
      description: "Professional diagnostics meeting clinical standards",
      icon: <Activity className="w-8 h-8 text-ninva" />
    },
    {
      title: "Privacy First",
      description: "Bank-grade encryption and HIPAA compliance",
      icon: <Lock className="w-8 h-8 text-ninva" />
    }
  ];

  const privacyFeatures = [
    {
      title: "End-to-End Encryption",
      description: "Your health data is encrypted at all times",
      icon: <Shield className="w-6 h-6 text-ninva" />
    },
    {
      title: "HIPAA Compliant",
      description: "Meeting highest healthcare privacy standards",
      icon: <Award className="w-6 h-6 text-ninva" />
    },
    {
      title: "Data Control",
      description: "You own and control your health data",
      icon: <Lock className="w-6 h-6 text-ninva" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/placeholder.svg" alt="Ninva Health" className="h-8 w-auto" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Privacy</Button>
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ninva/5 via-ninva/10 to-ninva/5 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-ninva/10 blur-3xl animate-pulse" />
          <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-ninva/5 blur-3xl animate-pulse delay-700" />
          <div className="absolute h-40 w-40 -bottom-10 left-20 rounded-full bg-ninva/10 blur-2xl animate-pulse delay-500" />
          
          {/* Animated Circles */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-ninva/30 animate-ping" />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-ninva/20 animate-ping delay-300" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-ninva/40 animate-ping delay-700" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-up">
                  <span className="block">Your Health Journey,</span>
                  <span className="block text-ninva">Reimagined</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-up [animation-delay:200ms]">
                  Experience professional-grade health monitoring with Kolibri. 
                  Advanced sensors combined with AI-powered analytics provide 
                  unprecedented insights into your health.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-up [animation-delay:400ms]">
                  <AuthButton />
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Medical-themed decorative illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block w-1/3 h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent z-10" />
            <img 
              src="/placeholder.svg" 
              alt="Medical Illustration" 
              className="w-full h-full object-cover object-center opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Health Monitoring
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Professional-grade diagnostics in the comfort of your home
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ninva text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Your Privacy is Our Priority
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Industry-leading security measures to protect your health data
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-ninva text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-ninva">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control</span>
            <span className="block">of your health?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-ninva-light">
            Join thousands of users who trust Ninva Health for their wellness journey.
          </p>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
