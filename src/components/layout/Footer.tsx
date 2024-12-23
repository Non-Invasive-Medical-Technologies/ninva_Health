import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-primary-main/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Features</Link>
              <Link to="/technology/integration" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Integration</Link>
              <Link to="/pricing" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Pricing</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-600 hover:text-brand-primary-main transition-colors">About</Link>
              <Link to="/team" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Team</Link>
              <Link to="/careers" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Careers</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Resources</h3>
            <div className="space-y-2">
              <Link to="/docs" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Documentation</Link>
              <Link to="/support" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Support</Link>
              <Link to="/privacy-policy" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Privacy</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Contact</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Contact Us</Link>
              <Link to="/press" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Press</Link>
              <Link to="/partners" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Partners</Link>
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