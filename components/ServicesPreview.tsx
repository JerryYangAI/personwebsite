'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mic, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * ServicesPreview — Homepage 2-card teaser
 * Insert into app/page.tsx between <Projects /> and <FeaturedReading />.
 * Each card links to /services/speaking or /services/cooperation.
 */
export default function ServicesPreview() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Mic,
      tag: '01 · SERVICE',
      title: t('services.speaking.title'),
      titleEn: t('services.speaking.titleEn'),
      summary: t('services.speaking.summary'),
      price: t('services.speaking.price'),
      priceUnit: t('services.speaking.priceUnit'),
      href: '/services/speaking',
      accent: 'orange' as const,
    },
    {
      icon: Briefcase,
      tag: '02 · SERVICE',
      title: t('services.business.title'),
      titleEn: t('services.business.titleEn'),
      summary: t('services.business.summary'),
      price: t('services.business.price'),
      priceUnit: '',
      href: '/services/cooperation',
      accent: 'blue' as const,
    },
  ];

  const accentClass = {
    orange: { bar: 'bg-[#d97757]', text: 'text-[#d97757]' },
    blue: { bar: 'bg-[#6a9bcc]', text: 'text-[#6a9bcc]' },
  };

  return (
    <section id="services" className="py-24 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/55 font-semibold">
            — {t('services.sectionLabel')} —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-semibold text-[#141413] mb-4"
        >
          {t('services.title')}
          <span className="text-[#d97757]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-lg text-[#141413]/65 italic font-serif mb-12 max-w-3xl"
        >
          {t('services.subtitle')}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const accent = accentClass[card.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="bg-[#e8e6dc]/50 relative overflow-hidden flex flex-col p-8 md:p-10 group hover:bg-[#e8e6dc]/80 transition-colors"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${accent.bar}`} />

                <div className={`flex items-center gap-2 text-[11px] tracking-[0.18em] font-semibold ${accent.text} mb-6`}>
                  <Icon size={14} strokeWidth={2} />
                  <span>{card.tag}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-semibold text-[#141413] mb-2">
                  {card.title}
                </h3>
                <p className="font-serif italic text-[#141413]/50 text-base mb-6">{card.titleEn}</p>

                <p className="text-[#141413]/80 leading-relaxed mb-8 line-clamp-3">{card.summary}</p>

                <div className="flex-1" />

                <div className="border-t border-[#141413]/10 my-2" />

                <div className="flex items-end justify-between mt-4">
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-[#141413]/40 font-medium mb-1">
                      {t('services.priceLabel')}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl md:text-4xl font-serif italic font-bold ${accent.text}`}>
                        {card.price}
                      </span>
                      {card.priceUnit && (
                        <span className="text-sm text-[#141413]/50">{card.priceUnit}</span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm text-[#141413] border-b border-[#141413]/40 group-hover:border-[#141413] pb-0.5 transition-colors"
                  >
                    <span>{t('services.viewDetails')}</span>
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
