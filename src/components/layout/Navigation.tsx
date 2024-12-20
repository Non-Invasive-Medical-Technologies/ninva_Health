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
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                alt="Ninva Health" 
                className="h-10 w-auto dark:hidden"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log("Color logo failed to load");
                  target.style.display = 'none';
                }} 
              />
              <img 
                src="/lovable-uploads/7c9de020-0246-4290-9031-2bc460fbff8a.png"
                alt="Ninva Health" 
                className="h-10 w-auto hidden dark:block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log("White logo failed to load");
                  target.style.display = 'none';
                }} 
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Technology</Button>
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
                <Button>Sign In</Button>
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