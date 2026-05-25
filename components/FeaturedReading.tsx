'use client'

import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Sparkles, Layers } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

// 多语言文案（内联，避免修改 lib/i18n.ts）
const COPY = {
  zh: {
    sectionLabel: '推荐阅读',
    sectionTitle: '深度文章 · Featured Writing',
    sectionSubtitle: '我读过、改写过、相信值得分享的长文。中文精排，方便阅读与转发。',
    article: {
      tag: 'ANTHROPIC · 2026',
      title: '创始人手册：构建 AI 原生创业公司',
      subtitle: "The Founder's Playbook: Building an AI-Native Startup",
      desc: 'Anthropic 出品的创业方法论：在 AI 时代，创业生命周期被重新划分为创意、MVP、发布、规模化四个阶段，每个阶段不再需要扩大团队或新一轮融资。本文是中文精排版。',
      meta1: '8 章',
      meta2: '约 35 分钟',
      meta3: '中文版',
      cta: '阅读全文',
    },
  },
  en: {
    sectionLabel: 'Featured Reading',
    sectionTitle: 'Long-Form Writing',
    sectionSubtitle: 'Essays I have read, translated, or curated — worth your time.',
    article: {
      tag: 'ANTHROPIC · 2026',
      title: "The Founder's Playbook: Building an AI-Native Startup",
      subtitle: 'Anthropic · Chinese curated edition',
      desc: 'In 2026, the startup lifecycle has been rebooted into four stages — Idea, MVP, Launch, Scale — and each no longer requires a bigger team or new round. A Chinese curated edition.',
      meta1: '8 chapters',
      meta2: '~35 min read',
      meta3: 'Chinese edition',
      cta: 'Read article',
    },
  },
  ja: {
    sectionLabel: 'おすすめ記事',
    sectionTitle: '長文・Featured Writing',
    sectionSubtitle: '私が読み、書き直し、共有する価値があると信じる長文。',
    article: {
      tag: 'ANTHROPIC · 2026',
      title: '創業者ハンドブック：AIネイティブ・スタートアップを構築する',
      subtitle: "The Founder's Playbook · 中国語精製版",
      desc: 'Anthropic による創業方法論。AI 時代の四段階（Idea / MVP / Launch / Scale）と、それぞれで使うべき AI ツールを解説。中国語精製版です。',
      meta1: '8 章',
      meta2: '約 35 分',
      meta3: '中国語版',
      cta: '記事を読む',
    },
  },
} as const

const FeaturedReading = () => {
  const { language } = useLanguage()
  const t = COPY[language] ?? COPY.zh
  const a = t.article

  return (
    <section id="reading" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-7xl mx-auto">
        {/* 章节标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-primary-50 border border-primary-100">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-medium text-primary-700 tracking-wider">
              {t.sectionLabel}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* 文章卡片 */}
        <motion.a
          href="/founderplaybook/"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group block max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#141413] text-[#faf9f5] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(217,119,87,0.4)] transition-all duration-500">
            {/* 装饰光晕 */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#d97757] opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#6a9bcc] opacity-15 blur-3xl pointer-events-none" />

            <div className="relative grid md:grid-cols-5 gap-0">
              {/* 左侧视觉块 */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
                <div>
                  <span className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] border border-white/30 rounded-full text-white/80 mb-6">
                    {a.tag}
                  </span>
                  <div className="flex items-center gap-3 text-[#d97757]">
                    <Layers className="w-8 h-8" strokeWidth={1.5} />
                    <BookOpen className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mt-8 space-y-1 text-xs text-white/50 font-mono">
                  <div>{a.meta1}</div>
                  <div>{a.meta2}</div>
                  <div>{a.meta3}</div>
                </div>
              </div>

              {/* 右侧文字块 */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2 text-white">
                  {a.title}
                </h3>
                <p className="text-sm italic text-white/50 mb-5">{a.subtitle}</p>
                <p className="text-base text-white/80 leading-relaxed mb-8">
                  {a.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-[#d97757] font-medium group-hover:gap-3 transition-all duration-300">
                  <span>{a.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}

export default FeaturedReading
