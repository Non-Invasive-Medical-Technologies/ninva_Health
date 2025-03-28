
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { uploadFile } from '@/utils/uploadUtils';
import { Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        await uploadFile(file);
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  };

  return (
    <section className="pt-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="pb-20 border-b">
          <div className="flex flex-wrap -m-8">
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-ninva">Company</h3>
              <ul>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/about">About Us</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/careers">Careers</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/press">Press</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-ninva">Product</h3>
              <ul>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/features">Features</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/technology/ai">AI Solutions</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/technology/security">Security</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/technology/integration">Integration</Link>
                </li>
              </ul>
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-ninva">Legal</h3>
              <ul>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/terms-of-service">Terms</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/privacy-policy">Privacy</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/team">Team</Link>
                </li>
                <li>
                  <label htmlFor="file-upload" className="text-gray-600 hover:text-ninva font-medium leading-relaxed cursor-pointer">
                    Upload File
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </li>
              </ul>
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal text-ninva">Resources</h3>
              <ul>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/blog">Blog</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/technology">Technology</Link>
                </li>
                <li className="mb-3.5">
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/features">Solutions</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-ninva font-medium leading-relaxed" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-4/12 p-8">
              <div className="lg:max-w-sm">
                <h3 className="mb-6 font-semibold leading-normal text-ninva">Subscribe</h3>
                <p className="mb-5 font-sans text-gray-600 leading-relaxed">
                  Stay updated with the latest advancements in health monitoring technology.
                </p>
                <div className="mb-3 xl:pl-6 inline-block md:max-w-xl w-full overflow-hidden border border-gray-300 rounded-xl focus-within:ring focus-within:ring-ninva/30">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full xl:flex-1">
                      <input 
                        className="p-3 xl:p-0 xl:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none" 
                        id="footerInput1" 
                        type="email" 
                        placeholder="Type your e-mail"
                      />
                    </div>
                    <div className="w-full xl:w-auto">
                      <div className="block">
                        <button 
                          className="py-4 px-8 w-full text-white font-semibold border border-ninva focus:ring focus:ring-ninva/30 bg-ninva hover:bg-ninva/90 transition ease-in-out duration-200" 
                          type="button"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center py-6 -m-4">
          <div className="w-auto p-4">
            <Link to="/">
              <img 
                src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                alt="Ninva Health" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="w-auto p-4">
            <p className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} Ninva Health. All Rights Reserved
            </p>
          </div>
          
          <div className="w-auto p-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-auto p-4">
                <a className="text-gray-600 hover:text-ninva" href="#" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
              </div>
              <div className="w-auto p-4">
                <a className="text-ninva hover:text-ninva/80" href="#" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
              </div>
              <div className="w-auto p-4">
                <a className="text-gray-600 hover:text-ninva" href="#" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              </div>
              <div className="w-auto p-4">
                <a className="text-gray-600 hover:text-ninva" href="#" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
