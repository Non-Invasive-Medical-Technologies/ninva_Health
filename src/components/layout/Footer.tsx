import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-primary-main/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Product</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Features</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Integration</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Pricing</a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">About</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Team</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Careers</a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Documentation</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Support</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Privacy</a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-brand-primary-main">Contact</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Press</a>
              <a href="#" className="block text-gray-600 hover:text-brand-primary-main transition-colors">Partners</a>
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