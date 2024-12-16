import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, CheckCircle2, Clock } from 'lucide-react';

const KolibriBusinessSections = () => {
  const [activeMarketSegment, setActiveMarketSegment] = useState('lifestyle');

  const competitiveFeatures = [
    {
      category: "Core Capabilities",
      features: [
        { name: "ECG Parameters", value: "10", isUnique: true },
        { name: "HRV Parameters", value: "YES", isUnique: true },
        { name: "Clinical grade HRV", value: "YES", isUnique: true },
        { name: "Pathologies", value: "20", isUnique: true }
      ]
    },
    {
      category: "Advanced Features",
      features: [
        { name: "Signal quality analysis", value: "YES", isUnique: true },
        { name: "Early stage risk identification", value: "YES", isUnique: true },
        { name: "CBC Blood & Metabolism", value: "16", isUnique: true },
        { name: "Mental health analysis", value: "YES", isUnique: true }
      ]
    },
    {
      category: "User Experience",
      features: [
        { name: "Test time", value: "1-5 Min", isUnique: true },
        { name: "App based", value: "YES", standard: true },
        { name: "Remote monitoring", value: "YES", standard: true }
      ]
    }
  ];

  const marketSegments = [
    {
      id: 'lifestyle',
      title: 'Health Control/Sport & Wellness',
      timeframe: 'Short term',
      profile: {
        age: '30-55',
        characteristics: [
          'Career focused',
          'Active lifestyle: sport, diet, wellness activities',
          'Use health tracking devices',
          'Beginning to experience minor health issues'
        ]
      },
      strategy: {
        marketing: [
          'Direct-to-consumer approach',
          'SME advertisement campaigns',
          'Medical & Lifestyle influencers'
        ],
        distribution: [
          'Ecommerce',
          'Business social packages',
          'Consumer retailers'
        ]
      }
    },
    {
      id: 'medical',
      title: 'Diabetes type 2/CVD',
      timeframe: 'Mid-Long term',
      profile: {
        age: '40-70',
        characteristics: [
          'Have Diabetes type 2/CVD',
          'Focus on quality of life improvement',
          'Regular health monitoring needed',
          'Health-conscious decisions'
        ]
      },
      strategy: {
        marketing: [
          'Doctor referrals/prescriptions',
          'Peer-reviewed publications'
        ],
        distribution: [
          'Medical distributors',
          'Insurance providers',
          'Healthcare facilities'
        ]
      }
    }
  ];

  const milestones = [
    {
      title: "Medical Research",
      status: "completed",
      note: "Declared accuracies based on R&D to date"
    },
    {
      title: "Machine Learning (AI)",
      status: "completed",
      note: "Developed with continuous improvement"
    },
    {
      title: "Patent & Recognition",
      status: "completed",
      note: "12 scientific publications"
    },
    {
      title: "Regulatory Documentation",
      status: "completed",
      note: "FDA/CE documentation being updated"
    },
    {
      title: "Product Launch",
      status: "inProgress",
      note: "Q3 2025 - Q1 2026 timeline"
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Competitive Landscape */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">COMPETITIVE LANDSCAPE</h2>
          <p className="mt-4 text-xl text-ninva">
            "Why is KOLIBRI unique and differentiated?"
          </p>
        </div>

        <div className="grid gap-8">
          {competitiveFeatures.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      className={`p-4 rounded-lg ${
                        feature.isUnique ? 'bg-ninva/5' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{feature.name}</span>
                        <span className={`font-bold ${
                          feature.isUnique ? 'text-ninva' : 'text-gray-600'
                        }`}>
                          {feature.value}
                        </span>
                      </div>
                      {feature.isUnique && (
                        <div className="mt-2 text-sm text-ninva">
                          <Trophy className="inline-block w-4 h-4 mr-1" />
                          Market Leading
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Market Segmentation */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">MARKET SEGMENTATION</h2>
            <p className="mt-4 text-xl text-ninva">
              "Two major pillars strategy, two target profiles"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketSegments.map((segment) => (
              <Card 
                key={segment.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeMarketSegment === segment.id ? 'ring-2 ring-ninva' : ''
                }`}
                onClick={() => setActiveMarketSegment(segment.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{segment.title}</span>
                    <span className="text-sm text-gray-500">
                      {segment.timeframe}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Target Profile</h4>
                      <ul className="space-y-2">
                        {segment.profile.characteristics.map((char, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Strategy</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Marketing</p>
                          <ul className="mt-1 space-y-1">
                            {segment.strategy.marketing.map((item, index) => (
                              <li key={index} className="text-gray-700">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Distribution</p>
                          <ul className="mt-1 space-y-1">
                            {segment.strategy.distribution.map((item, index) => (
                              <li key={index} className="text-gray-700">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">MILESTONES</h2>
          <p className="mt-4 text-xl text-ninva">
            "Most milestones already reached, giving confidence in the success"
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow"
            >
              <div className={`p-2 rounded-full ${
                milestone.status === 'completed' ? 'bg-green-100' : 'bg-ninva/10'
              }`}>
                {milestone.status === 'completed' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : (
                  <Clock className="w-6 h-6 text-ninva" />
                )}
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                <p className="text-sm text-gray-500">{milestone.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KolibriBusinessSections;