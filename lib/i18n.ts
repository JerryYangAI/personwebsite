export const languages = {
  zh: '中文',
  en: 'English',
  ja: '日本語'
}

export const defaultLanguage = 'zh'

export type Language = keyof typeof languages

export const translations = {
  zh: {
    name: '杨广 / Jerry Yang',
    nav: {
      home: '首页',
      about: '关于我',
      timeline: '时间线',
      beliefs: '信条',
      experience: '履历',
      projects: '创业项目',
      contact: '联系我'
    },
    hero: {
      greeting: '您好，我是',
      subtitle: '一位充满激情的专业人士，致力于通过创新和创业精神改变世界。我拥有丰富的行业经验，正在开启令人兴奋的创业之旅。',
      contactMe: '联系我',
      viewProjects: '查看项目',
      scrollDown: '向下滚动'
    },
    about: {
      title: '关于我',
      subtitle: '我是一位经验丰富的专业人士，拥有多年的行业经验和对未来的清晰愿景',
      personalIntro: '个人简介',
      personalDesc1: '我是一名充满激情的专业人士，在过去的职业生涯中积累了丰富的经验和深刻的行业洞察。我始终相信，通过创新思维和坚持不懈的努力，可以创造出真正的价值。',
      personalDesc2: '现在，我正站在人生的新起点上，准备开启一段激动人心的创业之旅。我希望能够运用我的专业知识和经验，解决现实世界中的问题，为社会创造积极的影响。',
      personalDesc3: '我相信，成功不仅仅是个人的成就，更是团队合作、持续学习和不断改进的结果。我期待与志同道合的伙伴一起，共同实现我们的愿景。',
      coreSkills: '核心技能',
      values: '我的价值观',
      valuesSubtitle: '我的价值观',
      targetOriented: '目标导向',
      targetDesc: '始终专注于明确的目标，制定清晰的执行计划',
      peopleFirst: '以人为本',
      peopleDesc: '重视团队合作，关注人的成长和发展',
      innovative: '创新思维',
      innovativeDesc: '不断探索新的可能性，拥抱变化和挑战'
    },
    timeline: {
      title: '时间线',
      subtitle: '我的人生历程和重要时刻',
      current: '现在',
      future: '未来',
      past: '过去'
    },
    beliefs: {
      title: '信条',
      subtitle: '指导我行动和决策的核心信念',
      belief1: {
        title: '创新驱动发展',
        description: '我相信创新是推动社会进步和个人成长的核心动力。通过不断探索新的可能性，我们可以创造前所未有的价值。'
      },
      belief2: {
        title: '以人为本',
        description: '技术应该服务于人类，而不是相反。我致力于创造能够真正改善人们生活的解决方案。'
      },
      belief3: {
        title: '持续学习',
        description: '在快速变化的世界中，持续学习是保持竞争力的关键。我始终保持开放的心态，拥抱新知识和新技能。'
      },
      belief4: {
        title: '社会责任',
        description: '作为企业家，我有责任为社会创造积极的影响。我的项目不仅要盈利，更要解决真实的社会问题。'
      }
    },
    experience: {
      title: '职业履历',
      subtitle: '我的职业发展历程，每一步都为我积累了宝贵的经验和技能',
      workExperience: '工作经历',
      education: '教育背景',
      certifications: '专业认证',
      achievements: '主要成就',
      teamSize: '团队规模',
      expectedLaunch: '预计上线'
    },
    projects: {
      title: '创业项目',
      subtitle: '我正在打造几个激动人心的创业项目，致力于解决现实世界的问题并创造价值',
      currentProjects: '当前项目',
      futureVision: '未来愿景',
      businessModel: '商业模式',
      projectStatus: '项目状态',
      progress: '项目进度',
      coreFeatures: '核心功能',
      teamSize: '团队规模',
      timeline: '预计上线',
      revenueModel: '收入模式',
      strategy: '发展战略',
      targetMarket: '目标市场',
      socialImpact: '社会影响'
    },
    contact: {
      title: '联系我',
      subtitle: '如果您对我的项目感兴趣，或者想要合作，欢迎随时联系我',
      contactInfo: '联系方式',
      socialMedia: '社交媒体',
      sendMessage: '发送消息',
      name: '姓名',
      email: '邮箱',
      subject: '主题',
      message: '消息内容',
      send: '发送消息',
      sending: '发送中...',
      cooperation: '合作机会',
      cooperationDesc: '我正在寻找志同道合的合作伙伴，包括技术人才、投资人、行业专家等。如果您对我的项目感兴趣，欢迎讨论合作可能性。',
      placeholder: {
        name: '请输入您的姓名',
        email: '请输入您的邮箱',
        subject: '请输入消息主题',
        message: '请输入您的消息内容...'
      }
    },
    footer: {
      description: '致力于通过创新和创业精神改变世界，创造真正的价值。',
      future: '让我们一起构建更美好的未来。',
      quickLinks: '快速链接',
      contactInfo: '联系信息',
      madeWith: '用心制作',
      in: '在',
      china: '中国',
      allRights: '保留所有权利'
    }
  },
  en: {
    name: 'Jerry Yang / 杨广',
    nav: {
      home: 'Home',
      about: 'About',
      timeline: 'Timeline',
      beliefs: 'Beliefs',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      subtitle: 'A passionate professional dedicated to changing the world through innovation and entrepreneurship. I have rich industry experience and am embarking on an exciting entrepreneurial journey.',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
      scrollDown: 'Scroll Down'
    },
    about: {
      title: 'About Me',
      subtitle: 'I am an experienced professional with years of industry experience and a clear vision for the future',
      personalIntro: 'Personal Introduction',
      personalDesc1: 'I am a passionate professional who has accumulated rich experience and deep industry insights throughout my career. I always believe that through innovative thinking and persistent effort, we can create real value.',
      personalDesc2: 'Now, I am standing at a new starting point in life, ready to embark on an exciting entrepreneurial journey. I hope to use my professional knowledge and experience to solve real-world problems and create positive social impact.',
      personalDesc3: 'I believe that success is not just personal achievement, but the result of teamwork, continuous learning, and constant improvement. I look forward to working with like-minded partners to achieve our vision together.',
      coreSkills: 'Core Skills',
      values: 'My Values',
      valuesSubtitle: 'My Values',
      targetOriented: 'Goal-Oriented',
      targetDesc: 'Always focus on clear goals and develop clear execution plans',
      peopleFirst: 'People-First',
      peopleDesc: 'Value teamwork and focus on human growth and development',
      innovative: 'Innovative Thinking',
      innovativeDesc: 'Continuously explore new possibilities and embrace change and challenges'
    },
    timeline: {
      title: 'Timeline',
      subtitle: 'My life journey and important moments',
      current: 'Now',
      future: 'Future',
      past: 'Past'
    },
    beliefs: {
      title: 'Beliefs',
      subtitle: 'Core beliefs that guide my actions and decisions',
      belief1: {
        title: 'Innovation Drives Development',
        description: 'I believe innovation is the core driving force for social progress and personal growth. By continuously exploring new possibilities, we can create unprecedented value.'
      },
      belief2: {
        title: 'People First',
        description: 'Technology should serve humanity, not the other way around. I am committed to creating solutions that truly improve people\'s lives.'
      },
      belief3: {
        title: 'Continuous Learning',
        description: 'In a rapidly changing world, continuous learning is key to maintaining competitiveness. I always maintain an open mind and embrace new knowledge and skills.'
      },
      belief4: {
        title: 'Social Responsibility',
        description: 'As an entrepreneur, I have a responsibility to create positive social impact. My projects should not only be profitable but also solve real social problems.'
      }
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My career development journey, each step has accumulated valuable experience and skills for me',
      workExperience: 'Work Experience',
      education: 'Education',
      certifications: 'Certifications',
      achievements: 'Key Achievements',
      teamSize: 'Team Size',
      expectedLaunch: 'Expected Launch'
    },
    projects: {
      title: 'Entrepreneurial Projects',
      subtitle: 'I am building several exciting entrepreneurial projects dedicated to solving real-world problems and creating value',
      currentProjects: 'Current Projects',
      futureVision: 'Future Vision',
      businessModel: 'Business Model',
      projectStatus: 'Project Status',
      progress: 'Project Progress',
      coreFeatures: 'Core Features',
      teamSize: 'Team Size',
      timeline: 'Expected Launch',
      revenueModel: 'Revenue Model',
      strategy: 'Development Strategy',
      targetMarket: 'Target Market',
      socialImpact: 'Social Impact'
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'If you are interested in my projects or want to collaborate, feel free to contact me anytime',
      contactInfo: 'Contact Information',
      socialMedia: 'Social Media',
      sendMessage: 'Send Message',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      cooperation: 'Collaboration Opportunities',
      cooperationDesc: 'I am looking for like-minded partners, including technical talents, investors, industry experts, etc. If you are interested in my projects, welcome to discuss collaboration possibilities.',
      placeholder: {
        name: 'Enter your name',
        email: 'Enter your email',
        subject: 'Enter message subject',
        message: 'Enter your message...'
      }
    },
    footer: {
      description: 'Dedicated to changing the world through innovation and entrepreneurship, creating real value.',
      future: 'Let\'s build a better future together.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      madeWith: 'Made with',
      in: 'in',
      china: 'China',
      allRights: 'All rights reserved'
    }
  },
  ja: {
    name: 'Jerry Yang / 楊広',
    nav: {
      home: 'ホーム',
      about: '私について',
      timeline: 'タイムライン',
      beliefs: '信念',
      experience: '経歴',
      projects: 'プロジェクト',
      contact: 'お問い合わせ'
    },
    hero: {
      greeting: 'こんにちは、私は',
      subtitle: 'イノベーションと起業家精神を通じて世界を変えることに情熱を注ぐ専門家です。豊富な業界経験を持ち、エキサイティングな起業の旅を始めています。',
      contactMe: 'お問い合わせ',
      viewProjects: 'プロジェクトを見る',
      scrollDown: '下にスクロール'
    },
    about: {
      title: '私について',
      subtitle: '私は豊富な業界経験と将来への明確なビジョンを持つ経験豊富な専門家です',
      personalIntro: '自己紹介',
      personalDesc1: '私は情熱的な専門家で、キャリアを通じて豊富な経験と深い業界洞察を蓄積してきました。革新的な思考と粘り強い努力を通じて、真の価値を創造できると常に信じています。',
      personalDesc2: '今、私は人生の新しい出発点に立ち、エキサイティングな起業の旅を始める準備をしています。専門知識と経験を活用して、現実世界の問題を解決し、積極的な社会的影響を創造したいと思います。',
      personalDesc3: '成功は単なる個人的な達成ではなく、チームワーク、継続的な学習、そして絶え間ない改善の結果だと信じています。志を同じくするパートナーと一緒に働いて、私たちのビジョンを実現することを楽しみにしています。',
      coreSkills: 'コアスキル',
      values: '私の価値観',
      valuesSubtitle: '私の価値観',
      targetOriented: '目標指向',
      targetDesc: '明確な目標に常に焦点を当て、明確な実行計画を立てる',
      peopleFirst: '人を第一に',
      peopleDesc: 'チームワークを重視し、人間の成長と発展に焦点を当てる',
      innovative: '革新的思考',
      innovativeDesc: '新しい可能性を絶えず探求し、変化と挑戦を受け入れる'
    },
    timeline: {
      title: 'タイムライン',
      subtitle: '私の人生の旅と重要な瞬間',
      current: '現在',
      future: '未来',
      past: '過去'
    },
    beliefs: {
      title: '信念',
      subtitle: '私の行動と決定を導く核心的な信念',
      belief1: {
        title: 'イノベーションが発展を推進',
        description: 'イノベーションが社会の進歩と個人の成長の核心的な推進力だと信じています。新しい可能性を絶えず探求することで、前例のない価値を創造できます。'
      },
      belief2: {
        title: '人を第一に',
        description: '技術は人類に奉仕すべきであり、その逆ではありません。人々の生活を真に改善するソリューションの創造に取り組んでいます。'
      },
      belief3: {
        title: '継続的な学習',
        description: '急速に変化する世界では、継続的な学習が競争力を維持する鍵です。常にオープンな心を保ち、新しい知識とスキルを受け入れています。'
      },
      belief4: {
        title: '社会的責任',
        description: '起業家として、積極的な社会的影響を創造する責任があります。私のプロジェクトは利益を上げるだけでなく、現実の社会問題を解決する必要があります。'
      }
    },
    experience: {
      title: '専門的な経験',
      subtitle: '私のキャリア開発の旅、各ステップが私に貴重な経験とスキルを蓄積してきました',
      workExperience: '職歴',
      education: '教育',
      certifications: '認定',
      achievements: '主要な成果',
      teamSize: 'チームサイズ',
      expectedLaunch: '予定発売'
    },
    projects: {
      title: '起業プロジェクト',
      subtitle: '現実世界の問題を解決し、価値を創造することに専念する、いくつかのエキサイティングな起業プロジェクトを構築しています',
      currentProjects: '現在のプロジェクト',
      futureVision: '将来のビジョン',
      businessModel: 'ビジネスモデル',
      projectStatus: 'プロジェクトステータス',
      progress: 'プロジェクト進捗',
      coreFeatures: 'コア機能',
      teamSize: 'チームサイズ',
      timeline: '予定発売',
      revenueModel: '収益モデル',
      strategy: '開発戦略',
      targetMarket: 'ターゲット市場',
      socialImpact: '社会的影響'
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: '私のプロジェクトに興味がある場合、または協力したい場合は、いつでもお気軽にお問い合わせください',
      contactInfo: '連絡先情報',
      socialMedia: 'ソーシャルメディア',
      sendMessage: 'メッセージを送信',
      name: '名前',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      send: 'メッセージを送信',
      sending: '送信中...',
      cooperation: '協力の機会',
      cooperationDesc: '技術者、投資家、業界専門家などの志を同じくするパートナーを探しています。私のプロジェクトに興味がある場合は、協力の可能性について話し合うことを歓迎します。',
      placeholder: {
        name: 'お名前を入力してください',
        email: 'メールアドレスを入力してください',
        subject: '件名を入力してください',
        message: 'メッセージを入力してください...'
      }
    },
    footer: {
      description: 'イノベーションと起業家精神を通じて世界を変え、真の価値を創造することに専念しています。',
      future: '一緒により良い未来を構築しましょう。',
      quickLinks: 'クイックリンク',
      contactInfo: '連絡先情報',
      madeWith: '心を込めて制作',
      in: 'で',
      china: '中国',
      allRights: '全著作権所有'
    }
  }
}
