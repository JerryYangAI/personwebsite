'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ServiceHeroProps {
  breadcrumb: string[];      // ['Home', 'Services'] etc
  sectionLabel: string;       // "SERVICES · 合作方式"
  title: string;              // big title
  subtitle?: string;          // optional italic subtitle
  accent?: 'orange' | 'blue';
}

/**
 * ServiceHero — top hero for /services pages
 * Includes breadcrumb, section label, big title with orange dot, subtitle.
 */
export default function ServiceHero({
  breadcrumb,
  sectionLabel,
  title,
  subtitle,
  accent = 'orange',
}: ServiceHeroProps) {
  const dotColor = accent === 'blue' ? 'text-[#6a9bcc]' : 'text-[#d97757]';
  return (
    <section className="pt-28 md:pt-32 pb-16 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs text-[#141413]/45 mb-8"
        >
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i === 0 ? (
                <Link href="/" className="hover:text-[#141413] transition-colors">
                  {crumb}
                </Link>
              ) : (
                <span className={i === breadcrumb.length - 1 ? 'text-[#141413]/70' : ''}>
                  {crumb}
                </span>
              )}
              {i < breadcrumb.length - 1 && <ChevronRight size={10} />}
            </span>
          ))}
        </motion.nav>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-4"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/55 font-semibold">
            — {sectionLabel} —
          </span>
        </motion.div>

        {/* Big title with dot */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold text-[#141413] leading-tight mb-5"
        >
          {title}
          <span className={dotColor}>.</span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-xl text-[#141413]/65 italic font-serif max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
