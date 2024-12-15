import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Brain, Shield, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Advanced Technology</span>
                  <span className="block text-primary">for Modern Healthcare</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover how our cutting-edge technology is revolutionizing healthcare delivery through AI-powered analytics, 
                  robust security measures, and seamless integration capabilities.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/technology/ai" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Analytics</h3>
              <p className="text-gray-600">Advanced AI capabilities and predictive analytics for better health outcomes.</p>
            </div>
          </Link>
          
          <Link to="/technology/security" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Security</h3>
              <p className="text-gray-600">Enterprise-grade security and privacy measures to protect your health data.</p>
            </div>
          </Link>
          
          <Link to="/technology/integration" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Share2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integration</h3>
              <p className="text-gray-600">Seamless API integration and comprehensive developer resources.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technology;