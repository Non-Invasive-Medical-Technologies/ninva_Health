import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, Activity, Brain, MessageSquare, Video,
  FileText, Calendar, ArrowRight, ChevronDown,
  Plus, User, Bell, Phone
} from 'lucide-react';

const HealthcareFlows = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [callActive, setCallActive] = useState(false);

  // Mobile App Demo
  const MobileApp = () => (
    <div className="max-w-sm mx-auto">
      <div className="relative rounded-3xl border-8 border-gray-800 overflow-hidden h-[600px] bg-surface-white">
        {/* Status Bar */}
        <div className="bg-gray-800 text-white p-2 flex justify-between text-xs">
          <span>9:41</span>
          <div className="flex gap-1">
            <Activity className="w-3 h-3" />
            <Heart className="w-3 h-3" />
          </div>
        </div>

        {/* App Content */}
        <div className="p-4 h-full overflow-auto">
          {activeScreen === 'home' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold">Hi Sarah,</h2>
                  <p className="text-sm text-gray-600">Let's check your health</p>
                </div>
                <Button 
                  variant="ghost"
                  className="rounded-full"
                  onClick={() => setActiveScreen('profile')}
                >
                  <User className="w-6 h-6" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  className="bg-medical-primary h-24 flex flex-col items-center gap-2"
                  onClick={() => setActiveScreen('measure')}
                >
                  <Heart className="w-6 h-6" />
                  Start Measurement
                </Button>
                <Button 
                  className="bg-medical-secondary h-24 flex flex-col items-center gap-2"
                  onClick={() => setActiveScreen('ai')}
                >
                  <Brain className="w-6 h-6" />
                  AI Analysis
                </Button>
              </div>

              {/* Recent Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Recent Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { icon: Heart, label: 'Heart Rate', value: '72 BPM' },
                      { icon: Activity, label: 'Blood Pressure', value: '120/80' }
                    ].map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <metric.icon className="w-4 h-4 text-medical-primary" />
                          <span className="text-sm">{metric.label}</span>
                        </div>
                        <span className="font-medium">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeScreen === 'measure' && (
            <div className="space-y-6 animate-fade-in">
              <Button 
                variant="ghost"
                className="mb-4"
                onClick={() => setActiveScreen('home')}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto relative">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      className="text-gray-200"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className="text-medical-primary transition-all duration-1000"
                      strokeWidth="8"
                      strokeDasharray={`${analysisProgress * 3.6} 360`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className={`w-8 h-8 text-medical-primary ${
                      analysisProgress > 0 ? 'animate-pulse' : ''
                    }`} />
                  </div>
                </div>
                <p className="mt-4 font-medium">Measuring vitals...</p>
                <p className="text-sm text-gray-600">Please hold still</p>
              </div>
            </div>
          )}

          {activeScreen === 'ai' && (
            <div className="space-y-6 animate-fade-in">
              <Button 
                variant="ghost"
                className="mb-4"
                onClick={() => setActiveScreen('home')}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="space-y-4">
                <div className="p-4 bg-medical-success/20 rounded-lg">
                  <Brain className="w-6 h-6 text-medical-primary mb-2" />
                  <h3 className="font-medium">AI Health Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Analyzing your health patterns...
                  </p>
                </div>

                {showAIInsight && (
                  <Card className="animate-fade-in">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-medical-primary rounded-lg">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">AI Insight</p>
                          <p className="text-sm text-gray-600">
                            Your heart rate variability has improved by 15% this week.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 inset-x-0 bg-surface-white border-t p-4">
          <div className="flex justify-around">
            {[
              { icon: Heart, label: 'Health' },
              { icon: Calendar, label: 'Schedule' },
              { icon: MessageSquare, label: 'Chat' },
              { icon: User, label: 'Profile' }
            ].map((item, idx) => (
              <button 
                key={idx}
                className="flex flex-col items-center"
                onClick={() => setActiveScreen(item.label.toLowerCase())}
              >
                <item.icon className={`w-6 h-6 ${
                  activeScreen === item.label.toLowerCase() 
                    ? 'text-medical-primary' 
                    : 'text-gray-400'
                }`} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Telemedicine Component
  const TelemedicineCard = () => (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-medical-success" />
              <div>
                <h3 className="font-medium">Dr. Sarah Smith</h3>
                <p className="text-sm text-gray-600">Cardiologist</p>
              </div>
            </div>
            {callActive ? (
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0"
                  onClick={() => setCallActive(false)}
                >
                  <Video className="w-5 h-5" />
                </Button>
                <Button 
                  className="rounded-full w-10 h-10 p-0 bg-medical-error"
                  onClick={() => setCallActive(false)}
                >
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <Button 
                className="bg-medical-primary"
                onClick={() => setCallActive(true)}
              >
                Start Consultation
              </Button>
            )}
          </div>

          {callActive && (
            <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-medical-primary rounded-lg" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  // Health Report Component
  const HealthReport = () => (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Health Report</span>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Heart Rate', value: '72 BPM', trend: '+2%' },
              { label: 'Blood Pressure', value: '120/80', trend: '-5%' },
              { label: 'Sleep Quality', value: '85%', trend: '+8%' },
              { label: 'Activity Score', value: '750', trend: '+12%' }
            ].map((metric, idx) => (
              <div key={idx} className="p-4 bg-medical-success/10 rounded-lg">
                <p className="text-sm text-gray-600">{metric.label}</p>
                <div className="flex items-end justify-between mt-1">
                  <p className="text-2xl font-bold text-medical-primary">
                    {metric.value}
                  </p>
                  <span className={`text-sm ${
                    metric.trend.startsWith('+') 
                      ? 'text-medical-success' 
                      : 'text-medical-error'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">AI Health Insights</h3>
            <div className="space-y-2">
              {[
                'Cardiovascular health improving based on HRV trends',
                'Sleep patterns show consistent improvement',
                'Recommended: Increase daily water intake'
              ].map((insight, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-medical-primary" />
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Animation Effects
  useEffect(() => {
    if (activeScreen === 'measure') {
      const timer = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setActiveScreen('ai');
            return 0;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [activeScreen]);

  useEffect(() => {
    if (activeScreen === 'ai') {
      const timer = setTimeout(() => {
        setShowAIInsight(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowAIInsight(false);
    }
  }, [activeScreen]);

  return (
    <div className="space-y-24 p-8">
      <MobileApp />
      <TelemedicineCard />
      <HealthReport />
    </div>
  );
};

export default HealthcareFlows;