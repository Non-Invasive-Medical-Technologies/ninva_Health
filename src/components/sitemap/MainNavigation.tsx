import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Home, Smartphone, Heart, Brain, Book, Building2, ChevronRight } from 'lucide-react';

interface MainNavigationProps {
  expandedSection: string | null;
  setExpandedSection: (id: string | null) => void;
}

export const mainSections = [
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

export const MainNavigation: React.FC<MainNavigationProps> = ({ expandedSection, setExpandedSection }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mainSections.map((section) => (
        <Card 
          key={section.id}
          className={`cursor-pointer transition-all duration-300 ${
            expandedSection === section.id ? 'ring-2 ring-[#26652C]' : ''
          }`}
          onClick={() => setExpandedSection(
            expandedSection === section.id ? null : section.id
          )}
        >
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#8FD5CA] flex items-center justify-center">
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
                    className="flex items-center text-gray-600 hover:text-[#26652C]"
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
  );
};