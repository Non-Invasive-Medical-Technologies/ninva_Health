import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Activity, Shield, Plus } from 'lucide-react';

const HeroSections = () => {
  // Brand tokens for consistent styling
  const brandColors = {
    primary: {
      main: '#26652C',
      light: '#8FD5CA',
      dark: '#1A5B5D',
      surface: '#F5F9F9'
    },
    gradients: {
      primary: 'bg-gradient-to-r from-emerald-700 to-teal-600',
      secondary: 'bg-gradient-to-r from-teal-100 to-emerald-100',
      surface: 'bg-gradient-to-b from-gray-50 to-teal-50'
    }
  };

  // Sample content for different pages
  const pageContent = {
    home: {
      title: "Your Health Journey, Reimagined",
      subtitle: "Advanced health monitoring with AI-powered insights for proactive wellness management",
      ctaPrimary: "Get Started",
      ctaSecondary: "Watch Demo"
    },
    product: {
      title: "Professional Grade Health Monitoring",
      subtitle: "Experience unprecedented insights with our advanced sensor technology",
      ctaPrimary: "View Features",
      ctaSecondary: "Compare Plans"
    },
    technology: {
      title: "AI-Powered Health Analytics",
      subtitle: "Cutting-edge technology for precise health monitoring and early detection",
      ctaPrimary: "Learn More",
      ctaSecondary: "See How It Works"
    }
  };

  const subPages = [
    {
      name: "Features",
      title: "Comprehensive Health Features",
      subtitle: "Discover the full capabilities of our health monitoring system"
    },
    {
      name: "Solutions",
      title: "Healthcare Solutions",
      subtitle: "Tailored monitoring solutions for every need"
    },
    {
      name: "Research",
      title: "Scientific Validation",
      subtitle: "Backed by extensive clinical research and studies"
    }
  ];

  return (
    <div className="space-y-16 p-8">
      {/* Main Hero Sections */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-emerald-800">Main Page Heroes</h2>
        
        {/* Home Hero */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4 text-emerald-700">Home Hero</h3>
          <div className={`relative min-h-[600px] ${brandColors.gradients.primary} rounded-lg overflow-hidden`}>
            <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] mix-blend-overlay opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-6">{pageContent.home.title}</h1>
                <p className="text-xl mb-8 text-white/90">{pageContent.home.subtitle}</p>
                <div className="flex gap-4">
                  <Button 
                    className="bg-white text-emerald-700 hover:bg-gray-100 hover:text-emerald-800 font-semibold px-6 py-3"
                  >
                    {pageContent.home.ctaPrimary}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3"
                  >
                    {pageContent.home.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Hero */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4 text-emerald-700">Product Hero</h3>
          <div className={`relative min-h-[500px] ${brandColors.gradients.surface} rounded-lg overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold text-emerald-700 mb-6">{pageContent.product.title}</h1>
                  <p className="text-xl text-gray-600 mb-8">{pageContent.product.subtitle}</p>
                  <div className="flex gap-4">
                    <Button 
                      className={`${brandColors.gradients.primary} text-white hover:opacity-90 font-semibold px-6 py-3`}
                    >
                      {pageContent.product.ctaPrimary}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-3"
                    >
                      {pageContent.product.ctaSecondary}
                    </Button>
                  </div>
                </div>
                <div className="relative h-96">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="Product"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Hero */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4 text-emerald-700">Technology Hero</h3>
          <div className={`relative min-h-[500px] ${brandColors.gradients.secondary} rounded-lg overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-emerald-700 mb-6">{pageContent.technology.title}</h1>
                <p className="text-xl text-gray-600 mb-8">{pageContent.technology.subtitle}</p>
                <div className="flex gap-4">
                  <Button 
                    className={`${brandColors.gradients.primary} text-white hover:opacity-90 font-semibold px-6 py-3`}
                  >
                    {pageContent.technology.ctaPrimary}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-3"
                  >
                    {pageContent.technology.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Page Heroes */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-emerald-800">Sub Page Heroes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subPages.map((page, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className={`h-48 ${brandColors.gradients.secondary} p-8 flex items-center`}>
                <div>
                  <h1 className="text-2xl font-bold text-emerald-700 mb-2">{page.title}</h1>
                  <p className="text-gray-700">{page.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Case Heroes */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-emerald-800">Special Case Heroes</h2>
        
        {/* Announcement Hero */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4 text-emerald-700">Announcement Hero</h3>
          <div className={`${brandColors.gradients.primary} text-white p-4 rounded-lg`}>
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">New</span>
                <p>Introducing AI-powered health insights</p>
              </div>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Highlight Hero */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-emerald-700">Feature Highlight Hero</h3>
          <div className={`${brandColors.gradients.surface} rounded-lg p-12`}>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Heart Health", desc: "Advanced cardiac monitoring" },
                { icon: Activity, title: "Daily Activity", desc: "Comprehensive activity tracking" },
                { icon: Shield, title: "Prevention", desc: "Early detection systems" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-emerald-700 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSections;