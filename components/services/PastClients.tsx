'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export interface ClientItem {
  name: string;
  caption?: string;
}

interface PastClientsProps {
  clients: ClientItem[];
  title?: string;
  cols?: 3 | 4;
}

/**
 * PastClients — text-based logo wall (no images required initially)
 * Each client renders as: name (large) + optional caption (small)
 * Easy to swap to actual logos later by mapping name → <Image />
 */
export default function PastClients({ clients, title, cols = 4 }: PastClientsProps) {
  const { t } = useLanguage();
  const heading = title || t('services.pastClientsLabel');

  return (
    <section className="py-20 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#141413]/60 font-medium">
            — {heading} —
          </span>
        </motion.div>

        <div className={`grid grid-cols-2 ${cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-px bg-[#141413]/10`}>
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-[#faf9f5] py-10 px-6 flex flex-col items-center justify-center text-center min-h-[120px]"
            >
              <div className="text-lg md:text-xl font-semibold text-[#141413]">
                {c.name}
              </div>
              {c.caption && (
                <div className="mt-1 text-[10px] tracking-[0.18em] uppercase text-[#141413]/45 font-medium">
                  {c.caption}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-xs text-[#141413]/40 italic"
        >
          {t('services.pastClientsFooter')}
        </motion.div>
      </div>
    </section>
  );
}
