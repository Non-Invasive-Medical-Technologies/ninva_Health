import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, Smartphone, Heart, Users, 
  Brain, Shield, Book, Building2, 
  Phone, User, ChevronRight 
} from 'lucide-react';

const VisualSitemap = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const mainSections = [
    {
      id: 'home',
      title: 'Home',
      icon: <Home className="w-5 h-5" />,
      subsections: [
        'Hero Section',
        'Key Features',
        'Health Monitoring',
        'AI Integration',
        'User Benefits'
      ]
    },
    {
      id: 'product',
      title: 'Product',
      icon: <Smartphone className="w-5 h-5" />,
      subsections: [
        'Kolibri Device',
        'Mobile App',
        'Healthcare Platform'
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      icon: <Heart className="w-5 h-5" />,
      subsections: [
        'Personal Health',
        'Healthcare Providers',
        'Enterprise'
      ]
    },
    {
      id: 'technology',
      title: 'Technology',
      icon: <Brain className="w-5 h-5" />,
      subsections: [
        'AI & Analytics',
        'Data Security',
        'Integration'
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: <Book className="w-5 h-5" />,
      subsections: [
        'Blog',
        'Documentation',
        'Support'
      ]
    },
    {
      id: 'about',
      title: 'About',
      icon: <Building2 className="w-5 h-5" />,
      subsections: [
        'Company',
        'Careers',
        'Press'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-ninva mb-2">Ninva Health Website Structure</h1>
        <p className="text-gray-600">Interactive site map and navigation structure</p>
      </div>

      {/* Main Navigation Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainSections.map((section) => (
          <Card 
            key={section.id}
            className={`cursor-pointer transition-all duration-300 ${
              expandedSection === section.id ? 'ring-2 ring-ninva' : ''
            }`}
            onClick={() => setExpandedSection(
              expandedSection === section.id ? null : section.id
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-ninva/20 flex items-center justify-center text-ninva">
                {section.icon}
              </div>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            
            {expandedSection === section.id && (
              <CardContent>
                <ul className="space-y-2">
                  {section.subsections.map((subsection, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-gray-600 hover:text-ninva"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {subsection}
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Key Templates */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-ninva mb-6">Key Page Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Home Template',
            'Product Template',
            'Solution Template',
            'Resource Template',
            'Documentation',
            'Blog Template',
            'Account Template',
            'Support Template'
          ].map((template, index) => (
            <Card key={index} className="bg-ninva-light">
              <CardContent className="p-4">
                <p className="font-medium text-ninva">{template}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Global Components */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-ninva mb-6">Global Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Navigation',
              items: ['Main Nav', 'Mobile Nav', 'User Menu', 'Footer']
            },
            {
              title: 'CTAs',
              items: ['Primary', 'Secondary', 'Contact Forms', 'Newsletter']
            },
            {
              title: 'Content',
              items: ['Feature Cards', 'Health Cards', 'Blog Cards', 'Team Cards']
            },
            {
              title: 'Interactive',
              items: ['AI Chat', 'Health Data', 'Device Demo', 'Integration']
            }
          ].map((group, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-ninva">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {group.items.map((item, i) => (
                    <li 
                      key={i}
                      className="p-2 bg-ninva-light rounded text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Responsive Breakpoints */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-ninva mb-6">Responsive Breakpoints</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: 'Mobile', range: '320px - 767px' },
            { name: 'Tablet', range: '768px - 1023px' },
            { name: 'Desktop', range: '1024px - 1439px' },
            { name: 'Large Desktop', range: '1440px+' }
          ].map((breakpoint, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-medium text-ninva">{breakpoint.name}</h3>
                <p className="text-sm text-gray-600">{breakpoint.range}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisualSitemap;