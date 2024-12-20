import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCode, Users, Settings, Book } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';

const Integration = () => {
  const integrationFeatures = [
    {
      title: "API Documentation",
      description: "Comprehensive API documentation and usage guides",
      icon: <FileCode className="w-6 h-6 text-primary" />
    },
    {
      title: "Partner Integration",
      description: "Seamless integration with healthcare partners and providers",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Technical Specs",
      description: "Detailed technical specifications and requirements",
      icon: <Settings className="w-6 h-6 text-primary" />
    },
    {
      title: "Developer Resources",
      description: "Tools, SDKs, and resources for developers",
      icon: <Book className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration</h1>
          <p className="text-xl text-gray-600">
            Connect and extend your healthcare solutions with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrationFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integration;
