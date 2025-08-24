'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Timeline = () => {
  const { t } = useLanguage()

  const timelineEvents = [
    {
      period: '2025年9月 - 至今',
      title: '斯坦福大学',
      subtitle: '人工智能与计算机科学硕士在读',
      location: '美国斯坦福',
      description: '就读人工智能与计算机科学硕士项目，深入学习生成式人工智能、大语言模型、视觉模型与扩散模型等前沿技术。',
      category: 'education',
      link: null,
      current: true
    },
    {
      period: '2019年 - 2025年9月',
      title: '耀出行（StarRides）',
      subtitle: '首席执行官（CEO）',
      location: '亚洲',
      description: '初任首席运营官，后升任首席执行官，全面负责公司的经营与运营管理。带领公司从0到1开创高品质出行业务，打造横跨亚洲的高端出行第一品牌。',
      category: 'entrepreneurship',
      link: null,
      current: false
    },
    {
      period: '2016年 - 2019年',
      title: '滴滴出行（DiDi Chuxing）',
      subtitle: '战略与运营管理',
      location: '全球',
      description: '推动跨国战略项目落地与实施，涵盖美国、英国、印度等市场。在规模化运营和国际化拓展方面发挥关键作用。',
      category: 'engineering',
      link: null,
      current: false
    },
    {
      period: '2014年 - 2015年',
      title: '波士顿咨询公司（BCG）',
      subtitle: '战略顾问',
      location: '全球',
      description: '服务于汽车与高端消费品行业客户，参与美国、英国、印度等市场的跨国战略与转型项目。在商业模式创新、组织优化及企业增长战略方面有成功案例。',
      category: 'consulting',
      link: null,
      current: false
    },
    {
      period: '2011年 - 2014年',
      title: '捷豹路虎汽车公司（Jaguar Land Rover）',
      subtitle: '全球战略部经理',
      location: '全球',
      description: '负责全球战略规划与市场拓展，主导多项跨国业务战略项目。在高端汽车品牌国际化战略和企业增长路径方面积累了丰富经验。',
      category: 'automotive',
      link: null,
      current: false
    },
    {
      period: '2005年 - 2009年',
      title: '福特汽车公司（Ford Motor Company）',
      subtitle: '机械工程师',
      location: '全球',
      description: '参与整车研发与工程项目，积累了扎实的汽车工程与项目管理经验。为后续的战略管理岗位奠定技术基础。',
      category: 'engineering',
      link: null,
      current: false
    }
  ]

  const educationEvents = [
    {
      period: '2025 - 2026',
      title: '斯坦福大学',
      subtitle: '人工智能与计算机科学硕士',
      location: '美国斯坦福',
      description: '斯坦福大学计算机科学系人工智能与计算机科学硕士项目，学习方向：生成式人工智能、大语言模型、视觉模型、扩散模型。',
      category: 'education',
      link: null,
      current: false
    },
    {
      period: '2016 - 2017',
      title: '美国密歇根大学信息科学学院',
      subtitle: '数据科学硕士',
      location: '美国安娜堡',
      description: '美国密歇根大学信息科学学院数据科学硕士项目，学习方向：机器学习、数据分析、人工智能基础。',
      category: 'education',
      link: null,
      current: false
    },
    {
      period: '2001 - 2005',
      title: '南京理工大学',
      subtitle: '机械工程学士',
      location: '中国南京',
      description: '南京理工大学机械工程本科专业，为后续的汽车工程和战略管理职业发展奠定坚实基础。',
      category: 'education',
      link: null,
      current: false
    }
  ]

  const futureEvents = [
    {
      period: '2026',
      title: 'AI驱动的出行解决方案',
      subtitle: '新项目启动',
      location: '全球',
      description: '结合斯坦福大学学到的AI技术，开发下一代智能出行平台，整合生成式AI、计算机视觉等技术。',
      category: 'future',
      link: null,
      current: false
    },
    {
      period: '2027',
      title: '智能城市交通平台',
      subtitle: '城市数字化转型',
      location: '全球',
      description: '基于AI技术构建智慧城市交通系统，通过大语言模型和视觉模型优化城市交通流量和出行体验。',
      category: 'future',
      link: null,
      current: false
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'entrepreneurship':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'engineering':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'consulting':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'automotive':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'education':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'future':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'entrepreneurship':
        return '🚀'
      case 'engineering':
        return '⚙️'
      case 'consulting':
        return '💼'
      case 'automotive':
        return '🚗'
      case 'education':
        return '🎓'
      case 'future':
        return '🔮'
      default:
        return '📌'
    }
  }

  return (
    <section id="timeline" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('timeline.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        {/* Current Status */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('timeline.current')}
          </h3>
          <div className="max-w-4xl mx-auto">
            {timelineEvents.filter(event => event.current).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-2xl font-bold text-gray-900">{event.title}</h4>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full border border-purple-200">
                        {t('timeline.current')}
                      </span>
                    </div>
                    <h5 className="text-xl font-semibold text-purple-600 mb-2">{event.subtitle}</h5>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            职业经历
          </h3>
          <div className="max-w-4xl mx-auto">
            {timelineEvents.filter(event => !event.current).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${getCategoryColor(event.category)} rounded-full flex items-center justify-center text-lg font-bold border`}>
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-primary-600 mb-2">{event.subtitle}</h5>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mt-3 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        了解更多
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            教育背景
          </h3>
          <div className="max-w-4xl mx-auto">
            {educationEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${getCategoryColor(event.category)} rounded-full flex items-center justify-center text-lg font-bold border`}>
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-primary-600 mb-2">{event.subtitle}</h5>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('timeline.future')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {futureEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center text-xl font-bold border border-indigo-200">
                    {getCategoryIcon(event.category)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                    <span className="text-indigo-600 font-medium">{event.period}</span>
                  </div>
                </div>
                <h5 className="text-lg font-semibold text-indigo-600 mb-2">{event.subtitle}</h5>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
