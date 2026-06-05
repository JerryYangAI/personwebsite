'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Download } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import StatGrid, { StatItem } from '@/components/services/StatGrid';
import PastClients from '@/components/services/PastClients';
import GetInTouch, { CONTACT } from '@/components/services/GetInTouch';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * /services/speaking — Speaking & Training detail page
 */
export default function SpeakingPage() {
  const { t } = useLanguage();

  const stats: StatItem[] = [
    { number: t('services.speaking.stat1Num'), label: t('services.speaking.stat1Label') },
    { number: t('services.speaking.stat2Num'), label: t('services.speaking.stat2Label') },
    { number: t('services.speaking.stat3Num'), label: t('services.speaking.stat3Label') },
    { number: t('services.speaking.stat4Num'), label: t('services.speaking.stat4Label') },
  ];

  const topics = [
    {
      tag: 'TOPIC 01',
      title: t('services.speaking.topic1Title'),
      desc: t('services.speaking.topic1Desc'),
    },
    {
      tag: 'TOPIC 02',
      title: t('services.speaking.topic2Title'),
      desc: t('services.speaking.topic2Desc'),
    },
    {
      tag: 'TOPIC 03',
      title: t('services.speaking.topic3Title'),
      desc: t('services.speaking.topic3Desc'),
    },
    {
      tag: 'TOPIC 04',
      title: t('services.speaking.topic4Title'),
      desc: t('services.speaking.topic4Desc'),
    },
    {
      tag: 'TOPIC 05',
      title: t('services.speaking.topic5Title'),
      desc: t('services.speaking.topic5Desc'),
    },
    {
      tag: 'TOPIC 06',
      title: t('services.speaking.topic6Title'),
      desc: t('services.speaking.topic6Desc'),
    },
  ];

  const clients = [
    { name: '微光医疗', caption: 'MEDICAL · AI' },
    { name: 'CEIBS', caption: 'BUSINESS SCHOOL' },
    { name: 'HBS', caption: 'BUSINESS SCHOOL' },
    { name: 'Mercedes-Benz', caption: 'AUTOMOTIVE' },
  ];

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    'Speaking / Training Inquiry — Jerry Yang'
  )}`;

  return (
    <>
      <Navigation />

      <ServiceHero
        breadcrumb={['Home', 'Services', t('services.speaking.title')]}
        sectionLabel={'SPEAKING & TRAINING · ' + t('services.speaking.title')}
        title={t('services.speaking.heroTitle')}
        subtitle={t('services.speaking.heroSub')}
        accent="orange"
      />

      {/* 4 stats */}
      <section className="py-4 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-6">
          <StatGrid stats={stats} />
        </div>
      </section>

      {/* CTA buttons row */}
      <section className="py-12 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={mailto}
            className="inline-flex items-center justify-center gap-2 bg-[#141413] text-[#faf9f5] px-7 py-3.5 text-sm font-medium hover:bg-[#d97757] transition-colors w-full sm:w-auto"
          >
            <Mail size={16} strokeWidth={1.8} />
            {t('services.speaking.ctaBook')}
          </a>
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 border border-[#141413]/20 text-[#141413]/45 px-7 py-3.5 text-sm font-medium cursor-not-allowed w-full sm:w-auto"
            title={t('services.comingSoon')}
          >
            <Download size={16} strokeWidth={1.8} />
            {t('services.speaking.ctaPdf')}
          </button>
          <span className="text-xs text-[#141413]/40 italic ml-auto">
            {t('services.speaking.responseSla')}
          </span>
        </div>
      </section>

      {/* 6 Topic cards */}
      <section className="py-20 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/55 font-semibold">
              — {t('services.speaking.topicsHeading')} —
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#141413]">
              {t('services.speaking.topicsTitle')}
              <span className="text-[#d97757]">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141413]/10">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="bg-[#faf9f5] p-7 md:p-8 group hover:bg-[#e8e6dc]/30 transition-colors"
              >
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#d97757] font-semibold mb-4">
                  {topic.tag}
                </div>
                <h3 className="text-xl font-semibold text-[#141413] mb-3 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-sm text-[#141413]/65 leading-relaxed">{topic.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-[#141413]/50 italic"
          >
            {t('services.speaking.topicsFooter')}
          </motion.p>
        </div>
      </section>

      <PastClients clients={clients} />

      {/* Pricing block */}
      <section className="py-20 bg-[#e8e6dc]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/55 font-semibold">
              — {t('services.pricingLabel')} —
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-serif italic font-bold text-6xl md:text-7xl text-[#d97757] mb-4"
          >
            {t('services.speaking.price')}
            <span className="text-base md:text-lg not-italic font-normal text-[#141413]/55 ml-2 align-middle">
              {t('services.speaking.priceUnit')}
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-[#141413]/55 italic max-w-xl mx-auto"
          >
            {t('services.speaking.priceNote')}
          </motion.p>
        </div>
      </section>

      <GetInTouch subject="Speaking / Training Inquiry — Jerry Yang" />

      {/* Back to Services link */}
      <section className="py-12 bg-[#faf9f5] text-center">
        <Link href="/services" className="text-sm text-[#141413]/60 hover:text-[#141413] transition-colors">
          ← {t('services.backToHub')}
        </Link>
      </section>

      <Footer />
    </>
  );
}
