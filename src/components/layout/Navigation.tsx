
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthButton } from '@/components/auth/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Home, Info, Lightbulb, Cpu, ChevronDown } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-ninva/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                alt="Ninva Health" 
                className="h-8 w-auto"
              />
            </Link>
            <Button variant="ghost" className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5">
                  Products
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/features" className="flex items-center">
                    Non-Invasive Health Screener - Ninva HS+
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/uryscan-g1" className="flex items-center">
                    UryScan G1
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/about">
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/features">
                <Lightbulb className="w-4 h-4 mr-2" />
                Features
              </Link>
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-primary hover:bg-medical-primary/5" asChild>
              <Link to="/technology">
                <Cpu className="w-4 h-4 mr-2" />
                Technology
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                      <Button variant="ghost" className="w-full justify-start text-gray-600" onClick={() => handleNavigation('/')}>
                        <Home className="w-4 h-4 mr-2" />
                        Home
                      </Button>
                      {/* Products in mobile menu */}
                      <div className="pl-4 space-y-2">
                        <Button variant="ghost" className="w-full justify-start text-gray-600" onClick={() => handleNavigation('/features')}>
                          Non-Invasive Health Screener - Ninva HS+
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-gray-600" onClick={() => handleNavigation('/products/uryscan-g1')}>
                          UryScan G1
                        </Button>
                      </div>
                      <Button variant="ghost" className="w-full justify-start text-gray-600" onClick={() => handleNavigation('/about')}>
                        <Info className="w-4 h-4 mr-2" />
                        About
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-gray-600" onClick={() => handleNavigation('/features')}>
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Features
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-gray-600" onClick={() => handleNavigation('/technology')}>
                        <Cpu className="w-4 h-4 mr-2" />
                        Technology
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
