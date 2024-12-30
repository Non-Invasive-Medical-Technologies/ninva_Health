import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-medical-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <Link to="/">
            <img 
              src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
              alt="Ninva Health" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-semibold mb-4 text-medical-primary">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-600 hover:text-medical-primary transition-colors">Features</Link>
              <Link to="/technology/ai" className="block text-gray-600 hover:text-medical-primary transition-colors">AI Solutions</Link>
              <Link to="/technology/security" className="block text-gray-600 hover:text-medical-primary transition-colors">Security</Link>
              <Link to="/technology/integration" className="block text-gray-600 hover:text-medical-primary transition-colors">Integration</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-medical-primary">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-600 hover:text-medical-primary transition-colors">About Us</Link>
              <Link to="/features" className="block text-gray-600 hover:text-medical-primary transition-colors">Solutions</Link>
              <Link to="/technology" className="block text-gray-600 hover:text-medical-primary transition-colors">Technology</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-medical-primary">Resources</h3>
            <div className="space-y-2">
              <Link to="/technology" className="block text-gray-600 hover:text-medical-primary transition-colors">Documentation</Link>
              <Link to="/privacy-policy" className="block text-gray-600 hover:text-medical-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="block text-gray-600 hover:text-medical-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-medical-primary">Contact</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-600 hover:text-medical-primary transition-colors">Contact Us</Link>
              <Link to="/technology" className="block text-gray-600 hover:text-medical-primary transition-colors">Support</Link>
              <a href="mailto:support@ninvahealth.com" className="block text-gray-600 hover:text-medical-primary transition-colors">Email Us</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          © 2024 Ninva Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;