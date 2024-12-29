import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Brain, MessageSquare, Calendar, ArrowRight, User } from 'lucide-react';
import { BottomNavigation } from './BottomNavigation';

interface MobileAppProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  analysisProgress: number;
  showAIInsight: boolean;
}

export const MobileApp = ({ 
  activeScreen, 
  setActiveScreen, 
  analysisProgress, 
  showAIInsight 
}: MobileAppProps) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="relative rounded-3xl border-8 border-gray-800 overflow-hidden h-[600px] bg-white">
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
            <div className="space-y-4 animate-fadeIn">
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
                  className="bg-[#26652C] h-24 flex flex-col items-center gap-2"
                  onClick={() => setActiveScreen('measure')}
                >
                  <Heart className="w-6 h-6" />
                  Start Measurement
                </Button>
                <Button 
                  className="bg-[#4EC989] h-24 flex flex-col items-center gap-2"
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
                          <metric.icon className="w-4 h-4 text-[#26652C]" />
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
            <div className="space-y-6 animate-fadeIn">
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
                      className="text-[#26652C] transition-all duration-1000"
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
                    <Heart className={`w-8 h-8 text-[#26652C] ${
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
            <div className="space-y-6 animate-fadeIn">
              <Button 
                variant="ghost"
                className="mb-4"
                onClick={() => setActiveScreen('home')}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="space-y-4">
                <div className="p-4 bg-[#8FD5CA]/20 rounded-lg">
                  <Brain className="w-6 h-6 text-[#26652C] mb-2" />
                  <h3 className="font-medium">AI Health Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Analyzing your health patterns...
                  </p>
                </div>

                {showAIInsight && (
                  <Card className="animate-slideIn">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#26652C] rounded-lg">
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

        <BottomNavigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      </div>
    </div>
  );
};