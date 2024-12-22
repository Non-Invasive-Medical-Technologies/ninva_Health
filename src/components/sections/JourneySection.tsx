import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Heart, Activity, Brain, X, ArrowRight } from 'lucide-react';

const journeyStages = [
  {
    id: 'detection',
    title: 'Detection',
    description: 'Effectively determine the requirement for medical intervention or health assessment',
    icon: <Heart className="w-6 h-6" />,
    details: ['HRV Analysis', 'Cardiac Parameters', 'Clinical Signs', 'Early Detection']
  },
  {
    id: 'treatment',
    title: 'Treatment',
    description: 'Monitor treatment effectiveness and provide valuable insights to healthcare providers',
    icon: <Activity className="w-6 h-6" />,
    details: ['Progress Tracking', 'Treatment Monitoring', 'Doctor Insights', 'Decision Support']
  },
  {
    id: 'prevention',
    title: 'Prevention',
    description: 'Proactively prevent health challenges through early detection and lifestyle adjustments',
    icon: <Brain className="w-6 h-6" />,
    details: ['Risk Prevention', 'Lifestyle Guidance', 'Continuous Monitoring', 'Health Optimization']
  }
];

const JourneySection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(true);
  const [chatMinimized, setChatMinimized] = useState(false);

  return (
    <div className="bg-brand-primary-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-primary-main mb-4">
            Embrace the Journey to Longevity
          </h2>
          <p className="text-xl text-brand-supporting-turquoise">
            "Accompanying users at every stage of their journey"
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Large Feature Card */}
          <Card className="md:col-span-2 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-primary-main to-brand-supporting-turquoise p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Health Journey</h3>
              <div className="grid grid-cols-3 gap-8">
                {journeyStages.map((stage) => (
                  <div key={stage.id} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-4">
                      {stage.icon}
                    </div>
                    <h4 className="font-semibold">{stage.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Journey Stage Cards */}
          {journeyStages.map((stage, index) => (
            <Card 
              key={stage.id}
              className={`transition-all duration-300 ${
                index === 1 ? 'md:col-span-2' : ''
              }`}
              onMouseEnter={() => setActiveCard(stage.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`p-6 h-full ${
                activeCard === stage.id 
                  ? 'bg-gradient-to-r from-brand-primary-main to-brand-supporting-turquoise text-white' 
                  : 'hover:bg-brand-primary-background'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeCard === stage.id 
                      ? 'bg-white/20' 
                      : 'bg-brand-primary-secondary/50'
                  }`}>
                    {stage.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeCard === stage.id ? 'text-white' : 'text-brand-primary-main'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className={activeCard === stage.id ? 'text-white/90' : 'text-gray-600'}>
                      {stage.description}
                    </p>
                    {activeCard === stage.id && (
                      <ul className="mt-4 space-y-2">
                        {stage.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dr. Ninva Chat */}
        {showChat && (
          <div className={`fixed ${
            chatMinimized ? 'bottom-4 right-4 w-auto' : 'bottom-4 right-4 w-80'
          } z-50 transition-all duration-300`}>
            <Card>
              <div className="bg-gradient-to-r from-brand-primary-main to-brand-supporting-turquoise p-4 rounded-t-lg">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-medium">Dr. Ninva</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setChatMinimized(!chatMinimized)}
                      className="hover:bg-white/10 rounded-full p-1 transition-colors"
                    >
                      {chatMinimized ? '+' : '-'}
                    </button>
                    <button 
                      onClick={() => setShowChat(false)}
                      className="hover:bg-white/10 rounded-full p-1 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {!chatMinimized && (
                <div className="p-4">
                  <div className="bg-brand-primary-background rounded-lg p-3 mb-3">
                    <p className="text-brand-primary-main">
                      {activeCard 
                        ? `Let me explain more about the ${journeyStages.find(s => s.id === activeCard)?.title} phase...`
                        : "Hello! I can help explain each phase of your health journey. Hover over the cards to learn more."}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder="Ask me anything..."
                      className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary-main/20"
                    />
                    <Button 
                      size="sm" 
                      className="bg-brand-primary-main hover:bg-brand-supporting-turquoise transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneySection;