import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, FileCheck, Database } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      title: "Security Measures",
      description: "Enterprise-grade security infrastructure and protocols",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "Privacy Policy",
      description: "Comprehensive data privacy framework and user rights",
      icon: <Lock className="w-6 h-6 text-primary" />
    },
    {
      title: "HIPAA Compliance",
      description: "Full compliance with healthcare data protection standards",
      icon: <FileCheck className="w-6 h-6 text-primary" />
    },
    {
      title: "Data Protection",
      description: "Advanced encryption and secure data storage solutions",
      icon: <Database className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Security</h1>
          <p className="text-xl text-gray-600">
            Protecting your health data with industry-leading security measures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
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
    </div>
  );
};

export default Security;