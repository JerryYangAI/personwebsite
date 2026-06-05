'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Globe, Copy, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const CONTACT = {
  email: '2368082693@qq.com',
  wechat: '广哥在硅谷',
  website: 'jerryyang.ai',
};

interface GetInTouchProps {
  /** Optional mailto subject prefix */
  subject?: string;
}

/**
 * GetInTouch — bottom CTA block with email + wechat + website
 * Copy-to-clipboard buttons on email and wechat.
 */
export default function GetInTouch({ subject }: GetInTouchProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<'email' | 'wechat' | null>(null);

  function copyToClipboard(text: string, key: 'email' | 'wechat') {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    }
  }

  const mailto = subject
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT.email}`;

  return (
    <section className="py-24 bg-[#e8e6dc]/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#d97757] font-semibold">
            — {t('services.getInTouchLabel')} —
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-semibold text-[#141413] mb-3"
        >
          {t('services.getInTouchTitle')}
          <span className="text-[#d97757]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-lg text-[#141413]/65 italic font-serif mb-10 max-w-xl mx-auto"
        >
          {t('services.getInTouchSub')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#141413]/10 max-w-3xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#faf9f5] p-6 flex flex-col items-center"
          >
            <Mail size={18} className="text-[#d97757] mb-3" strokeWidth={1.6} />
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#141413]/45 font-semibold mb-2">
              EMAIL
            </div>
            <a
              href={mailto}
              className="text-sm text-[#141413] hover:text-[#d97757] transition-colors mb-3 break-all"
            >
              {CONTACT.email}
            </a>
            <button
              onClick={() => copyToClipboard(CONTACT.email, 'email')}
              className="inline-flex items-center gap-1.5 text-xs text-[#141413]/60 hover:text-[#141413] transition-colors"
            >
              {copied === 'email' ? (
                <>
                  <Check size={12} /> {t('services.copied')}
                </>
              ) : (
                <>
                  <Copy size={12} /> {t('services.copyButton')}
                </>
              )}
            </button>
          </motion.div>

          {/* WeChat */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="bg-[#faf9f5] p-6 flex flex-col items-center"
          >
            <MessageCircle size={18} className="text-[#6a9bcc] mb-3" strokeWidth={1.6} />
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#141413]/45 font-semibold mb-2">
              {t('services.wechatLabel')}
            </div>
            <div className="text-sm text-[#141413] mb-3">{CONTACT.wechat}</div>
            <button
              onClick={() => copyToClipboard(CONTACT.wechat, 'wechat')}
              className="inline-flex items-center gap-1.5 text-xs text-[#141413]/60 hover:text-[#141413] transition-colors"
            >
              {copied === 'wechat' ? (
                <>
                  <Check size={12} /> {t('services.copied')}
                </>
              ) : (
                <>
                  <Copy size={12} /> {t('services.copyButton')}
                </>
              )}
            </button>
          </motion.div>

          {/* Website */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.29 }}
            className="bg-[#faf9f5] p-6 flex flex-col items-center"
          >
            <Globe size={18} className="text-[#788c5d] mb-3" strokeWidth={1.6} />
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#141413]/45 font-semibold mb-2">
              WEB
            </div>
            <a
              href={`https://${CONTACT.website}`}
              className="text-sm text-[#141413] hover:text-[#788c5d] transition-colors mb-3"
            >
              {CONTACT.website}
            </a>
            <span className="text-xs text-[#141413]/40">{t('services.webSub')}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
