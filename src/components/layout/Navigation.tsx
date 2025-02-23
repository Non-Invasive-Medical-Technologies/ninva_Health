
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menuItems = [
  { title: "Home", url: "/" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "Non-Invasive Health Screener",
        description: "Advanced health screening technology",
        icon: <Book className="size-5 shrink-0" />,
        url: "/features",
      },
      {
        title: "UryScan G1",
        description: "Revolutionary urine analysis device",
        icon: <Trees className="size-5 shrink-0" />,
        url: "/products/uryscan-g1",
      }
    ],
  },
  {
    title: "Technology",
    url: "#",
    items: [
      {
        title: "AI Solutions",
        description: "Advanced artificial intelligence integration",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/technology/ai",
      },
      {
        title: "Security",
        description: "Enterprise-grade data protection",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "/technology/security",
      },
    ],
  },
  { title: "About", url: "/about" },
];

export const Navigation = () => {
  const navigate = useNavigate();

  const renderMenuItem = (item: any) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title} className="text-muted-foreground">
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80 p-3">
              <NavigationMenuLink asChild>
                <div>
                  {item.items.map((subItem: any) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.url}
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                      >
                        {subItem.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <p className="text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <Link
          to={item.url}
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
        >
          {item.title}
        </Link>
      </NavigationMenuItem>
    );
  };

  const renderMobileMenuItem = (item: any) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem: any) => (
              <Link
                key={subItem.title}
                to={subItem.url}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <Link key={item.title} to={item.url} className="font-semibold">
        {item.title}
      </Link>
    );
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-ninva/10">
      <div className="container py-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png" className="h-8" alt="Ninva Health" />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map(renderMenuItem)}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png" className="h-8" alt="Ninva Health" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-2">
                      <img src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png" className="h-8" alt="Ninva Health" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menuItems.map(renderMobileMenuItem)}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link to="/login">Log in</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/signup">Sign up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};
