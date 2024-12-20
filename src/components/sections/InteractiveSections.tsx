import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Activity, Brain, AlertTriangle, CheckCircle2, Smartphone } from 'lucide-react';

const InteractiveSections = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [deviceRotation, setDeviceRotation] = useState({ x: 0, y: 0 });
  const [demoMetrics, setDemoMetrics] = useState({
    heartRate: 72,
    bloodPressure: "120/80",
    oxygenLevel: 98
  });

  // Demo features for the device section
  const features = [
    {
      id: 1,
      title: "Heart Rate Monitoring",
      description: "Real-time heart rate tracking with medical-grade accuracy",
      icon: Heart,
      metrics: [
        { label: "Current", value: "72 BPM" },
        { label: "Average", value: "75 BPM" },
        { label: "Peak", value: "120 BPM" }
      ]
    },
    {
      id: 2,
      title: "Activity Tracking",
      description: "Comprehensive monitoring of daily activities and exercise",
      icon: Activity,
      metrics: [
        { label: "Steps", value: "8,234" },
        { label: "Active Minutes", value: "45" },
        { label: "Calories", value: "423" }
      ]
    },
    {
      id: 3,
      title: "Health Analysis",
      description: "AI-powered health insights and early detection",
      icon: Brain,
      metrics: [
        { label: "Health Score", value: "92%" },
        { label: "Sleep Quality", value: "Good" },
        { label: "Recovery", value: "95%" }
      ]
    }
  ];

  // Handle mouse movement for device rotation
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setDeviceRotation({
      x: (y - 0.5) * 20,
      y: (x - 0.5) * 20
    });
  };

  // Simulate changing health metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoMetrics(prev => ({
        heartRate: prev.heartRate + (Math.random() > 0.5 ? 1 : -1),
        bloodPressure: "120/80",
        oxygenLevel: Math.min(100, Math.max(95, prev.oxygenLevel + (Math.random() > 0.5 ? 1 : -1)))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 p-8">
      {/* Device Interaction Demo */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
            Experience the Future of Health Monitoring
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Interactive Device Display */}
            <div 
              className="relative h-[600px] p-8 bg-gradient-to-br from-[#F2FCE2] to-[#D3E4FD] rounded-2xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setDeviceRotation({ x: 0, y: 0 })}
            >
              <div 
                className="relative transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${deviceRotation.x}deg) rotateY(${deviceRotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Device Frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-2xl transform translate-z-20">
                  {/* Screen Content */}
                  <div className="absolute inset-4 bg-black rounded-lg overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 p-4 text-white">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm opacity-60">Current Reading</span>
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 rounded-lg p-3">
                            <Heart className="h-5 w-5 text-emerald-400 mb-1" />
                            <div className="text-2xl font-bold">{demoMetrics.heartRate}</div>
                            <div className="text-xs opacity-60">BPM</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <Activity className="h-5 w-5 text-emerald-400 mb-1" />
                            <div className="text-2xl font-bold">{demoMetrics.oxygenLevel}%</div>
                            <div className="text-xs opacity-60">SpO2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sensor Indicators */}
                <div className="absolute -right-2 top-1/4 w-4 h-4 rounded-full bg-emerald-200 animate-ping"></div>
                <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-teal-200 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Feature Showcase */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.id}
                  className={`transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-[#F2FCE2] to-[#D3E4FD] scale-105' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                        <feature.icon className={`h-6 w-6 ${
                          activeFeature === index ? 'text-emerald-600' : 'text-emerald-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        
                        {activeFeature === index && (
                          <div className="grid grid-cols-3 gap-4 animate-fadeIn">
                            {feature.metrics.map((metric, idx) => (
                              <div key={idx} className="bg-white p-3 rounded-lg shadow-sm">
                                <div className="text-sm text-gray-500">{metric.label}</div>
                                <div className="text-lg font-semibold text-emerald-700">
                                  {metric.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Demo */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
          AI-Powered Health Analysis
        </h2>
        
        <div className="bg-gradient-to-br from-[#F2FCE2] to-[#D3E4FD] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-emerald-800">Health Analysis</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-sm text-gray-500">Analyzing</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Analysis Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Processing health data</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Heart Health', value: '94%', trend: 'up' },
                        { label: 'Sleep Quality', value: '85%', trend: 'stable' },
                        { label: 'Stress Level', value: 'Low', trend: 'improving' },
                        { label: 'Recovery', value: '92%', trend: 'up' }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                          <div className="text-xl font-semibold text-emerald-700">
                            {metric.value}
                          </div>
                          <div className="text-sm text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" />
                            Optimal
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* AI Insights */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-4">AI Insights</h3>
                  <div className="space-y-3">
                    {[
                      "Sleep pattern shows optimal recovery",
                      "Heart rate variability trending positively",
                      "Stress levels well managed"
                    ].map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span className="text-gray-600">{insight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    {[
                      "Maintain current exercise routine",
                      "Consider earlier bedtime",
                      "Stay hydrated throughout day"
                    ].map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span className="text-gray-600">{rec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveSections;
