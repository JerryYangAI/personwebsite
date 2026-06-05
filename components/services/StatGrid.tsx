'use client';

import { motion } from 'framer-motion';

export interface StatItem {
  number: string;
  label: string;
  sublabel?: string;
}

interface StatGridProps {
  stats: StatItem[];
  className?: string;
}

/**
 * StatGrid — 4-column hero stat block
 * Used in /services/speaking hero.
 */
export default function StatGrid({ stats, className = '' }: StatGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-[#141413]/10 ${className}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-[#faf9f5] p-6 md:p-8"
        >
          <div className="font-serif italic text-4xl md:text-5xl font-bold text-[#d97757] mb-2">
            {stat.number}
          </div>
          <div className="text-sm font-semibold text-[#141413] mb-1">{stat.label}</div>
          {stat.sublabel && (
            <div className="text-xs text-[#141413]/50">{stat.sublabel}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
