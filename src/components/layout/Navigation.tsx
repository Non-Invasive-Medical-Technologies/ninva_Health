import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthButton } from '@/components/auth/AuthButton';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-brand-primary-main/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                alt="Ninva Health" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-brand-primary-main hover:text-brand-primary-main/80 hover:bg-brand-primary-main/5" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" className="text-brand-primary-main hover:text-brand-primary-main/80 hover:bg-brand-primary-main/5" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-brand-primary-main hover:text-brand-primary-main/80 hover:bg-brand-primary-main/5">
                  Technology
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/technology">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technology/ai">AI & Analytics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technology/security">Data Security</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technology/integration">Integration</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-brand-primary-main hover:bg-brand-primary-main/90 text-white">Sign In</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sign In</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-center min-h-[60vh]">
                  <AuthButton />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};