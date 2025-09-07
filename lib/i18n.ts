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
      beliefsPage: '我的人生信条',
      experience: '履历',
      projects: '创业项目',
      contact: '联系我'
    },
    hero: {
      greeting: '您好，我是',
      subtitle: '一名工程师·创业家·首席执行官，致力于通过人工智能的技术创新和新商业模式的结合，为这个世界带来更多的美好体验与价值创造，推动更多人能够使用新的人工智能的新技术与新应用来改变世界。',
      contactMe: '联系我',
      viewProjects: '查看项目',
      scrollDown: '向下滚动'
    },
    about: {
      title: '关于我',
      subtitle: '作为一名科技行业前沿的探索者，我当前的主要工作围绕着推动生成式人工智能的技术在更多的行业内进行实践和应用',
      personalIntro: '个人简介',
      personalDesc1: '我是一名从工程师成长为企业CEO，再到斯坦福大学AI研究生的复合型人才。我的职业发展跨越了汽车制造、战略咨询、互联网出行和人工智能等多个高科技领域。',
      personalDesc2: '在耀出行担任CEO期间，我带领团队从0到1开创了高品质出行业务，打造了横跨亚洲的高端出行第一品牌。这段经历让我深刻理解了如何将技术创新与商业战略相结合。',
      personalDesc3: '现在我在斯坦福大学攻读AI与计算机科学硕士，专注于生成式人工智能、大语言模型、视觉模型和扩散模型等前沿技术，为未来的AI驱动创业项目奠定技术基础。',
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
      futureLabel: '未来',
      past: '过去',
      educationLabel: '教育背景',
      experienceLabel: '职业经历',
      events: {
        stanford: {
          period: '2025年9月 - 至今',
          title: '斯坦福大学',
          subtitle: '人工智能与计算机科学硕士在读',
          location: '美国斯坦福',
          description: '就读人工智能与计算机科学硕士项目，深入学习生成式人工智能、大语言模型、视觉模型与扩散模型等前沿技术。'
        },
        starrides: {
          period: '2019年 - 2025年9月',
          title: '耀出行（StarRides）',
          subtitle: '首席执行官',
          location: '亚洲',
          description: '初任首席运营官，后升任首席执行官，全面负责公司的经营与运营管理。带领公司从0到1开创高品质出行业务，打造横跨亚洲的高端出行第一品牌。'
        },
        didi: {
          period: '2017年 - 2019年',
          title: '滴滴出行（DiDi Chuxing）',
          subtitle: '战略与运营管理',
          location: '全球',
          description: '推动网约车业务在中国地区的发展和渗透，并且在规模化和运营效率方面有多项创新举措。'
        },
        bcg: {
          period: '2014年 - 2015年',
          title: '波士顿咨询公司（BCG）',
          subtitle: '战略顾问',
          location: '全球',
          description: '服务于汽车与高端消费品行业客户，参与美国、英国、印度等市场的跨国战略与转型项目。在商业模式创新、组织优化及企业增长战略方面有成功案例。'
        },
        jlr: {
          period: '2011年 - 2014年',
          title: '捷豹路虎汽车公司（Jaguar Land Rover）',
          subtitle: '全球战略部经理',
          location: '全球',
          description: '负责全球战略规划与市场拓展，主导多项跨国业务战略项目。在高端汽车品牌国际化战略和企业增长路径方面积累了丰富经验。'
        },
        ford: {
          period: '2005年 - 2009年',
          title: '福特汽车公司（Ford Motor Company）',
          subtitle: '机械工程师',
          location: '全球',
          description: '参与整车研发与工程项目，积累了扎实的汽车工程与项目管理经验。为后续的战略管理岗位奠定技术基础。'
        }
      },
      education: {
        stanford: {
          period: '2025 - 2026',
          title: '斯坦福大学',
          subtitle: '人工智能与计算机科学硕士',
          location: '美国斯坦福',
          description: '斯坦福大学计算机科学系人工智能与计算机科学硕士项目，学习方向：生成式人工智能、大语言模型、视觉模型、扩散模型。'
        },
        harvard: {
          period: '2023 - 2024',
          title: '哈佛商学院',
          subtitle: '高级工商管理硕士',
          location: '美国波士顿',
          description: '哈佛商学院Executive MBA项目，专注于高级管理技能、全球商业战略和领导力发展。'
        },
        michigan: {
          period: '2016 - 2017',
          title: '美国密歇根大学信息科学学院',
          subtitle: '数据科学硕士',
          location: '美国安娜堡',
          description: '美国密歇根大学信息科学学院数据科学硕士项目，学习方向：机器学习、数据分析、人工智能基础。'
        },
        ceibs: {
          period: '2009 - 2011',
          title: '中欧国际工商学院',
          subtitle: '工商管理硕士',
          location: '中国上海',
          description: '中欧国际工商学院MBA项目，系统学习现代企业管理理论，培养国际化商业思维和领导能力。'
        }
      },
      future: {
        llm: {
          title: '大语言模型',
          subtitle: 'LLM',
          description: '大语言模型通过海量文本训练，能够理解和生成自然语言，是人工智能通向通用认知的重要基石。'
        },
        generative: {
          title: '生成式人工智能',
          subtitle: 'Generative AI',
          description: '生成式AI能创造文本、图像、音频和视频，正在重塑内容生产、设计和创意产业的未来。'
        },
        agent: {
          title: '智能体',
          subtitle: 'AI Agent',
          description: '智能体具备感知、推理与行动能力，能够在复杂环境中自主完成任务，实现人与机器的深度协作。'
        },
        machine: {
          title: '机器智能',
          subtitle: 'Machine Intelligence',
          description: '机器智能不仅是算法和算力的结合，更是让机器具备学习、适应和决策能力，从而解决现实世界的问题。'
        },
        driving: {
          title: '自动驾驶',
          subtitle: 'Autonomous Driving',
          description: '自动驾驶融合感知、预测和控制技术，使车辆能够在动态环境中安全高效地自主行驶。'
        },
        robot: {
          title: '人形机器人',
          subtitle: 'Humanoid Robot',
          description: '人形机器人通过模拟人的结构与行为，探索机器如何在社会和工作场景中与人自然交互与共存。'
        }
      }
    },
    beliefs: {
      title: '信条',
      subtitle: '指导我行动和决策的核心信念',
      viewFullBeliefs: '查看完整人生信条',
      coreValues: '核心价值观',
      actionPrinciplesLabel: '行动原则',
      ctaTitle: '让我们一起践行这些信念',
      ctaDescription: '如果您认同这些价值观和原则，欢迎加入我的AI驱动创业之旅，共同创造有意义的影响。',
      coreBeliefs: {
        strong: {
          title: '强者思维',
          description: '我选择红色药丸'
        },
        growth: {
          title: '成长思维',
          description: '世界是由那些并不比你聪明的人拼凑起来的，你可以去改变它'
        },
        innovation: {
          title: '创新思维',
          description: '在共识之中，寻找非共识'
        },
        surfing: {
          title: '冲浪思维',
          description: '要在时代的浪潮中去找到属于你的那一浪'
        }
      },
      actionPrinciples: {
        insight: {
          title: '洞察周期，笃定前行',
          description: '深刻理解"周期"的规律，在起伏与波动中，坚持信念与长期主义的价值取向，才能照亮前行的道路。'
        },
        focus: {
          title: '将军赶路，不逐小兔',
          description: '专注长期目标，不被短期机会和噪音分散注意力，以坚定的战略眼光指引方向。'
        },
        practice: {
          title: '在干中学，干即是学',
          description: '学习最好的方式就是实践，在不断行动中积累经验，在不断迭代中收获成长。'
        }
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
      currentProjectsLabel: '当前项目',
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
      socialImpact: '社会影响',
      currentProjects: {
        aiAgent: {
          title: 'AI Agent 项目',
          description: '为企业打造多智能体平台，结合行业知识与智能体协作能力，探索并沉淀各垂直行业的专属智能体范式与最佳实践。',
          status: '开发中',
          features: [
            '多智能体协作平台',
            '行业知识图谱构建',
            '智能体范式沉淀',
            '垂直行业解决方案'
          ],
          team: '3人核心团队',
          timeline: '正在小范围测试'
        },
        robot: {
          title: '俱身智能机器人',
          description: '突破传统机器人的形态与应用边界，打造面向汽车、医疗、物流等产业的下一代智能机器人。',
          status: '研发阶段',
          features: [
            '多产业应用场景',
            '智能感知与决策',
            '视觉扩散模型'
          ],
          team: '12人研发团队',
          timeline: '正在快速应用中'
        },
        mystery: {
          title: '神秘项目',
          description: '一个仍在孕育的前沿探索，即将揭开面纱，带来超乎想象的颠覆性体验。',
          status: '保密阶段',
          features: [
            '前沿技术探索',
            '颠覆性创新',
            '神秘体验设计',
            '即将揭晓'
          ],
          team: '核心研发团队',
          timeline: '敬请期待'
        }
      },
      aiProgress: {
        title: 'AI进步与社会影响',
        subtitle: 'Progress vs Time',
        analysisTitle: '指数级变革的起点',
        analysisDescription: '随着 AI 自主研究能力的诞生，人类正走向一个由超级智能引领的全新时代。这个转折点不仅标志着技术的突破，更预示着人类文明的根本性转变。',
        point1: '认知劳动将实现完全自动化，释放人类创造力',
        point2: '科学技术发展速度将呈指数级增长',
        point3: '机器人技术将重塑生产和服务模式',
        point4: 'GDP增长将突破传统经济模型'
      },
      superIntelligence: {
        title: '超级智能的未来',
        description: '所有这些领域的指数级进步最终将汇聚成超级智能的诞生。这不是单一技术的突破，而是人类认知、创造力和智能的全面跃升，将开启人类历史的新纪元。'
      }
    },
    contact: {
      title: '联系我',
      subtitle: '如果您对我的项目感兴趣，或者想要合作，欢迎随时联系我',
      contactInfo: '联系方式',
      socialMedia: '社交媒体',
      email: '邮箱',
      address: '地址',
      location: '上海/杭州/大阪/旧金山/纽约',
      form: {
        name: '姓名',
        namePlaceholder: '请输入您的姓名',
        email: '邮箱',
        emailPlaceholder: '请输入您的邮箱',
      subject: '主题',
        subjectPlaceholder: '请输入消息主题',
      message: '消息内容',
        messagePlaceholder: '请输入您的消息内容...',
      send: '发送消息',
      sending: '发送中...',
        note: '所有留言将直接发送到我的邮箱，我会尽快回复您'
      },
      cooperation: '合作机会',
      cooperationDesc: '我正在寻找志同道合的合作伙伴，包括技术人才、投资人、行业专家等。如果您对我的项目感兴趣，欢迎讨论合作可能性。'
    },
    footer: {
      description: '致力于通过创新和创业精神改变世界，创造真正的价值。',
      future: '让我们一起构建更美好的未来。',
      agiMessage: '迎接 AGI，不只是等待未来，而是一起创造未来。',
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
      beliefsPage: 'My Life Beliefs',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      subtitle: 'An engineer, entrepreneur, and CEO dedicated to bringing more beautiful experiences and value creation to the world through the combination of AI technological innovation and new business models, enabling more people to use new AI technologies and applications to change the world.',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
      scrollDown: 'Scroll Down'
    },
    about: {
      title: 'About Me',
      subtitle: 'As a frontier explorer in the technology industry, my current main work revolves around promoting the practice and application of generative artificial intelligence technology in more industries',
      personalIntro: 'Personal Introduction',
      personalDesc1: 'I am a compound talent who has grown from an engineer to a corporate CEO, and now to a Stanford University AI graduate student. My career development spans multiple high-tech fields including automotive manufacturing, strategic consulting, internet mobility, and artificial intelligence.',
      personalDesc2: 'During my tenure as CEO at StarRides, I led the team to create a high-quality mobility business from 0 to 1, building the first premium mobility brand across Asia. This experience gave me a deep understanding of how to combine technological innovation with business strategy.',
      personalDesc3: 'Now I am pursuing a Master\'s degree in AI and Computer Science at Stanford University, focusing on cutting-edge technologies such as generative artificial intelligence, large language models, vision models, and diffusion models, laying the technical foundation for future AI-driven entrepreneurial projects.',
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
      futureLabel: 'Future',
      past: 'Past',
      educationLabel: 'Education',
      experienceLabel: 'Professional Experience',
      events: {
        stanford: {
          period: 'Sep 2025 - Present',
          title: 'Stanford University',
          subtitle: 'Master of Science in AI & Computer Science',
          location: 'Stanford, USA',
          description: 'Pursuing Master of Science in AI & Computer Science program, deeply studying cutting-edge technologies such as generative AI, large language models, vision models, and diffusion models.'
        },
        starrides: {
          period: '2019 - Sep 2025',
          title: 'StarRides',
          subtitle: 'Chief Executive Officer',
          location: 'Asia',
          description: 'Initially served as COO, then promoted to CEO, fully responsible for company operations and management. Led the team to create a high-quality mobility business from 0 to 1, building the first premium mobility brand across Asia.'
        },
        didi: {
          period: '2017 - 2019',
          title: 'DiDi Chuxing',
          subtitle: 'Strategy & Operations Management',
          location: 'Global',
          description: 'Promoted the development and penetration of ride-hailing business in China, with multiple innovative initiatives in scaling and operational efficiency.'
        },
        bcg: {
          period: '2014 - 2015',
          title: 'Boston Consulting Group (BCG)',
          subtitle: 'Strategy Consultant',
          location: 'Global',
          description: 'Served automotive and luxury consumer goods industry clients, participated in cross-border strategic and transformation projects in US, UK, India and other markets. Had successful cases in business model innovation, organizational optimization and corporate growth strategy.'
        },
        jlr: {
          period: '2011 - 2014',
          title: 'Jaguar Land Rover',
          subtitle: 'Global Strategy Manager',
          location: 'Global',
          description: 'Responsible for global strategic planning and market expansion, led multiple cross-border business strategic projects. Accumulated rich experience in luxury automotive brand internationalization strategy and corporate growth paths.'
        },
        ford: {
          period: '2005 - 2009',
          title: 'Ford Motor Company',
          subtitle: 'Mechanical Engineer',
          location: 'Global',
          description: 'Participated in vehicle R&D and engineering projects, accumulated solid automotive engineering and project management experience. Laid the technical foundation for subsequent strategic management positions.'
        }
      },
      education: {
        stanford: {
          period: '2025 - 2026',
          title: 'Stanford University',
          subtitle: 'Master of Science in AI & Computer Science',
          location: 'Stanford, USA',
          description: 'Stanford University Computer Science Department AI & Computer Science Master\'s program, focus areas: generative AI, large language models, vision models, diffusion models.'
        },
        harvard: {
          period: '2023 - 2024',
          title: 'Harvard Business School',
          subtitle: 'Executive MBA',
          location: 'Boston, USA',
          description: 'Harvard Business School Executive MBA program, focusing on advanced management skills, global business strategy, and leadership development.'
        },
        michigan: {
          period: '2016 - 2017',
          title: 'University of Michigan School of Information',
          subtitle: 'Master of Science in Data Science',
          location: 'Ann Arbor, USA',
          description: 'University of Michigan School of Information Data Science Master\'s program, focus areas: machine learning, data analysis, AI fundamentals.'
        },
        ceibs: {
          period: '2009 - 2011',
          title: 'CEIBS',
          subtitle: 'Master of Business Administration',
          location: 'Shanghai, China',
          description: 'CEIBS MBA program, systematically learning modern enterprise management theory, developing international business thinking and leadership capabilities.'
        }
      },
      future: {
        llm: {
          title: 'Large Language Models',
          subtitle: 'LLM',
          description: 'Large language models trained on massive text data can understand and generate natural language, serving as a crucial foundation for AI\'s path to general cognition.'
        },
        generative: {
          title: 'Generative AI',
          subtitle: 'Generative AI',
          description: 'Generative AI can create text, images, audio, and video, reshaping the future of content production, design, and creative industries.'
        },
        agent: {
          title: 'AI Agents',
          subtitle: 'AI Agent',
          description: 'AI agents possess perception, reasoning, and action capabilities, able to autonomously complete tasks in complex environments, achieving deep collaboration between humans and machines.'
        },
        machine: {
          title: 'Machine Intelligence',
          subtitle: 'Machine Intelligence',
          description: 'Machine intelligence is not just the combination of algorithms and computing power, but enabling machines to have learning, adaptation, and decision-making capabilities to solve real-world problems.'
        },
        driving: {
          title: 'Autonomous Driving',
          subtitle: 'Autonomous Driving',
          description: 'Autonomous driving integrates perception, prediction, and control technologies, enabling vehicles to navigate safely and efficiently in dynamic environments.'
        },
        robot: {
          title: 'Humanoid Robots',
          subtitle: 'Humanoid Robot',
          description: 'Humanoid robots explore how machines can naturally interact and coexist with humans in social and work scenarios by simulating human structure and behavior.'
        }
      }
    },
    beliefs: {
      title: 'Beliefs',
      subtitle: 'Core beliefs that guide my actions and decisions',
      viewFullBeliefs: 'View Full Life Beliefs',
      coreValues: 'Core Values',
      actionPrinciplesLabel: 'Action Principles',
      ctaTitle: 'Let\'s Practice These Beliefs Together',
      ctaDescription: 'If you identify with these values and principles, welcome to join my AI-driven entrepreneurial journey and create meaningful impact together.',
      coreBeliefs: {
        strong: {
          title: 'Strong Mindset',
          description: 'I choose the red pill'
        },
        growth: {
          title: 'Growth Mindset',
          description: 'The world is built by people who are no smarter than you, and you can change it'
        },
        innovation: {
          title: 'Innovative Thinking',
          description: 'Seek non-consensus within consensus'
        },
        surfing: {
          title: 'Surfing Mindset',
          description: 'You need to find your wave in the tide of the times'
        }
      },
      actionPrinciples: {
        insight: {
          title: 'Insight Cycles, Move Forward with Conviction',
          description: 'Deeply understand the laws of "cycles", and in the ups and downs, persist with belief and long-term value orientation to illuminate the path forward.'
        },
        focus: {
          title: 'General on the Road, Not Chasing Small Rabbits',
          description: 'Focus on long-term goals, not be distracted by short-term opportunities and noise, guide direction with firm strategic vision.'
        },
        practice: {
          title: 'Learn by Doing, Doing is Learning',
          description: 'The best way to learn is through practice, accumulating experience through continuous action, and growing through continuous iteration.'
        }
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
      currentProjectsLabel: 'Current Projects',
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
      socialImpact: 'Social Impact',
      currentProjects: {
        aiAgent: {
          title: 'AI Agent Project',
          description: 'Building a multi-agent platform for enterprises, combining industry knowledge with agent collaboration capabilities to explore and accumulate specialized agent paradigms and best practices for various vertical industries.',
          status: 'In Development',
          features: [
            'Multi-agent Collaboration Platform',
            'Industry Knowledge Graph Construction',
            'Agent Paradigm Accumulation',
            'Vertical Industry Solutions'
          ],
          team: '3-person Core Team',
          timeline: 'In Small-scale Testing'
        },
        robot: {
          title: 'Embodied Intelligent Robot',
          description: 'Breaking through traditional robot forms and application boundaries to create next-generation intelligent robots for automotive, medical, logistics and other industries.',
          status: 'R&D Phase',
          features: [
            'Multi-industry Application Scenarios',
            'Intelligent Perception and Decision-making',
            'Visual Diffusion Models'
          ],
          team: '12-person R&D Team',
          timeline: 'In Rapid Application'
        },
        mystery: {
          title: 'Mystery Project',
          description: 'A cutting-edge exploration still in gestation, about to unveil and bring unimaginable disruptive experiences.',
          status: 'Confidential Phase',
          features: [
            'Cutting-edge Technology Exploration',
            'Disruptive Innovation',
            'Mystery Experience Design',
            'Coming Soon'
          ],
          team: 'Core R&D Team',
          timeline: 'Stay Tuned'
        }
      },
      aiProgress: {
        title: 'AI Progress & Social Impact',
        subtitle: 'Progress vs Time',
        analysisTitle: 'The Starting Point of Exponential Change',
        analysisDescription: 'With the birth of AI\'s autonomous research capabilities, humanity is moving towards a new era led by superintelligence. This turning point not only marks a technological breakthrough but also foreshadows a fundamental transformation of human civilization.',
        point1: 'Cognitive labor will be fully automated, unleashing human creativity',
        point2: 'The pace of scientific and technological development will grow exponentially',
        point3: 'Robotic technology will reshape production and service models',
        point4: 'GDP growth will break through traditional economic models'
      },
      superIntelligence: {
        title: 'The Future of Superintelligence',
        description: 'The exponential progress in all these fields will ultimately converge into the birth of superintelligence. This is not a breakthrough in a single technology, but a comprehensive leap in human cognition, creativity, and intelligence, which will usher in a new era in human history.'
      }
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'If you are interested in my projects or want to collaborate, feel free to contact me anytime',
      contactInfo: 'Contact Information',
      socialMedia: 'Social Media',
      email: 'Email',
      address: 'Address',
      location: 'Shanghai/Hangzhou/Osaka/San Francisco/New York',
      form: {
        name: 'Name',
        namePlaceholder: 'Please enter your name',
        email: 'Email',
        emailPlaceholder: 'Please enter your email',
      subject: 'Subject',
        subjectPlaceholder: 'Please enter message subject',
      message: 'Message',
        messagePlaceholder: 'Please enter your message content...',
      send: 'Send Message',
      sending: 'Sending...',
        note: 'All messages will be sent directly to my email, and I will reply to you as soon as possible'
      },
      cooperation: 'Collaboration Opportunities',
      cooperationDesc: 'I am looking for like-minded partners, including technical talents, investors, industry experts, etc. If you are interested in my projects, welcome to discuss collaboration possibilities.'
    },
    footer: {
      description: 'Dedicated to changing the world through innovation and entrepreneurship, creating real value.',
      future: 'Let\'s build a better future together.',
      agiMessage: 'Embrace AGI, not just waiting for the future, but creating the future together.',
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
      beliefsPage: '私の人生信条',
      experience: '経歴',
      projects: 'プロジェクト',
      contact: 'お問い合わせ'
    },
    hero: {
      greeting: 'こんにちは、私は',
      subtitle: 'エンジニア・起業家・CEOとして、AI技術革新と新ビジネスモデルの組み合わせを通じて、この世界により多くの美しい体験と価値創造をもたらし、より多くの人々が新しいAI技術とアプリケーションを使用して世界を変えることを推進しています。',
      contactMe: 'お問い合わせ',
      viewProjects: 'プロジェクトを見る',
      scrollDown: '下にスクロール'
    },
    about: {
      title: '私について',
      subtitle: 'テクノロジー業界のフロンティア探求者として、現在の主要な仕事は生成人工知能技術をより多くの業界で実践・応用することを推進することです',
      personalIntro: '自己紹介',
      personalDesc1: '私はエンジニアから企業CEO、そしてスタンフォード大学AI大学院生に成長した複合型人材です。私のキャリア発展は自動車製造、戦略コンサルティング、インターネットモビリティ、人工知能など複数のハイテク分野にまたがっています。',
      personalDesc2: 'StarRidesでCEOを務めていた期間、私はチームを率いて0から1まで高品質モビリティビジネスを開拓し、アジア横断のプレミアムモビリティ第一ブランドを構築しました。この経験を通じて、技術革新とビジネス戦略を組み合わせる方法を深く理解しました。',
      personalDesc3: '現在私はスタンフォード大学でAIとコンピュータサイエンスの修士号を取得中で、生成人工知能、大規模言語モデル、視覚モデル、拡散モデルなどの最先端技術に焦点を当て、将来のAI駆動起業プロジェクトの技術基盤を築いています。',
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
      futureLabel: '未来',
      past: '過去',
      educationLabel: '教育',
      experienceLabel: '職業経験',
      events: {
        stanford: {
          period: '2025年9月 - 現在',
          title: 'スタンフォード大学',
          subtitle: 'AI・コンピュータサイエンス修士課程在学中',
          location: 'アメリカ・スタンフォード',
          description: 'AI・コンピュータサイエンス修士課程に在学し、生成AI、大規模言語モデル、視覚モデル、拡散モデルなどの最先端技術を深く学習しています。'
        },
        starrides: {
          period: '2019年 - 2025年9月',
          title: 'StarRides（スターライド）',
          subtitle: '最高経営責任者',
          location: 'アジア',
          description: '初めにCOOを務め、その後CEOに昇進し、会社の経営と運営管理を全面的に担当。チームを率いて0から1まで高品質モビリティビジネスを開拓し、アジア横断のプレミアムモビリティ第一ブランドを構築しました。'
        },
        didi: {
          period: '2017年 - 2019年',
          title: 'DiDi Chuxing（滴滴出行）',
          subtitle: '戦略・運営管理',
          location: 'グローバル',
          description: '中国地域でのライドシェアビジネスの発展と浸透を推進し、スケーリングと運営効率の面で複数の革新的な取り組みを行いました。'
        },
        bcg: {
          period: '2014年 - 2015年',
          title: 'ボストン・コンサルティング・グループ（BCG）',
          subtitle: '戦略コンサルタント',
          location: 'グローバル',
          description: '自動車・高級消費財業界のクライアントにサービスを提供し、アメリカ、イギリス、インドなどの市場でのクロスボーダー戦略・変革プロジェクトに参加。ビジネスモデル革新、組織最適化、企業成長戦略の面で成功事例を持っています。'
        },
        jlr: {
          period: '2011年 - 2014年',
          title: 'ジャガー・ランドローバー',
          subtitle: 'グローバル戦略部マネージャー',
          location: 'グローバル',
          description: 'グローバル戦略計画と市場拡大を担当し、複数のクロスボーダービジネス戦略プロジェクトを主導。高級自動車ブランドの国際化戦略と企業成長パスの面で豊富な経験を蓄積しました。'
        },
        ford: {
          period: '2005年 - 2009年',
          title: 'フォード・モーター・カンパニー',
          subtitle: '機械エンジニア',
          location: 'グローバル',
          description: '車両R&Dとエンジニアリングプロジェクトに参加し、堅実な自動車エンジニアリングとプロジェクト管理の経験を蓄積。後続の戦略管理ポジションの技術基盤を築きました。'
        }
      },
      education: {
        stanford: {
          period: '2025 - 2026',
          title: 'スタンフォード大学',
          subtitle: 'AI・コンピュータサイエンス修士課程',
          location: 'アメリカ・スタンフォード',
          description: 'スタンフォード大学コンピュータサイエンス学科AI・コンピュータサイエンス修士課程、学習方向：生成AI、大規模言語モデル、視覚モデル、拡散モデル。'
        },
        harvard: {
          period: '2023 - 2024',
          title: 'ハーバード・ビジネス・スクール',
          subtitle: 'エグゼクティブMBA',
          location: 'アメリカ・ボストン',
          description: 'ハーバード・ビジネス・スクールエグゼクティブMBAプログラム、高度な管理スキル、グローバルビジネス戦略、リーダーシップ開発に焦点。'
        },
        michigan: {
          period: '2016 - 2017',
          title: 'ミシガン大学情報科学学院',
          subtitle: 'データサイエンス修士課程',
          location: 'アメリカ・アナーバー',
          description: 'ミシガン大学情報科学学院データサイエンス修士課程、学習方向：機械学習、データ分析、AI基礎。'
        },
        ceibs: {
          period: '2009 - 2011',
          title: '中欧国際工商学院',
          subtitle: '経営学修士',
          location: '中国・上海',
          description: '中欧国際工商学院MBAプログラム、現代企業管理理論を体系的に学習し、国際的ビジネス思考とリーダーシップ能力を育成。'
        }
      },
      future: {
        llm: {
          title: '大規模言語モデル',
          subtitle: 'LLM',
          description: '大規模言語モデルは大量のテキストデータで訓練され、自然言語を理解・生成でき、AIの一般認知への重要な基盤となります。'
        },
        generative: {
          title: '生成AI',
          subtitle: 'Generative AI',
          description: '生成AIはテキスト、画像、音声、動画を作成でき、コンテンツ制作、デザイン、クリエイティブ産業の未来を再構築しています。'
        },
        agent: {
          title: 'AIエージェント',
          subtitle: 'AI Agent',
          description: 'AIエージェントは知覚、推論、行動能力を持ち、複雑な環境で自律的にタスクを完了し、人間と機械の深い協力を実現します。'
        },
        machine: {
          title: '機械知能',
          subtitle: 'Machine Intelligence',
          description: '機械知能は単なるアルゴリズムと計算力の組み合わせではなく、機械に学習、適応、意思決定能力を持たせ、現実世界の問題を解決します。'
        },
        driving: {
          title: '自動運転',
          subtitle: 'Autonomous Driving',
          description: '自動運転は知覚、予測、制御技術を融合し、車両が動的環境で安全かつ効率的に自律走行できるようにします。'
        },
        robot: {
          title: 'ヒューマノイドロボット',
          subtitle: 'Humanoid Robot',
          description: 'ヒューマノイドロボットは人間の構造と行動を模倣し、機械が社会や仕事の場面で人間と自然に相互作用し共存する方法を探ります。'
        }
      }
    },
    beliefs: {
      title: '信念',
      subtitle: '私の行動と決定を導く核心的な信念',
      viewFullBeliefs: '完全な人生信念を見る',
      coreValues: '核心価値観',
      actionPrinciplesLabel: '行動原則',
      ctaTitle: '一緒にこれらの信念を実践しましょう',
      ctaDescription: 'これらの価値観と原則に共感される場合は、私のAI駆動起業の旅に参加し、一緒に意味のある影響を創造することを歓迎します。',
      coreBeliefs: {
        strong: {
          title: '強者思考',
          description: '私は赤い薬を選ぶ'
        },
        growth: {
          title: '成長思考',
          description: '世界はあなたより賢くない人々によって作られており、あなたはそれを変えることができる'
        },
        innovation: {
          title: '革新的思考',
          description: '合意の中に非合意を求める'
        },
        surfing: {
          title: 'サーフィン思考',
          description: '時代の波の中で、あなたに属する波を見つける必要がある'
        }
      },
      actionPrinciples: {
        insight: {
          title: '周期を洞察し、確信を持って前進',
          description: '「周期」の法則を深く理解し、浮き沈みの中で、信念と長期主義の価値観を堅持し、前進の道を照らす。'
        },
        focus: {
          title: '将軍は道を急ぎ、小さなウサギを追わない',
          description: '長期目標に集中し、短期の機会やノイズに気を散らされることなく、確固たる戦略的視点で方向を導く。'
        },
        practice: {
          title: '実践で学び、実践が学び',
          description: '学ぶ最良の方法は実践であり、継続的な行動で経験を積み、継続的な反復で成長を収穫する。'
        }
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
      currentProjectsLabel: '現在のプロジェクト',
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
      socialImpact: '社会的影響',
      currentProjects: {
        aiAgent: {
          title: 'AIエージェントプロジェクト',
          description: '企業向けマルチエージェントプラットフォームを構築し、業界知識とエージェント協力能力を組み合わせ、各垂直業界の専用エージェントパラダイムとベストプラクティスを探索・蓄積します。',
          status: '開発中',
          features: [
            'マルチエージェント協力プラットフォーム',
            '業界知識グラフ構築',
            'エージェントパラダイム蓄積',
            '垂直業界ソリューション'
          ],
          team: '3人コアチーム',
          timeline: '小規模テスト中'
        },
        robot: {
          title: '具身智能ロボット',
          description: '従来のロボットの形態と応用境界を突破し、自動車、医療、物流などの産業向け次世代智能ロボットを創出します。',
          status: 'R&D段階',
          features: [
            '多産業応用シナリオ',
            '智能感知と意思決定',
            '視覚拡散モデル'
          ],
          team: '12人R&Dチーム',
          timeline: '急速応用中'
        },
        mystery: {
          title: '神秘プロジェクト',
          description: 'まだ育成中のフロンティア探索で、まもなくベールを脱ぎ、想像を超える破壊的体験をもたらします。',
          status: '機密段階',
          features: [
            'フロンティア技術探索',
            '破壊的イノベーション',
            '神秘体験デザイン',
            'まもなく発表'
          ],
          team: 'コアR&Dチーム',
          timeline: 'お楽しみに'
        }
      },
      aiProgress: {
        title: 'AI進歩と社会的影響',
        subtitle: '進歩 vs 時間',
        analysisTitle: '指数関数的変化の出発点',
        analysisDescription: 'AIの自律的研究能力の誕生により、人類は超知能に導かれる全く新しい時代に向かっています。この転換点は技術的ブレークスルーをマークするだけでなく、人類文明の根本的変革を予示しています。',
        point1: '認知労働が完全に自動化され、人間の創造性を解き放つ',
        point2: '科学技術の発展速度が指数関数的に成長する',
        point3: 'ロボット技術が生産とサービスモデルを再構築する',
        point4: 'GDP成長が従来の経済モデルを突破する'
      },
      superIntelligence: {
        title: '超知能の未来',
        description: 'これらのすべての分野での指数関数的進歩は、最終的に超知能の誕生に収束します。これは単一技術のブレークスルーではなく、人間の認知、創造性、知性の包括的な飛躍であり、人類の歴史に新たな時代を切り開くでしょう。'
      }
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: '私のプロジェクトに興味がある場合、または協力したい場合は、いつでもお気軽にお問い合わせください',
      contactInfo: '連絡先情報',
      socialMedia: 'ソーシャルメディア',
      email: 'メールアドレス',
      address: '住所',
      location: '上海/杭州/大阪/サンフランシスコ/ニューヨーク',
      form: {
        name: '名前',
        namePlaceholder: 'お名前を入力してください',
        email: 'メールアドレス',
        emailPlaceholder: 'メールアドレスを入力してください',
      subject: '件名',
        subjectPlaceholder: '件名を入力してください',
      message: 'メッセージ',
        messagePlaceholder: 'メッセージを入力してください...',
      send: 'メッセージを送信',
      sending: '送信中...',
        note: 'すべてのメッセージは直接私のメールに送信され、できるだけ早くお返事いたします'
      },
      cooperation: '協力の機会',
      cooperationDesc: '技術者、投資家、業界専門家などの志を同じくするパートナーを探しています。私のプロジェクトに興味がある場合は、協力の可能性について話し合うことを歓迎します。'
    },
    footer: {
      description: 'イノベーションと起業家精神を通じて世界を変え、真の価値を創造することに専念しています。',
      future: '一緒により良い未来を構築しましょう。',
      agiMessage: 'AGIを迎え入れ、未来を待つのではなく、一緒に未来を創造しましょう。',
      quickLinks: 'クイックリンク',
      contactInfo: '連絡先情報',
      madeWith: '心を込めて制作',
      in: 'で',
      china: '中国',
      allRights: '全著作権所有'
    }
  }
}
