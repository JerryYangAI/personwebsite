'use client'

import { motion } from 'framer-motion'
import { User, Target, Heart, Lightbulb } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import ProfileImage from './ProfileImage'

const About = () => {
  const { t } = useLanguage()


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
                {t('about.personalDesc1')}
              </p>
              <p>
                {t('about.personalDesc2')}
              </p>
              <p>
                {t('about.personalDesc3')}
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
              alt="Jerry Yang - About Me"
              className="w-72 h-80"
            />
          </motion.div>
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
