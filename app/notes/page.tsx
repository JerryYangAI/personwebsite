'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Rocket,
  Cpu,
  Brain,
  PenLine,
  BookOpen,
} from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '../../contexts/LanguageContext'
import {
  getArticlesByCategory,
  categoryLabels,
  formatDate,
  type ArticleCategory,
  type Article,
} from '../../lib/articles'

// 页面文案
const PAGE_COPY = {
  zh: {
    title: '我的笔记',
    subtitle: 'Notes & Writings',
    intro:
      '这里收录我读过、改写过、相信值得分享的长文。覆盖创业方法论、AI 技术、计算机科学，以及思考随笔。持续更新。',
    backHome: '返回首页',
    empty: '该分类暂无文章',
    readMore: '阅读',
  },
  en: {
    title: 'Notes & Writings',
    subtitle: 'Curated Long-Form Reading',
    intro:
      'Long-form pieces I have read, translated, or curated. Covering startups, AI, computer science, and reflections.',
    backHome: 'Back to home',
    empty: 'No articles in this category yet',
    readMore: 'Read',
  },
  ja: {
    title: 'ノート',
    subtitle: 'Notes & Writings',
    intro:
      '私が読み、翻訳し、共有する価値があると信じる長文。スタートアップ、AI、コンピュータサイエンス、エッセイをカバー。',
    backHome: 'ホームに戻る',
    empty: 'この分類にはまだ記事がありません',
    readMore: '読む',
  },
} as const

// 分类对应的图标与颜色
const CATEGORY_VISUAL: Record<
  ArticleCategory,
  { icon: typeof Rocket; color: string; bg: string; border: string }
> = {
  startup: {
    icon: Rocket,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-l-orange-500',
  },
  ai: {
    icon: Brain,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-l-purple-500',
  },
  cs: {
    icon: Cpu,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-l-blue-500',
  },
  thinking: {
    icon: PenLine,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-l-green-500',
  },
}

const ArticleRow = ({
  article,
  lang,
  readMoreLabel,
}: {
  article: Article
  lang: 'zh' | 'en' | 'ja'
  readMoreLabel: string
}) => {
  return (
    <motion.a
      href={article.url}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ x: 4 }}
      className="group block bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300"
    >
      {/* 顶部 tag + 日期 */}
      <div className="flex items-center gap-3 mb-3 text-xs">
        <span className="font-mono tracking-wider text-gray-500">{article.tag}</span>
        <span className="text-gray-300">·</span>
        <span className="inline-flex items-center gap-1 text-gray-500">
          <Calendar className="w-3 h-3" />
          {formatDate(article.date, lang)}
        </span>
      </div>

      {/* 标题 */}
      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
        {article.title[lang]}
      </h4>
      <p className="text-xs italic text-gray-400 mb-3">{article.subtitle[lang]}</p>

      {/* 描述 */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.desc[lang]}</p>

      {/* 底部：元信息 + CTA */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-wrap gap-x-3 text-[11px] text-gray-400 font-mono">
          {article.meta[lang].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
          {readMoreLabel}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.a>
  )
}

const NotesPage = () => {
  const { language } = useLanguage()
  const lang = (['zh', 'en', 'ja'].includes(language) ? language : 'zh') as 'zh' | 'en' | 'ja'
  const t = PAGE_COPY[lang]
  const grouped = getArticlesByCategory()
  const labels = categoryLabels[lang]

  // 按固定顺序展示分类（即使为空也保留为占位，以便用户感受到栏目存在）
  const orderedCategories: ArticleCategory[] = ['startup', 'cs', 'ai', 'thinking']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-medium">{t.backHome}</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <BookOpen className="w-6 h-6 text-primary-600" />
                {t.title}
              </h1>
              <p className="text-sm text-gray-500">{t.subtitle}</p>
            </div>
            <div className="w-24" />{/* spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* 介绍段 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">{t.intro}</p>
          </motion.section>

          {/* 分类区块 */}
          {orderedCategories.map((cat, catIdx) => {
            const list = grouped[cat]
            const visual = CATEGORY_VISUAL[cat]
            const Icon = visual.icon

            return (
              <motion.section
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIdx * 0.05 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                {/* 分类标题 */}
                <div className="flex items-center gap-3 mb-6 border-l-4 pl-4 py-1 border-l-gray-900">
                  <div className={`p-2 rounded-lg ${visual.bg}`}>
                    <Icon className={`w-5 h-5 ${visual.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{labels[cat]}</h3>
                  <span className="ml-auto text-sm text-gray-400 font-mono">
                    {list.length} {lang === 'zh' ? '篇' : list.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                {/* 文章列表 */}
                {list.length > 0 ? (
                  <div className="grid gap-4">
                    {list.map((article) => (
                      <ArticleRow
                        key={article.slug}
                        article={article}
                        lang={lang}
                        readMoreLabel={t.readMore}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white/50 rounded-xl p-8 text-center text-gray-400 text-sm border border-dashed border-gray-300">
                    {t.empty}
                  </div>
                )}
              </motion.section>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default NotesPage
