import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, Activity, Stethoscope, Shield, 
  ArrowRight, ChevronRight, 
  LineChart, Microscope
} from 'lucide-react';

const KolibriJourneySections = () => {
  const [activeStage, setActiveStage] = useState('detection');
  const [activeMetric, setActiveMetric] = useState('resources');

  const journeyStages = [
    {
      id: 'detection',
      title: 'Detection',
      description: 'Detect the need for medical intervention or a health checkup through the analysis of HRV, cardiac parameters, and signs indicative of various pathologies.',
      icon: <Microscope className="w-8 h-8 text-blue-500" />
    },
    {
      id: 'treatment',
      title: 'Treatment',
      description: 'Monitor the efficacy of treatment or medical interventions, providing doctors with detailed information to make more informed decisions.',
      icon: <Heart className="w-8 h-8 text-green-500" />
    },
    {
      id: 'prevention',
      title: 'Prevention',
      description: 'Monitor the progress of recovery and preempt the onset of new health pathologies through early symptom detection and lifestyle adjustments.',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    }
  ];

  const analyticsMetrics = [
    {
      id: 'resources',
      title: 'Resources',
      negative: 'Increased stress or health risks are depleting your resources, increasing the likelihood of illness.',
      positive: 'Your body has sufficient resources to maintain well-being. No immediate risks have been detected.'
    },
    {
      id: 'performance',
      title: 'Performance',
      negative: 'You are experiencing more stress than your body can handle, which may lead to burnout or other health issues if not addressed.',
      positive: 'Your cognitive performance and stress resilience are at an optimal level.'
    },
    {
      id: 'balance',
      title: 'Balance',
      negative: 'Your body is not transitioning effectively into "recovery mode," which may result in inadequate recovery and heightened stress.',
      positive: 'Your body is in a balanced state and effectively transitions into recovery mode when necessary.'
    }
  ];

  const technologyInsights = [
    {
      title: 'Lifestyle Parameters',
      description: 'Medical grade Heart Rate Variability analysis through advanced hardware and test processing methods.',
      accuracy: '95%+'
    },
    {
      title: 'Detection of Pathologies',
      description: 'Identification and classification of unique cardiac and non-cardiac pathology patterns.',
      accuracy: '70%-99%'
    },
    {
      title: 'Blood & Metabolism',
      description: 'AI-powered quantitative determination of blood and metabolism parameters (US patent 10,531,836 B2).',
      accuracy: 'Within 20%-25%'
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Journey Towards Longevity Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">JOURNEY TOWARDS LONGEVITY</h2>
          <p className="mt-4 text-xl text-blue-600">"Being there through the whole user journey"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeyStages.map((stage) => (
            <Card 
              key={stage.id}
              className={`cursor-pointer transition-all duration-300 ${
                activeStage === stage.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveStage(stage.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {stage.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {stage.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {stage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Consumer Analytics Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">CONSUMER ANALYTICS</h2>
            <p className="mt-4 text-xl text-blue-600">
              "Over 200 automated evaluation outcomes in analytics & recommendations"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsMetrics.map((metric) => (
              <Card 
                key={metric.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeMetric === metric.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveMetric(metric.id)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{metric.title}</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <p className="text-red-700">{metric.negative}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-green-700">{metric.positive}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Insights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">TECHNOLOGY INSIGHTS</h2>
          <p className="mt-4 text-xl text-blue-600">
            "The most advanced AI for Heart Activity analysis to date"
          </p>
        </div>

        <div className="space-y-8">
          {technologyInsights.map((tech, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">
                      {tech.accuracy}
                    </span>
                    <p className="text-sm text-gray-500">Accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* R&D Opportunities */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Next R&D Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Blood & Metabolism Parameters</h4>
                <p className="text-gray-600">Improve current accuracies and add new non-cardiac parameters.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Human Routine Integration</h4>
                <p className="text-gray-600">Integration with daily activities through various form factors.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Pathologies & Mental Health</h4>
                <p className="text-gray-600">Expand detection capabilities to non-cardiac pathologies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KolibriJourneySections;
