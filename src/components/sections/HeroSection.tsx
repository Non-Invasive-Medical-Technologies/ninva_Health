import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { VideoDevice } from './hero/VideoDevice';
import { Heart, Activity, Lock, Shield, Award, Share2 } from 'lucide-react';

export const HeroSection = () => {
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
      icon: <Share2 className="w-6 h-6 text-ninva" />
    }
  ];

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Option 1: Darker gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-ninva-dark to-transparent">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left lg:flex lg:items-center lg:gap-12">
              <HeroContent />
              <VideoDevice />
            </div>
          </main>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
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
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10">
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
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10">
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
    </div>
  );
};