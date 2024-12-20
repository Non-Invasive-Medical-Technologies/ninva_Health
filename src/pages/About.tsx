import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { AboutHeroSection } from '@/components/sections/AboutHeroSection';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <AboutHeroSection />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kolibri Health</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing personal health monitoring with advanced technology and AI-powered insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Kolibri Health, we're dedicated to transforming the way people monitor and understand their health. By combining cutting-edge technology with intuitive design, we make professional-grade health monitoring accessible to everyone.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is to empower individuals with real-time health insights, enabling proactive health management and better healthcare decisions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-ninva/10 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-ninva" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Monitoring</h3>
                  <p className="text-gray-600">Continuous health tracking with medical-grade accuracy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-ninva/10 p-3 rounded-lg">
                  <Activity className="w-6 h-6 text-ninva" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-600">Intelligent analysis of your health data for actionable recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-ninva/10 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-ninva" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="text-gray-600">Your health data is protected with bank-grade security</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Take Control of Your Health?</h2>
          <Button className="bg-ninva text-white hover:bg-ninva/90">Get Started Today</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
