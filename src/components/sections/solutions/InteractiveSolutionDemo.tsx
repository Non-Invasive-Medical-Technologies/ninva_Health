import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Brain, Shield, Heart, Clock } from 'lucide-react';

export const InteractiveSolutionDemo = () => {
  const [activeSection, setActiveSection] = useState('measure');

  const steps = [
    { id: 'measure', label: 'Measure', icon: Activity },
    { id: 'analyze', label: 'Analyze', icon: Brain },
    { id: 'monitor', label: 'Monitor', icon: Shield }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-medical-success/20 rounded-3xl p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-primary mb-4">
            Experience the Difference
          </h2>
          <p className="text-gray-600">See how Ninva transforms health monitoring</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {steps.map((step) => {
            const StepIcon = step.icon;
            return (
              <button
                key={step.id}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  activeSection === step.id
                    ? 'bg-medical-primary text-white shadow-lg'
                    : 'bg-white hover:bg-medical-success/10'
                }`}
                onClick={() => setActiveSection(step.id)}
              >
                <StepIcon className={`w-8 h-8 mb-4 mx-auto ${
                  activeSection === step.id ? 'text-white' : 'text-medical-primary'
                }`} />
                <span className="font-medium">{step.label}</span>
              </button>
            );
          })}
        </div>

        <Card>
          <CardContent className="p-8">
            {activeSection === 'measure' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Easy Measurements</h3>
                  <p className="text-gray-600 mb-6">
                    Simply hold the device between your palms for 30 seconds
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-medical-success/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-medical-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Non-invasive</p>
                        <p className="text-sm text-gray-600">No blood samples needed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-medical-success/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-medical-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Quick Results</p>
                        <p className="text-sm text-gray-600">Get insights in seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-medical-primary animate-ping opacity-20" />
                  </div>
                  <div className="w-48 h-48 bg-medical-success/20 rounded-full mx-auto flex items-center justify-center">
                    <Activity className="w-24 h-24 text-medical-primary animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'analyze' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI processes multiple health parameters simultaneously
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: 'Heart Rate', value: '72 BPM' },
                      { label: 'Blood Pressure', value: '120/80' },
                      { label: 'SpO2', value: '98%' }
                    ].map((metric, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-3 bg-medical-success/10 rounded-lg"
                      >
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-bold text-medical-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Brain className="w-48 h-48 text-medical-primary mx-auto animate-pulse" />
                </div>
              </div>
            )}

            {activeSection === 'monitor' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Continuous Monitoring</h3>
                  <p className="text-gray-600 mb-6">
                    Track your health trends over time
                  </p>
                  <div className="h-48 bg-medical-success/10 rounded-lg p-4">
                    <div className="h-full flex items-center justify-center">
                      <Activity className="w-24 h-24 text-medical-primary" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    'Daily health scores',
                    'Personalized insights',
                    'Early warning system',
                    'Progress tracking'
                  ].map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-medical-success/10 rounded-lg"
                    >
                      <Shield className="w-5 h-5 text-medical-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};