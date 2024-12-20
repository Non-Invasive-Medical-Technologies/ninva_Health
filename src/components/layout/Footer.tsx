import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Features</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Integration</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Pricing</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">About</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Team</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Careers</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Documentation</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Support</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Privacy</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Contact Us</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Press</a>
              <a href="#" className="block text-gray-600 hover:text-[#26652C]">Partners</a>
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