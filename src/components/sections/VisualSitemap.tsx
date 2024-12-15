import React, { useState } from 'react';
import { MainNavigation } from '../sitemap/MainNavigation';
import { KeyTemplates } from '../sitemap/KeyTemplates';
import { GlobalComponents } from '../sitemap/GlobalComponents';
import { ResponsiveBreakpoints } from '../sitemap/ResponsiveBreakpoints';

const VisualSitemap = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[#26652C] mb-2">Ninva Health Website Structure</h1>
        <p className="text-gray-600">Interactive site map and navigation structure</p>
      </div>

      <MainNavigation 
        expandedSection={expandedSection}
        setExpandedSection={setExpandedSection}
      />
      <KeyTemplates />
      <GlobalComponents />
      <ResponsiveBreakpoints />
    </div>
  );
};

export default VisualSitemap;