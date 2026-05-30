// ============================================================
// 文章数据源 · 所有展示在站点上的长文都在这里登记
// ============================================================
// 添加新文章：在数组开头插入一个新对象（按时间倒序排列）
// FeaturedReading（主页）和 /notes 索引页都从这里读取
// ============================================================

export type ArticleCategory = 'startup' | 'ai' | 'cs' | 'thinking'

export interface ArticleI18n {
  zh: string
  en: string
  ja: string
}

export interface Article {
  /** URL slug：用于路径，如 'founderplaybook' → /founderplaybook/ */
  slug: string
  /** 完整 URL 路径（带尾斜杠，匹配 Next.js trailingSlash: true） */
  url: string
  /** 分类，决定 /notes 页的分组 */
  category: ArticleCategory
  /** 发表日期 ISO 格式 'YYYY-MM-DD'（用于排序与显示） */
  date: string
  /** 卡片顶部 tag，比如 'ANTHROPIC · 2026' */
  tag: string
  /** 标题（中英日） */
  title: ArticleI18n
  /** 英文副标题或原文标题（一律保留以增加质感） */
  subtitle: ArticleI18n
  /** 卡片描述文案（中英日） */
  desc: ArticleI18n
  /** 卡片下方三条 mono 元信息，如 ['8 章', '约 35 分钟', '中文版'] */
  meta: { zh: [string, string, string]; en: [string, string, string]; ja: [string, string, string] }
  /** 视觉强调色，对应 dark 卡片上的橙/蓝/绿 */
  theme: 'orange' | 'blue' | 'green'
  /** 是否在主页 FeaturedReading 区块展示 */
  featured: boolean
}

// ============================================================
// 所有文章 · 按时间倒序排列
// ============================================================

