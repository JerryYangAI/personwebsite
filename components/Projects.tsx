'use client'

import { motion } from 'framer-motion'
import { Rocket, Users, Target, TrendingUp, Globe, Lightbulb } from 'lucide-react'

const Projects = () => {
  const currentProjects = [
    {
      title: '智能教育平台',
      description: '基于AI技术的个性化学习平台，为学生提供定制化的学习体验和智能辅导。',
      status: '开发中',
      progress: 75,
      features: [
        'AI驱动的个性化学习路径',
        '实时学习进度跟踪',
        '智能题目推荐系统',
        '多平台支持（Web、移动端）'
      ],
      team: '5人核心团队',
      timeline: '预计2024年Q2上线',
      icon: <Rocket className="w-8 h-8 text-primary-600" />
    },
    {
      title: '可持续生活方式平台',
      description: '连接环保产品供应商和消费者的平台，推广可持续消费理念，为地球环保贡献力量。',
      status: '规划阶段',
      progress: 30,
      features: [
        '环保产品认证体系',
        '碳足迹计算器',
        '社区互动功能',
        '可持续生活指南'
      ],
      team: '3人创始团队',
      timeline: '预计2024年Q3启动',
      icon: <Globe className="w-8 h-8 text-green-600" />
    }
  ]

  const futureVision = [
    {
      title: '健康科技解决方案',
      description: '结合物联网和AI技术，为用户提供全面的健康监测和个性化健康建议。',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      timeline: '2025年',
      market: '万亿级健康市场',
      impact: '提升全民健康水平'
    },
    {
      title: '智慧城市平台',
      description: '整合城市各项服务，通过数据分析和AI优化，提升城市管理效率和居民生活质量。',
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      timeline: '2026年',
      market: '智慧城市万亿市场',
      impact: '推动城市数字化转型'
    }
  ]

  const businessModel = {
    revenue: [
      '订阅服务模式',
      '交易佣金分成',
      '企业级解决方案',
      '数据洞察服务'
    ],
    strategy: [
      'MVP快速验证',
      '用户增长驱动',
      '技术壁垒构建',
      '生态合作伙伴'
    ]
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            创业项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我正在打造几个激动人心的创业项目，致力于解决现实世界的问题并创造价值
          </p>
        </motion.div>

        {/* Current Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">当前项目</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="card border-l-4 border-l-primary-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  {project.icon}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">项目进度</span>
                    <span className="text-sm font-medium text-primary-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">核心功能：</h5>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">团队规模：</span>
                    <span className="font-medium text-gray-900">{project.team}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">预计上线：</span>
                    <span className="font-medium text-gray-900">{project.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">未来愿景</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {futureVision.map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  {vision.icon}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{vision.title}</h4>
                    <span className="text-primary-600 font-medium">{vision.timeline}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{vision.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">目标市场：</span>
                      {vision.market}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">
                      <span className="font-medium">社会影响：</span>
                      {vision.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">商业模式</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">收入模式</h4>
              <ul className="space-y-3">
                {businessModel.revenue.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">发展战略</h4>
              <ul className="space-y-3">
                {businessModel.strategy.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
