
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
  children?: React.ReactNode;
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  colSpan?: "col-span-1" | "col-span-2";
  animated?: boolean;
}

const AnimatedBorder = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 rounded-md overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-medical-primary via-medical-secondary to-medical-primary bg-[length:200%_100%] animate-gradient-flow" />
      <div className="absolute inset-[1px] rounded-md bg-card" />
    </div>
  );
};

export function BentoCard({
  className,
  icon,
  title,
  description,
  colSpan = "col-span-1",
  animated = false,
  ...props
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-lg overflow-hidden group",
        colSpan,
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {animated && <AnimatedBorder />}
      <div className={cn(
        "relative h-full p-6 flex flex-col justify-between bg-card border border-border overflow-hidden",
        animated ? "z-10" : ""
      )}>
        <div className="flex-1 flex flex-col">
          {icon && <div className="mb-4">{icon}</div>}
          <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function BentoGrid({
  title,
  subtitle,
  badgeText,
  className,
  children,
  ...props
}: BentoGridProps) {
  return (
    <div className={cn("py-12", className)} {...props}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-8">
          {(title || subtitle || badgeText) && (
            <div className="flex gap-4 flex-col items-start">
              {badgeText && (
                <div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {badgeText}
                  </Badge>
                </div>
              )}
              {(title || subtitle) && (
                <div className="flex gap-2 flex-col">
                  {title && (
                    <h2 className="text-3xl md:text-4xl tracking-tighter font-bold">
                      {title}
                    </h2>
                  )}
                  {subtitle && (
                    <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed text-muted-foreground">
                      {subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
