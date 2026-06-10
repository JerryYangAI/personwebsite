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
    slug: 'fable-mythos',
    url: '/fable-mythos/',
    category: 'ai',
    date: '2026-06-09',
    tag: 'ANTHROPIC · 2026/06/09',
    title: {
      zh: 'Claude Fable 5 与 Mythos 5：同一个模型的双胞胎',
      en: 'Claude Fable 5 and Claude Mythos 5',
      ja: 'Claude Fable 5 と Mythos 5：同じモデルの双子',
    },
    subtitle: {
      zh: 'Anthropic 官方公告 · 中文精校版',
      en: 'Anthropic Announcement · Curated Chinese Edition',
      ja: 'Anthropic 公式発表 · 中国語精製版',
    },
    desc: {
      zh: 'Mythos-class 模型的首次普遍发布。Fable 5（有保护，所有人可用）+ Mythos 5（去除部分保护，只给 Glasswing 合作伙伴）。Stripe 一天完成两个月的 Ruby 代码迁移，Mythos 5 加速药物设计 10 倍，提出被独立验证的新生物学假说。价格腰斩到 $10/$50。',
      en: "First general release of Mythos-class. Fable 5 (with safeguards, available to all) + Mythos 5 (some safeguards lifted, Glasswing partners only). Stripe: 2 months of Ruby migration in 1 day. Mythos 5: 10x drug design, independently validated novel biology hypotheses. Half the price.",
      ja: 'Mythos クラスモデルの初の一般リリース。Fable 5（保護あり、全員利用可能）+ Mythos 5（一部保護解除、Glasswing パートナーのみ）。',
    },
    meta: {
      zh: ['9 章', '约 35 分钟', 'Anthropic 公告'],
      en: ['9 chapters', '~35 min read', 'Anthropic announcement'],
      ja: ['9 章', '約 35 分', 'Anthropic 発表'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'glasswing-expand',
    url: '/glasswing-expand/',
    category: 'ai',
    date: '2026-06-02',
    tag: 'ANTHROPIC · 2026/06/02',
    title: {
      zh: 'Project Glasswing 扩展：从 50 到 200 个组织',
      en: 'Expanding Project Glasswing',
      ja: 'Project Glasswing の拡大：50 から 200 組織へ',
    },
    subtitle: {
      zh: 'Anthropic 官方公告 · 中文精校版',
      en: 'Anthropic Announcement · Curated Chinese Edition',
      ja: 'Anthropic 公式発表 · 中国語精製版',
    },
    desc: {
      zh: '10 天内 Glasswing 从 50 个合作伙伴扩展到 150 个新组织，覆盖 15+ 国家，加入电力、水务、医疗、通信、硬件等关键基础设施。Anthropic 直白说——"廉价高能力 AI 网络武器就在眼前"。一份让我们看清"AI 网络安全新阶段"的战略宣言。',
      en: 'Glasswing grows 3x in 10 days: from 50 partners to 150 new organizations across 15+ countries. Now covers power, water, healthcare, communications, hardware. Anthropic explicitly warns "cheap, powerful AI cyber capabilities are around the corner."',
      ja: '10 日で Glasswing が 50 パートナーから 150 組織に 3 倍拡大。15+ カ国の電力・水道・医療・通信・ハードウェアをカバー。',
    },
    meta: {
      zh: ['6 章', '约 15 分钟', 'Anthropic 公告'],
      en: ['6 chapters', '~15 min read', 'Anthropic announcement'],
      ja: ['6 章', '約 15 分', 'Anthropic 発表'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'glasswing-initial',
    url: '/glasswing-initial/',
    category: 'ai',
    date: '2026-05-22',
    tag: 'ANTHROPIC · 2026/05/22',
    title: {
      zh: 'Project Glasswing：第一份月度更新',
      en: 'Project Glasswing: An Initial Update',
      ja: 'Project Glasswing：初の月次アップデート',
    },
    subtitle: {
      zh: 'Anthropic 官方公告 · 中文精校版',
      en: 'Anthropic Announcement · Curated Chinese Edition',
      ja: 'Anthropic 公式発表 · 中国語精製版',
    },
    desc: {
      zh: '约 50 个合作伙伴用 Claude Mythos Preview 一个月里发现超过 1 万个高危/严重漏洞。Cloudflare 一家 2000 个 bug，Mozilla Firefox 271 个（是 Opus 4.6 的 10 倍）。最重要的洞察——"找漏洞已经不再是瓶颈，修补才是"。AI 网络安全的新时代开始了。',
      en: '~50 partners using Claude Mythos Preview found 10,000+ high/critical vulnerabilities in 1 month. Cloudflare: 2,000 bugs. Mozilla Firefox: 271 bugs (10x Opus 4.6). Key insight: "Finding bugs is no longer the bottleneck — patching is."',
      ja: '約 50 パートナーが Claude Mythos Preview を使い 1 ヶ月で 1 万件以上の高/重大脆弱性を発見。Cloudflare 2000 件、Mozilla Firefox 271 件（Opus 4.6 の 10 倍）。',
    },
    meta: {
      zh: ['8 章', '约 20 分钟', 'Anthropic 公告'],
      en: ['8 chapters', '~20 min read', 'Anthropic announcement'],
      ja: ['8 章', '約 20 分', 'Anthropic 発表'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'adolescence',
    url: '/adolescence/',
    category: 'thinking',
    date: '2026-06-05',
    tag: 'DARIO AMODEI · ANTHROPIC · 2026',
    title: {
      zh: '技术的青春期',
      en: 'The Adolescence of Technology',
      ja: '技術の思春期',
    },
    subtitle: {
      zh: 'Dario Amodei · 中文精校版',
      en: 'Dario Amodei · Curated Chinese Edition',
      ja: 'Dario Amodei · 中国語精製版',
    },
    desc: {
      zh: 'Anthropic CEO Dario Amodei 2026 年 1 月长文。系统性回答——如果我们能造出"数据中心里的天才之国"，人类要怎么活过这场技术的青春期？五大风险、五套防御、一份毫不掩饰的国家安全级警告。',
      en: "Anthropic CEO Dario Amodei's January 2026 essay. Systematically confronts the risks of powerful AI — autonomy, destruction, power seizure, economic disruption, indirect effects — and what defenses we need.",
      ja: 'Anthropic CEO Dario Amodei による 2026 年 1 月の長文。「データセンターの天才の国」がもたらす 5 つのリスクと防衛策。',
    },
    meta: {
      zh: ['9 章', '约 45 分钟', '思想类'],
      en: ['9 chapters', '~45 min read', 'Thinking piece'],
      ja: ['9 章', '約 45 分', '思想'],
    },
    theme: 'green',
    featured: true,
  },
  {
    slug: 'loving-grace',
    url: '/loving-grace/',
    category: 'thinking',
    date: '2026-06-05',
    tag: 'DARIO AMODEI · ANTHROPIC · 2024',
    title: {
      zh: '充满爱意的机器',
      en: 'Machines of Loving Grace',
      ja: '愛情に満ちた機械',
    },
    subtitle: {
      zh: 'Dario Amodei · 中文精校版',
      en: 'Dario Amodei · Curated Chinese Edition',
      ja: 'Dario Amodei · 中国語精製版',
    },
    desc: {
      zh: 'Anthropic CEO Dario Amodei 2024 年 10 月长文。第一次系统、毫不掩饰地写下"那个好的可能"——压缩的 21 世纪、消除大多数癌症、人类寿命翻倍、心理疾病几乎被治愈、贫困终结。读完这篇，才理解为什么 Anthropic 还在做这件事。',
      en: "Anthropic CEO Dario Amodei's October 2024 essay. The first systematic vision of an upside future — compressed 21st century, 95% cancer reduction, doubled lifespan, mental illness cured, poverty ended. Why Anthropic still does this.",
      ja: 'Anthropic CEO Dario Amodei による 2024 年 10 月の長文。AI が正しく機能した場合の希望のビジョン——「圧縮された 21 世紀」、ガンの消滅、150 歳寿命、貧困の終結。',
    },
    meta: {
      zh: ['9 章', '约 40 分钟', '思想类'],
      en: ['9 chapters', '~40 min read', 'Thinking piece'],
      ja: ['9 章', '約 40 分', '思想'],
    },
    theme: 'green',
    featured: true,
  },
  {
    slug: 'ai-builds-itself',
    url: '/ai-builds-itself/',
    category: 'ai',
    date: '2026-06-04',
    tag: 'ANTHROPIC INSTITUTE · 2026',
    title: {
      zh: '当 AI 开始自己造自己',
      en: 'When AI Builds Itself',
      ja: 'AI が自分自身を作り始めるとき',
    },
    subtitle: {
      zh: 'Marina Favaro & Jack Clark · 中文精校版',
      en: 'Marina Favaro & Jack Clark · Curated Chinese Edition',
      ja: 'Marina Favaro & Jack Clark · 中国語精製版',
    },
    desc: {
      zh: 'Anthropic 研究院首次公开内部数据——工程师人均代码量两年涨 8 倍、>80% 代码由 Claude 写、76% 开放式任务成功率、64% 击败人类下一步判断。关于"AI 自我递归改进"的第一份系统证据。',
      en: 'Anthropic Institute reveals internal data for the first time: 8x more code merged per engineer in two years, >80% of code authored by Claude, 76% open-ended task success. The first systematic evidence of recursive self-improvement.',
      ja: 'Anthropic 研究院が初めて内部データを公開。エンジニアあたりのコード量が 2 年で 8 倍、コードの 80% 以上を Claude が執筆。再帰的自己改善の最初の体系的証拠。',
    },
    meta: {
      zh: ['9 章', '约 30 分钟', '含内部数据'],
      en: ['9 chapters', '~30 min read', 'Internal data'],
      ja: ['9 章', '約 30 分', '内部データ'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'corruption',
    url: '/corruption/',
    category: 'thinking',
    date: '2026-06-04',
    tag: 'NBER 1993 · HARVARD & UCHICAGO',
    title: {
      zh: '腐败：制度结构如何决定贿赂水平',
      en: 'Corruption: How Institutional Structure Determines Bribe Levels',
      ja: '腐敗：制度構造がいかに賄賂水準を決めるか',
    },
    subtitle: {
      zh: 'Shleifer & Vishny · 中文精校版',
      en: 'Shleifer & Vishny · Curated Chinese Edition',
      ja: 'Shleifer & Vishny · 中国語精製版',
    },
    desc: {
      zh: 'Shleifer 与 Vishny 1993 年 NBER 经典。用工业组织理论解释为什么有些国家腐败"少而可控"，有些"无穷而毁灭性"——答案藏在政府结构里：联合垄断、独立垄断、还是竞争。',
      en: 'Shleifer & Vishny 1993 NBER classic. Uses industrial organization theory to explain why corruption is "bounded" in some countries but "devastating" in others—joint monopoly vs independent monopolists vs competition.',
      ja: 'Shleifer と Vishny の 1993 年 NBER 古典論文。産業組織論を使って、なぜある国の腐敗は「制御可能」で、ある国の腐敗は「破壊的」なのかを説明。',
    },
    meta: {
      zh: ['9 章', '约 25 分钟', '思想类'],
      en: ['9 chapters', '~25 min read', 'Thinking piece'],
      ja: ['9 章', '約 25 分', '思想'],
    },
    theme: 'green',
    featured: true,
  },
  {
    slug: 'naval-ai-revolution',
    url: '/naval-ai-revolution/',
    category: 'thinking',
    date: '2026-06-04',
    tag: 'NAVAL PODCAST · 2026',
    title: {
      zh: '纳瓦尔：AI 工业革命',
      en: 'Naval: The AI Industrial Revolution',
      ja: 'ナバル：AI 産業革命',
    },
    subtitle: {
      zh: 'Naval Ravikant 主持 · 中文精校版',
      en: 'Hosted by Naval Ravikant · Curated Chinese Edition',
      ja: 'Naval Ravikant 司会 · 中国語精製版',
    },
    desc: {
      zh: '2026 年 6 月纳瓦尔与三位前沿创始人（Vercel/Boom 超音速/Science Corp）的圆桌对谈中文精校版。从软件工厂、垂直整合、监管前沿到自主公司——四个站在科技最前沿的人现场拆解 AI 工业革命到底在改变什么。',
      en: 'Naval Ravikant in conversation with three frontier founders (Vercel, Boom Supersonic, Science Corp) on the new means of production. From software factories to regulatory frontier and the autonomous company.',
      ja: '2026 年 6 月、ナバル・ラビカントが Vercel、Boom Supersonic、Science Corp の創業者 3 名と AI 産業革命について語ったポッドキャストの中国語精製版。',
    },
    meta: {
      zh: ['10 章', '约 30 分钟', '思想类'],
      en: ['10 chapters', '~30 min read', 'Thinking piece'],
      ja: ['10 章', '約 30 分', '思想'],
    },
    theme: 'green',
    featured: true,
  },
  {
    slug: 'decaf',
    url: '/decaf/',
    category: 'cs',
    date: '2026-06-03',
    tag: 'ICML 2014 · UC BERKELEY',
    title: {
      zh: 'DeCAF：迁移学习的诞生',
      en: 'DeCAF: A Deep Convolutional Activation Feature for Generic Visual Recognition',
      ja: 'DeCAF：転移学習の誕生',
    },
    subtitle: {
      zh: 'Donahue et al. · 中文精校版',
      en: 'Donahue et al. · Curated Chinese Edition',
      ja: 'Donahue et al. · 中国語精製版',
    },
    desc: {
      zh: '2013 年 Berkeley 团队证明 ImageNet 预训练的 AlexNet 中间层激活是通用视觉特征——奠定了今天所有"预训练加迁移"范式的根基。配套开源框架后来演化成了 Caffe。',
      en: 'The 2013 Berkeley paper that showed mid-layer activations of ImageNet-pretrained AlexNet are universal visual features—founding the pre-train + transfer paradigm that powers all modern AI.',
      ja: '2013 年 Berkeley の論文。ImageNet で事前学習した AlexNet の中間層活性化が汎用視覚特徴になることを示し、現代 AI の「事前学習 + 転移」パラダイムを築いた。',
    },
    meta: {
      zh: ['8 章', '约 20 分钟', '含可视化'],
      en: ['8 chapters', '~20 min read', 'With visualizations'],
      ja: ['8 章', '約 20 分', '可視化付き'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'offshelf',
    url: '/offshelf/',
    category: 'cs',
    date: '2026-06-03',
    tag: 'CVPR 2014 WORKSHOP · KTH',
    title: {
      zh: 'CNN Features Off-the-shelf：通用特征的震撼基线',
      en: 'CNN Features off-the-shelf: an Astounding Baseline for Recognition',
      ja: 'CNN Features Off-the-shelf：汎用特徴という驚異的なベースライン',
    },
    subtitle: {
      zh: 'Sharif Razavian et al. · 中文精校版',
      en: 'Sharif Razavian et al. · Curated Chinese Edition',
      ja: 'Sharif Razavian et al. · 中国語精製版',
    },
    desc: {
      zh: '2014 年 KTH 团队把 OverFeat 现成特征加简单 SVM，在 12 个视觉任务上全面碾压专门设计的方法。从此设定了"任何新方法必须先打过的基线"——彻底改变了视觉研究的工作文化。',
      en: 'In 2014 KTH used OverFeat off-the-shelf features + linear SVM on 12 vision tasks, beating specialized methods on nearly all. Set the "strong baseline everyone must beat" — reshaping vision research culture.',
      ja: '2014 年 KTH の論文。OverFeat の既成特徴と単純な SVM を 12 個の視覚タスクに適用、専用手法をほぼ全て打ち負かす。「誰もが超えるべき基線」を設定し、研究文化を変えた。',
    },
    meta: {
      zh: ['8 章', '约 20 分钟', '含对话式叙述'],
      en: ['8 chapters', '~20 min read', 'Conversational style'],
      ja: ['8 章', '約 20 分', '対話形式'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'resnet',
    url: '/resnet/',
    category: 'cs',
    date: '2026-06-02',
    tag: 'CVPR 2016 · MSRA',
    title: {
      zh: 'ResNet：让深度真正深起来的那篇论文',
      en: 'Deep Residual Learning for Image Recognition',
      ja: 'ResNet：本当に深いネットワークを可能にした論文',
    },
    subtitle: {
      zh: 'Kaiming He et al. · 中文精校版',
      en: 'Kaiming He et al. · Curated Chinese Edition',
      ja: 'Kaiming He et al. · 中国語精製版',
    },
    desc: {
      zh: '2015 年 Kaiming He 团队用「学残差，不学函数」一招打破深度天花板。152 层 ResNet 赢下 ILSVRC 2015 五项冠军。今天 Transformer、扩散模型、AlphaFold 里那根快捷连接都是它的后代。',
      en: 'Kaiming He et al. shattered the depth ceiling with one idea — learn the residual, not the function. ResNet won five ILSVRC 2015 titles, and its skip connection lives in every Transformer today.',
      ja: 'Kaiming He らが「残差を学習する」というアイデアで深さの限界を打ち破った 2015 年の論文。今日の Transformer のスキップ接続もここから。',
    },
    meta: {
      zh: ['8 章', '约 25 分钟', '含公式'],
      en: ['8 chapters', '~25 min read', 'With formulas'],
      ja: ['8 章', '約 25 分', '数式付き'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'kaiming',
    url: '/kaiming/',
    category: 'cs',
    date: '2026-06-02',
    tag: 'ICCV 2015 · MSRA',
    title: {
      zh: 'PReLU 与 Kaiming 初始化：第一次超越人类',
      en: 'Delving Deep into Rectifiers: Surpassing Human-Level Performance',
      ja: 'PReLU と Kaiming 初期化：初めて人間を超えた日',
    },
    subtitle: {
      zh: 'Kaiming He et al. · 中文精校版',
      en: 'Kaiming He et al. · Curated Chinese Edition',
      ja: 'Kaiming He et al. · 中国語精製版',
    },
    desc: {
      zh: '2015 年 Kaiming He 团队用两个改进——PReLU 加上 Kaiming 初始化——让深度网络第一次在 ImageNet 上超越人类（4.94% vs 5.1%）。今天每个 PyTorch 用户都在用的 kaiming_normal_ 就出自这里。',
      en: 'In 2015 Kaiming He showed two tweaks — PReLU + Kaiming init — made deep networks surpass human-level on ImageNet (4.94% vs 5.1%). The kaiming_normal_ you use in PyTorch today is from here.',
      ja: '2015 年、Kaiming He は PReLU と Kaiming 初期化という 2 つの改良で、深層ネットワークが初めて ImageNet で人間を超えた。今日の kaiming_normal_ もここから。',
    },
    meta: {
      zh: ['8 章', '约 25 分钟', '含公式与代码'],
      en: ['8 chapters', '~25 min read', 'Math & code'],
      ja: ['8 章', '約 25 分', '数式とコード'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'ldm',
    url: '/ldm/',
    category: 'ai',
    date: '2026-05-31',
    tag: 'CVPR 2022 · CompVis',
    title: {
      zh: 'Latent Diffusion：Stable Diffusion 论文详解',
      en: 'High-Resolution Image Synthesis with Latent Diffusion Models',
      ja: 'Latent Diffusion：Stable Diffusion 論文の詳解',
    },
    subtitle: {
      zh: 'Rombach et al. · 中文精校版',
      en: 'Rombach et al. · Curated Chinese Edition',
      ja: 'Rombach et al. · 中国語精製版',
    },
    desc: {
      zh: '催生 Stable Diffusion 的奠基论文。CompVis 团队把扩散模型从昂贵的像素空间搬到高效的潜在空间，训练成本下降一个数量级。开源后催生了整个 AI 绘画生态。',
      en: 'The paper behind Stable Diffusion. CompVis moves diffusion from expensive pixel space to efficient latent space — and open-sourced it, sparking the entire AI art ecosystem.',
      ja: 'Stable Diffusion を生んだ基礎論文。拡散モデルを高価なピクセル空間から効率的な潜在空間に移し、AI アート全エコシステムを生み出しました。',
    },
    meta: {
      zh: ['9 章', '约 25 分钟', '含公式'],
      en: ['9 chapters', '~25 min read', 'With formulas'],
      ja: ['9 章', '約 25 分', '数式付き'],
    },
    theme: 'blue',
    featured: true,
  },
  {
    slug: 'cnn',
    url: '/cnn/',
    category: 'cs',
    date: '2026-05-31',
    tag: 'CS231n · STANFORD',
    title: {
      zh: '卷积神经网络详解：从 LeNet 到 ResNet',
      en: 'Convolutional Neural Networks: From LeNet to ResNet',
      ja: '畳み込みニューラルネット詳解：LeNet から ResNet まで',
    },
    subtitle: {
      zh: 'CS231n · 中文精校版',
      en: 'CS231n · Curated Chinese Edition',
      ja: 'CS231n · 中国語精製版',
    },
    desc: {
      zh: 'CS231n 经典 CNN 讲义。把"图像是二维空间结构"这一归纳偏置烧进网络结构——局部连接、参数共享、池化下采样。一文讲透五大经典架构 LeNet/AlexNet/VGG/GoogLeNet/ResNet。',
      en: 'The classic CS231n CNN lecture. Local connectivity, parameter sharing, and pooling—how five canonical architectures (LeNet to ResNet) shaped computer vision.',
      ja: 'CS231n の名講義。局所接続、パラメータ共有、プーリングの 3 つで構成された CNN と、LeNet から ResNet までの 5 つの古典アーキテクチャ。',
    },
    meta: {
      zh: ['8 章', '约 25 分钟', '含公式与案例'],
      en: ['8 chapters', '~25 min read', 'Math & case studies'],
      ja: ['8 章', '約 25 分', '数式と事例'],
    },
    theme: 'blue',
    featured: true,
  },
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