export const articles: Article[] = [
  {
    slug: 'vit',
    url: '/vit/',
    category: 'ai',
    date: '2026-05-30',
    tag: 'ICLR 2021 · GOOGLE BRAIN',
    title: {
      zh: 'Vision Transformer：一张图片值 16×16 个词',
      en: 'An Image is Worth 16×16 Words: Vision Transformer',
      ja: 'Vision Transformer：一枚の画像は 16×16 個の単語に値する',
    },
    subtitle: {
      zh: 'Dosovitskiy et al. · 中文精校版',
      en: 'Dosovitskiy et al. · Curated Chinese Edition',
      ja: 'Dosovitskiy et al. · 中国語精製版',
    },
    desc: {
      zh: 'Google Brain 用一招极简的"把图像切成 16×16 的 Patch"，把为文字设计的 Transformer 直接搬到视觉，最终在大数据上超过 CNN。这是 CV 范式转移的起点。',
      en: 'Google Brain shows that a vanilla Transformer applied to image patches beats CNNs when pre-trained on enough data — the start of a paradigm shift in computer vision.',
      ja: 'Google Brain は、画像を 16×16 のパッチに切り、純粋な Transformer を視覚に適用することで CNN を超えました。CV のパラダイムシフトの始まりです。',
    },
    meta: {
      zh: ['9 章', '约 30 分钟', '含公式与图表'],
      en: ['9 chapters', '~30 min read', 'Math & figures'],
      ja: ['9 章', '約 30 分', '数式と図表'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'transformer',
    url: '/transformer/',
    category: 'ai',
    date: '2026-05-30',
    tag: 'NeurIPS 2017 · GOOGLE BRAIN',
    title: {
      zh: 'Attention Is All You Need：Transformer 论文详解',
      en: 'Attention Is All You Need: The Original Transformer Paper',
      ja: 'Attention Is All You Need：Transformer 論文の詳解',
    },
    subtitle: {
      zh: 'Vaswani et al. · 中文精校版',
      en: 'Vaswani et al. · Curated Chinese Edition',
      ja: 'Vaswani et al. · 中国語精製版',
    },
    desc: {
      zh: '2017 年 Google Brain 八位作者用一句"注意力就是你需要的全部"，彻底改写了序列建模。今天所有大语言模型——GPT、Claude、Gemini——的底层架构都来自这一篇。',
      en: 'The 2017 paper that rewrote AI: eight authors at Google Brain showed that "attention is all you need" — the foundation of GPT, Claude, Gemini, and every modern LLM.',
      ja: '2017 年の論文。Google Brain の 8 人の著者が「注意力こそすべて」と示し、現代の LLM 全ての基盤となりました。',
    },
    meta: {
      zh: ['9 章', '约 30 分钟', '含公式'],
      en: ['9 chapters', '~30 min read', 'With formulas'],
      ja: ['9 章', '約 30 分', '数式付き'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'backprop',
    url: '/backprop/',
    category: 'cs',
    date: '2026-05-30',
    tag: 'CS231n · STANFORD',
    title: {
      zh: '反向传播详解：从计算图直觉到向量化梯度',
      en: 'Backpropagation: From Circuits Intuition to Vectorized Gradients',
      ja: '逆伝播の詳解：回路の直観からベクトル化された勾配まで',
    },
    subtitle: {
      zh: 'CS231n · 中文精校版',
      en: 'CS231n · Curated Chinese Edition',
      ja: 'CS231n · 中国語精製版',
    },
    desc: {
      zh: 'Stanford CS231n 经典讲义。把神经网络看成实数电路：加法门是梯度分发器，最大门是梯度路由器，乘法门是梯度交换器。读完，你能"看见"梯度的流动。',
      en: 'The classic CS231n lecture. See neural networks as real-valued circuits: add-gates distribute, max-gates route, multiply-gates swap. After this, you can "see" gradients flow.',
      ja: 'CS231n の名講義。ニューラルネットを実数回路として捉える視点を養う。',
    },
    meta: {
      zh: ['9 章', '约 25 分钟', '含公式与代码'],
      en: ['9 chapters', '~25 min read', 'Math & code'],
      ja: ['9 章', '約 25 分', '数式とコード'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'founderplaybook',
    url: '/founderplaybook/',
    category: 'startup',
    date: '2026-05-25',
    tag: 'ANTHROPIC · 2026',
    title: {
      zh: '创始人手册：构建 AI 原生创业公司',
      en: "The Founder's Playbook: Building an AI-Native Startup",
      ja: '創業者ハンドブック：AIネイティブ・スタートアップを構築する',
    },
    subtitle: {
      zh: 'Anthropic · 中文精校版',
      en: 'Anthropic · Curated Chinese Edition',
      ja: 'Anthropic · 中国語精製版',
    },
    desc: {
      zh: 'Anthropic 出品的创业方法论：在 AI 时代，创业生命周期被重新划分为创意、MVP、发布、规模化四个阶段，每个阶段不再需要扩大团队或新一轮融资。',
      en: 'In 2026, the startup lifecycle has been rebooted into four stages — Idea, MVP, Launch, Scale — and each no longer requires a bigger team or new round.',
      ja: 'Anthropic による創業方法論。AI 時代の四段階と、それぞれで使うべき AI ツールを解説。',
    },
    meta: {
      zh: ['8 章', '约 35 分钟', '中文版'],
      en: ['8 chapters', '~35 min read', 'Chinese edition'],
      ja: ['8 章', '約 35 分', '中国語版'],
    },
    theme: 'orange',
    featured: true,
  },
]

// ============================================================
// 分类标签（用于 /notes 页面的分组显示）
// ============================================================

export const categoryLabels: Record<'zh' | 'en' | 'ja', Record<ArticleCategory, string>> = {
  zh: {
    startup: '创业与商业',
    ai: '人工智能',
    cs: '计算机科学',
    thinking: '思考与笔记',
  },
  en: {
    startup: 'Startup & Business',
    ai: 'Artificial Intelligence',
    cs: 'Computer Science',
    thinking: 'Essays & Notes',
  },
  ja: {
    startup: 'スタートアップ',
    ai: '人工知能',
    cs: 'コンピュータサイエンス',
    thinking: 'エッセイ',
  },
}

// ============================================================
// 工具函数
// ============================================================

/** 取出 featured 文章，按 date 倒序 */
export function getFeaturedArticles(): Article[] {
  return articles
    .filter((a) => a.featured)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** 按分类分组所有文章 */
export function getArticlesByCategory(): Record<ArticleCategory, Article[]> {
  const grouped: Record<ArticleCategory, Article[]> = {
    startup: [],
    ai: [],
    cs: [],
    thinking: [],
  }
  for (const a of articles) {
    grouped[a.category].push(a)
  }
  // 每个分类内按时间倒序
  for (const key of Object.keys(grouped) as ArticleCategory[]) {
    grouped[key].sort((a, b) => (a.date < b.date ? 1 : -1))
  }
  return grouped
}

/** 格式化日期：'2026-05-30' → '2026 年 5 月 30 日' / 'May 30, 2026' / '2026年5月30日' */
export function formatDate(iso: string, lang: 'zh' | 'en' | 'ja'): string {
  const [y, m, d] = iso.split('-')
  const monthNum = parseInt(m, 10)
  const dayNum = parseInt(d, 10)
  if (lang === 'en') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[monthNum - 1]} ${dayNum}, ${y}`
  }
  if (lang === 'ja') {
    return `${y}年${monthNum}月${dayNum}日`
  }
  return `${y} 年 ${monthNum} 月 ${dayNum} 日`
}
