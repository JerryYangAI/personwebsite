'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Briefcase, Code, Mic } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import PastClients from '@/components/services/PastClients';
import GetInTouch, { CONTACT } from '@/components/services/GetInTouch';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * /services/cooperation — Business Cooperation detail page
 */
export default function CooperationPage() {
  const { t } = useLanguage();

  const types = [
    {
      icon: Mic,
      tag: 'TYPE 01',
      title: t('services.business.type1Title'),
      scope: t('services.business.type1Scope'),
      delivers: t('services.business.type1Delivers'),
    },
    {
      icon: Code,
      tag: 'TYPE 02',
      title: t('services.business.type2Title'),
      scope: t('services.business.type2Scope'),
      delivers: t('services.business.type2Delivers'),
    },
  ];

  const reach = [
    { num: '3万+', label: t('services.business.reach1Label') },
    { num: '5万+', label: t('services.business.reach2Label') },
    { num: 'Stanford', label: t('services.business.reach3Label') },
    { num: 'SV+CN', label: t('services.business.reach4Label') },
  ];

  const cases = [
    { name: '品川光医', caption: 'CO-FOUNDER · AI' },
    { name: 'StarRides', caption: 'EX-CEO' },
    { name: 'Stanford AI', caption: 'GRADUATE RESEARCH' },
  ];

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    'Business Cooperation Inquiry — Jerry Yang'
  )}`;

  return (
    <>
      <Navigation />

      <ServiceHero
        breadcrumb={['Home', 'Services', t('services.business.title')]}
        sectionLabel={'BUSINESS COOPERATION · ' + t('services.business.title')}
        title={t('services.business.heroTitle')}
        subtitle={t('services.business.heroSub')}
        accent="blue"
      />

      {/* Positioning quote */}
      <section className="py-10 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-l-2 border-[#6a9bcc] pl-6 max-w-3xl"
          >
            <p className="text-lg md:text-xl font-serif italic text-[#141413]/85 leading-relaxed">
              {t('services.business.positioning')}
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-[#6a9bcc] font-semibold">
              — Jerry Yang
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 cooperation types */}
      <section className="py-16 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/55 font-semibold">
              — {t('services.business.typesHeading')} —
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#141413]">
              {t('services.business.typesTitle')}
              <span className="text-[#6a9bcc]">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {types.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.tag}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-[#e8e6dc]/40 p-8 md:p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#6a9bcc]" />

                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={18} className="text-[#6a9bcc]" strokeWidth={1.7} />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#6a9bcc] font-semibold">
                      {type.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-[#141413] mb-4">
                    {type.title}
                  </h3>

                  <div className="mb-4">
                    <div className="text-[10px] tracking-[0.18em] uppercase text-[#141413]/45 font-semibold mb-2">
                      {t('services.business.scopeLabel')}
                    </div>
                    <p className="text-sm text-[#141413]/75 leading-relaxed">{type.scope}</p>
                  </div>

                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-[#141413]/45 font-semibold mb-2">
                      {t('services.business.deliversLabel')}
                    </div>
                    <p className="text-sm text-[#141413]/75 leading-relaxed">{type.delivers}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reach grid */}
      <section className="py-16 bg-[#faf9f5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/55 font-semibold">
              — {t('services.business.reachHeading')} —
            </span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#141413]/10">
            {reach.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-[#faf9f5] p-6 text-center"
              >
                <div className="font-serif italic text-3xl md:text-4xl font-bold text-[#6a9bcc] mb-1">
                  {r.num}
                </div>
                <div className="text-xs text-[#141413]/55">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PastClients clients={cases} title={t('services.business.pastCasesLabel')} cols={3} />

      {/* Pricing section */}
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
            className="font-serif italic font-bold text-5xl md:text-6xl text-[#6a9bcc] mb-4"
          >
            {t('services.business.price')}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-[#141413]/55 italic max-w-xl mx-auto mb-8"
          >
            {t('services.business.priceNote')}
          </motion.p>

          <a
            href={mailto}
            className="inline-flex items-center justify-center gap-2 bg-[#141413] text-[#faf9f5] px-7 py-3.5 text-sm font-medium hover:bg-[#6a9bcc] transition-colors"
          >
            <Mail size={16} strokeWidth={1.8} />
            {t('services.business.ctaQuote')}
          </a>
        </div>
      </section>

      <GetInTouch subject="Business Cooperation Inquiry — Jerry Yang" />

      {/* Back to hub */}
      <section className="py-12 bg-[#faf9f5] text-center">
        <Link href="/services" className="text-sm text-[#141413]/60 hover:text-[#141413] transition-colors">
          ← {t('services.backToHub')}
        </Link>
      </section>

      <Footer />
    </>
  );
}
