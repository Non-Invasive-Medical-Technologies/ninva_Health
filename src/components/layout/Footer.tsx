import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-ninva/10">
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
            <h3 className="font-display font-semibold mb-4 text-ninva">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Features</Link>
              <Link to="/technology" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Technology</Link>
              <Link to="/technology/ai" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">AI Solutions</Link>
              <Link to="/technology/security" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Security</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-ninva">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">About</Link>
              <Link to="/technology" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Technology</Link>
              <Link to="/features" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Solutions</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-ninva">Resources</h3>
            <div className="space-y-2">
              <Link to="/technology" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Documentation</Link>
              <Link to="/technology/integration" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Integration</Link>
              <Link to="/privacy-policy" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Privacy</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-4 text-ninva">Contact</h3>
            <div className="space-y-2">
              <Link to="/technology/integration" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Contact Us</Link>
              <Link to="/technology" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Support</Link>
              <Link to="/technology/integration" className="block text-ninva-complementary-dark hover:text-ninva transition-colors">Partners</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-ninva-complementary-dark">
          © 2024 Ninva Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;