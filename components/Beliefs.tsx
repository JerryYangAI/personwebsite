'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Heart, Lightbulb, Target, Globe, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const Beliefs = () => {
  const { t } = useLanguage()

  const beliefs = [
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: '强者思维',
      description: '我选择红色药丸',
      color: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      bgColor: 'bg-red-100',
      textColor: 'text-red-800'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: '成长思维',
      description: '世界是由那些并不比你聪明的人拼凑起来的，你可以去改变它',
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: '创新思维',
      description: '在共识之中，寻找非共识',
      color: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800'
    }
  ]

  const principles = [
    {
      title: '持续学习',
      description: '从机械工程到AI技术，始终保持对新知识的渴望和学习能力',
      icon: '📚'
    },
    {
      title: '跨界融合',
      description: '将不同领域的知识和经验融合，创造独特的解决方案',
      icon: '🔗'
    },
    {
      title: '团队协作',
      description: '相信优秀团队的力量，通过协作实现个人无法达成的目标',
      icon: '🤝'
    },
    {
      title: '创新蝶变',
      description: '要在共识之中去寻找非共识',
      icon: '💎'
    }
  ]

  return (
    <section id="beliefs" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('beliefs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t('beliefs.subtitle')}
          </p>
          <Link 
            href="/beliefs" 
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-5 h-5" />
            查看完整人生信条
          </Link>
        </motion.div>

        {/* Core Beliefs */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${belief.color} p-8 rounded-2xl border ${belief.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`${belief.bgColor} p-3 rounded-xl`}>
                    {belief.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {belief.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {belief.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`inline-block px-4 py-2 ${belief.bgColor} ${belief.textColor} text-sm font-medium rounded-full border ${belief.borderColor}`}>
                    核心价值观
                  </span>
                  <ArrowRight className={`w-5 h-5 ${belief.textColor}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operating Principles */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            行动原则
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              让我们一起践行这些信念
            </h3>
            <p className="text-lg mb-6 opacity-90">
              如果您认同这些价值观和原则，欢迎加入我的AI驱动创业之旅，共同创造有意义的影响。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              联系我
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Beliefs
