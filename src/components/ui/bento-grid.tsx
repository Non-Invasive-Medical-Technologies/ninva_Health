
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  colSpan?: "col-span-1" | "col-span-2";
  hoverEffect?: boolean;
  animated?: boolean;
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  colSpan = "col-span-1",
  hoverEffect = true,
  animated = false,
}: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  // Track if component is in view for animation
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  const Card = animated ? motion.div : "div";
  const cardProps = animated
    ? {
        ref: divRef,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5, ease: "easeOut" },
        whileHover: hoverEffect ? { scale: 1.02 } : undefined,
      }
    : {};

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border border-ninva/10 bg-white p-6 shadow-md transition-all duration-300",
        hoverEffect && "hover:shadow-xl hover:border-ninva/20",
        colSpan,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...cardProps as any}
    >
      {/* Moving gradient border */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
      >
        <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-ninva/40 via-ninva-light/40 to-ninva/40 animate-gradient-flow" />
      </div>

      <div className="relative h-full flex flex-col justify-between z-10">
        {icon && <div className="mb-4">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-ninva-darker">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}
