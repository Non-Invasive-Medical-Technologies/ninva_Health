import React, { useState, useEffect } from 'react';
import { Heart, Activity, Brain } from 'lucide-react';
import { QuickInsights } from './health-monitoring/QuickInsights';
import { FeatureCards } from './health-monitoring/FeatureCards';
import { Timeline } from './health-monitoring/Timeline';
import type { HealthFeature, TimelineItem } from './health-monitoring/types';

const features: HealthFeature[] = [
  {
    id: 1,
    title: "Heart Health",
    description: "Real-time heart rate and HRV monitoring",
    icon: Heart,
    metrics: [
      { label: "Current", value: "72 BPM" },
      { label: "Average", value: "75 BPM" }
    ]
  },
  {
    id: 2,
    title: "Activity",
    description: "Daily movement and exercise tracking",
    icon: Activity,
    metrics: [
      { label: "Steps", value: "8,234" },
      { label: "Active", value: "45 min" }
    ]
  },
  {
    id: 3,
    title: "Analysis",
    description: "AI-powered health insights",
    icon: Brain,
    metrics: [
      { label: "Score", value: "92%" },
      { label: "Status", value: "Good" }
    ]
  }
];

const timelineItems: TimelineItem[] = [
  { time: '9:00 AM', event: 'Morning Check', status: 'complete' },
  { time: '2:30 PM', event: 'Activity Goal', status: 'complete' },
  { time: '5:45 PM', event: 'Evening Check', status: 'current' },
  { time: '10:00 PM', event: 'Sleep Analysis', status: 'upcoming' }
];

const InteractiveSections = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [demoMetrics, setDemoMetrics] = useState({
    heartRate: 72,
    bloodPressure: "120/80",
    oxygenLevel: 98
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 p-8">
      <QuickInsights metrics={demoMetrics} />
      <FeatureCards 
        features={features}
        activeFeature={activeFeature}
        isMobile={isMobile}
        onFeatureClick={setActiveFeature}
      />
      <Timeline items={timelineItems} isMobile={isMobile} />
    </div>
  );
};

export default InteractiveSections;