
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface AnnouncementPillProps {
  message: string;
  className?: string;
  onClick?: () => void;
}

export function AnnouncementPill({
  message = "Experience the future of Healthcare now in Dubai",
  className,
  onClick
}: AnnouncementPillProps) {
  return (
    <motion.div
      className={cn("relative flex justify-center", className)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-1 rounded-full border border-ninva/20 bg-ninva/10 px-3 py-1.5 text-sm">
        <span className="font-medium text-ninva">{message}</span>
        {onClick && (
          <button
            onClick={onClick}
            className="flex items-center text-ninva hover:text-ninva-dark transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
