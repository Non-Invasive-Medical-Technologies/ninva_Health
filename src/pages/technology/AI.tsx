import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, LineChart, Activity, Cpu } from 'lucide-react';

const AI = () => {
  const capabilities = [
    {
      title: "AI Capabilities",
      description: "State-of-the-art machine learning models for health monitoring and prediction",
      icon: <Brain className="w-6 h-6 text-primary" />
    },
    {
      title: "Data Analysis",
      description: "Advanced analytics for comprehensive health data interpretation",
      icon: <LineChart className="w-6 h-6 text-primary" />
    },
    {
      title: "Predictive Health",
      description: "Early warning systems and health trend predictions",
      icon: <Activity className="w-6 h-6 text-primary" />
    },
    {
      title: "Machine Learning",
      description: "Continuous learning algorithms for personalized healthcare",
      icon: <Cpu className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI & Analytics</h1>
          <p className="text-xl text-gray-600">
            Leveraging artificial intelligence for better healthcare outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {capability.icon}
                  </div>
                  <CardTitle>{capability.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AI;