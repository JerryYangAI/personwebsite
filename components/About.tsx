'use client'

import { motion } from 'framer-motion'
import { User, Target, Heart, Lightbulb } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import ProfileImage from './ProfileImage'

const About = () => {
  const { t } = useLanguage()

  const skills = [
    '战略规划', '团队领导', '项目管理', '市场分析',
    '产品开发', '客户关系', '数据分析', 'AI技术应用',
    '国际化运营', '品牌建设', '商业模式创新', '组织优化'
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: t('about.targetOriented'),
      description: t('about.targetDesc')
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: t('about.peopleFirst'),
      description: t('about.peopleDesc')
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: t('about.innovative'),
      description: t('about.innovativeDesc')
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('about.personalIntro')}
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                我是一名从机械工程师成长为企业CEO，再到斯坦福大学AI研究生的复合型人才。我的职业发展跨越了汽车制造、战略咨询、互联网出行和人工智能等多个领域。
              </p>
              <p>
                在耀出行担任CEO期间，我带领团队从0到1开创了高品质出行业务，打造了横跨亚洲的高端出行第一品牌。这段经历让我深刻理解了如何将技术创新与商业战略相结合。
              </p>
              <p>
                现在我在斯坦福大学攻读AI与计算机科学硕士，专注于生成式人工智能、大语言模型、视觉模型和扩散模型等前沿技术，为未来的AI驱动创业项目奠定技术基础。
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ProfileImage
              src="/images/profile-about.jpg"
              alt="杨广 / Jerry Yang - 关于我"
              className="w-72 h-80"
            />
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">核心技能</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-50 px-4 py-3 rounded-lg shadow-sm text-center text-gray-700 font-medium hover:shadow-md transition-shadow duration-200 border border-gray-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('about.valuesSubtitle')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 bg-white border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
