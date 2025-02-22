
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface NutritionBadgesProps {
  badges: string[];
}

export const NutritionBadges: React.FC<NutritionBadgesProps> = ({ badges }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-ninva/10 text-ninva hover:bg-ninva/20">
                {badge}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
