'use client'

import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Sparkles, Layers } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getFeaturedArticles, type Article } from '../lib/articles'

// 多语言区块文案
const SECTION_COPY = {
  zh: {
    sectionLabel: '推荐阅读',
    sectionTitle: '深度文章 · Featured Writing',
    sectionSubtitle: '我读过、改写过、相信值得分享的长文。中文精排，方便阅读与转发。',
    cta: '阅读全文',
    viewAll: '查看全部笔记',
  },
  en: {
    sectionLabel: 'Featured Reading',
    sectionTitle: 'Long-Form Writing',
    sectionSubtitle: 'Essays I have read, translated, or curated — worth your time.',
    cta: 'Read article',
    viewAll: 'View all notes',
  },
  ja: {
    sectionLabel: 'おすすめ記事',
    sectionTitle: '長文・Featured Writing',
    sectionSubtitle: '私が読み、書き直し、共有する価値があると信じる長文。',
    cta: '記事を読む',
    viewAll: 'すべて見る',
  },
} as const

// 主题色映射（Anthropic 风格 dark 卡片上的强调色）
const THEME = {
  orange: { accent: '#d97757', glow: 'rgba(217,119,87,.35)', glow2: 'rgba(106,155,204,.15)' },
  blue: { accent: '#6a9bcc', glow: 'rgba(106,155,204,.35)', glow2: 'rgba(217,119,87,.15)' },
  green: { accent: '#788c5d', glow: 'rgba(120,140,93,.35)', glow2: 'rgba(217,119,87,.15)' },
} as const

const ArticleCard = ({
  article,
  ctaLabel,
  lang,
}: {
  article: Article
  ctaLabel: string
  lang: 'zh' | 'en' | 'ja'
}) => {
  const theme = THEME[article.theme]
  return (
    <motion.a
      href={article.url}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group block"
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl bg-[#141413] text-[#faf9f5] shadow-2xl transition-shadow duration-500"
        style={{ boxShadow: '0 8px 30px -8px rgba(0,0,0,0.25)' }}
      >
        {/* 装饰光晕（颜色随主题切换） */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: theme.glow }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: theme.glow2 }}
        />

        <div className="relative p-8 md:p-9 flex flex-col h-full">
          {/* 顶部 tag 与 icon */}
          <div className="flex items-start justify-between mb-6">
            <span
              className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] border rounded-full text-white/80"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              {article.tag}
            </span>
            <div className="flex items-center gap-2" style={{ color: theme.accent }}>
              <Layers className="w-5 h-5" strokeWidth={1.5} />
              <BookOpen className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </div>

          {/* 标题与副标题 */}
          <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 text-white">
            {article.title[lang]}
          </h3>
          <p className="text-xs italic text-white/50 mb-4">{article.subtitle[lang]}</p>

          {/* 描述 */}
          <p className="text-sm text-white/75 leading-relaxed mb-6 flex-grow">
            {article.desc[lang]}
          </p>

          {/* 三条元信息（mono 字体） */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/40 font-mono mb-5">
            {article.meta[lang].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="inline-flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all duration-300"
            style={{ color: theme.accent }}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

const FeaturedReading = () => {
  const { language } = useLanguage()
  const lang = (['zh', 'en', 'ja'].includes(language) ? language : 'zh') as 'zh' | 'en' | 'ja'
  const t = SECTION_COPY[lang]
  const featuredArticles = getFeaturedArticles()

  // 没有 featured 文章则不渲染整个区块
  if (featuredArticles.length === 0) return null

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.sectionTitle}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t.sectionSubtitle}</p>
        </motion.div>

        {/* 文章卡片网格：移动端 1 列、平板及以上 2 列 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <ArticleCard article={article} ctaLabel={t.cta} lang={lang} />
            </motion.div>
          ))}
        </div>

        {/* 查看全部笔记 → /notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/notes/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium border-b border-gray-300 hover:border-gray-900 pb-1"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedReading
