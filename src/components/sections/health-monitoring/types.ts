import { LucideIcon } from 'lucide-react';

export interface Metric {
  label: string;
  value: string;
}

export interface HealthFeature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: Metric[];
}

export interface TimelineItem {
  time: string;
  event: string;
  status: 'complete' | 'current' | 'upcoming';
}

export interface DemoMetrics {
  heartRate: number;
  bloodPressure: string;
  oxygenLevel: number;
}

export const brandColors = {
  emerald: {
    light: 'bg-emerald-50',
    medium: 'bg-emerald-100',
    default: 'bg-emerald-600',
    dark: 'bg-emerald-800'
  },
  teal: {
    light: 'bg-teal-50',
    medium: 'bg-teal-100',
    default: 'bg-teal-600',
    dark: 'bg-teal-800'
  },
  peach: {
    light: 'bg-orange-50',
    medium: 'bg-orange-100',
    default: 'bg-orange-400',
    dark: 'bg-orange-600'
  },
  gradients: {
    primary: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    secondary: 'bg-gradient-to-r from-emerald-50 to-teal-50',
    accent: 'bg-gradient-to-r from-orange-400 to-rose-400',
    surface: 'bg-gradient-to-br from-gray-50 to-emerald-50'
  }
} as const;