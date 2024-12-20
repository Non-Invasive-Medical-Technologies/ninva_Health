import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. Terms</h2>
          <p>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local laws.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Kolibri Health's Website for personal, non-commercial transitory viewing only.</p>

          <h2>3. Disclaimer</h2>
          <p>The materials on Kolibri Health's Website are provided on an 'as is' basis. Kolibri Health makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall Kolibri Health or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kolibri Health's Website.</p>

          <h2>5. Privacy</h2>
          <p>Your use of Kolibri Health's Website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Website and informs users of our data collection practices.</p>

          <h2>6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;