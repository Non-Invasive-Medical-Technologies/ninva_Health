import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthButton } from '@/components/auth/AuthButton';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export const Navigation = () => {
  console.log('[Navigation] Rendering Navigation');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-ninva/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                alt="Ninva Health" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/technology">Technology</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-medical-primary text-white hover:bg-medical-primary/90">
                  Sign In
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0">
                <div className="flex flex-col justify-center min-h-[60vh] p-8">
                  <AuthButton />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <img 
                      src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                      alt="Ninva Health" 
                      className="h-8 w-auto mb-6"
                    />
                    <div className="space-y-4">
                      <Button variant="ghost" className="w-full justify-start text-gray-600" asChild>
                        <Link to="/about">About</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-gray-600" asChild>
                        <Link to="/features">Features</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-gray-600" asChild>
                        <Link to="/technology">Technology</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <AuthButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};