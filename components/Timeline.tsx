'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Timeline = () => {
  const { t } = useLanguage()

  const timelineEvents = [
    {
      period: t('timeline.events.stanford.period'),
      title: t('timeline.events.stanford.title'),
      subtitle: t('timeline.events.stanford.subtitle'),
      location: t('timeline.events.stanford.location'),
      description: t('timeline.events.stanford.description'),
      category: 'education',
      link: null,
      current: true
    },
    {
      period: t('timeline.events.starrides.period'),
      title: t('timeline.events.starrides.title'),
      subtitle: t('timeline.events.starrides.subtitle'),
      location: t('timeline.events.starrides.location'),
      description: t('timeline.events.starrides.description'),
      category: 'entrepreneurship',
      link: null,
      current: false
    },
    {
      period: t('timeline.events.didi.period'),
      title: t('timeline.events.didi.title'),
      subtitle: t('timeline.events.didi.subtitle'),
      location: t('timeline.events.didi.location'),
      description: t('timeline.events.didi.description'),
      category: 'entrepreneurship',
      link: null,
      current: false
    },
    {
      period: t('timeline.events.bcg.period'),
      title: t('timeline.events.bcg.title'),
      subtitle: t('timeline.events.bcg.subtitle'),
      location: t('timeline.events.bcg.location'),
      description: t('timeline.events.bcg.description'),
      category: 'consulting',
      link: null,
      current: false
    },
    {
      period: t('timeline.events.jlr.period'),
      title: t('timeline.events.jlr.title'),
      subtitle: t('timeline.events.jlr.subtitle'),
      location: t('timeline.events.jlr.location'),
      description: t('timeline.events.jlr.description'),
      category: 'strategy',
      link: null,
      current: false
    },
    {
      period: t('timeline.events.ford.period'),
      title: t('timeline.events.ford.title'),
      subtitle: t('timeline.events.ford.subtitle'),
      location: t('timeline.events.ford.location'),
      description: t('timeline.events.ford.description'),
      category: 'engineering',
      link: null,
      current: false
    }
  ]

  const educationEvents = [
    {
      period: t('timeline.education.stanford.period'),
      title: t('timeline.education.stanford.title'),
      subtitle: t('timeline.education.stanford.subtitle'),
      location: t('timeline.education.stanford.location'),
      description: t('timeline.education.stanford.description'),
      category: 'education',
      link: null,
      current: false
    },
    {
      period: t('timeline.education.harvard.period'),
      title: t('timeline.education.harvard.title'),
      subtitle: t('timeline.education.harvard.subtitle'),
      location: t('timeline.education.harvard.location'),
      description: t('timeline.education.harvard.description'),
      category: 'education',
      link: null,
      current: false
    },
    {
      period: t('timeline.education.michigan.period'),
      title: t('timeline.education.michigan.title'),
      subtitle: t('timeline.education.michigan.subtitle'),
      location: t('timeline.education.michigan.location'),
      description: t('timeline.education.michigan.description'),
      category: 'education',
      link: null,
      current: false
    },
    {
      period: t('timeline.education.ceibs.period'),
      title: t('timeline.education.ceibs.title'),
      subtitle: t('timeline.education.ceibs.subtitle'),
      location: t('timeline.education.ceibs.location'),
      description: t('timeline.education.ceibs.description'),
      category: 'education',
      link: null,
      current: false
    }
  ]

  const futureEvents = [
    {
      title: t('timeline.future.llm.title'),
      subtitle: t('timeline.future.llm.subtitle'),
      description: t('timeline.future.llm.description'),
      category: 'ai',
      icon: '📝'
    },
    {
      title: t('timeline.future.generative.title'),
      subtitle: t('timeline.future.generative.subtitle'),
      description: t('timeline.future.generative.description'),
      category: 'ai',
      icon: '🎨'
    },
    {
      title: t('timeline.future.agent.title'),
      subtitle: t('timeline.future.agent.subtitle'),
      description: t('timeline.future.agent.description'),
      category: 'ai',
      icon: '🤖'
    },
    {
      title: t('timeline.future.machine.title'),
      subtitle: t('timeline.future.machine.subtitle'),
      description: t('timeline.future.machine.description'),
      category: 'ai',
      icon: '⚡'
    },
    {
      title: t('timeline.future.driving.title'),
      subtitle: t('timeline.future.driving.subtitle'),
      description: t('timeline.future.driving.description'),
      category: 'ai',
      icon: '🛣️'
    },
    {
      title: t('timeline.future.robot.title'),
      subtitle: t('timeline.future.robot.subtitle'),
      description: t('timeline.future.robot.description'),
      category: 'ai',
      icon: '🦾'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      'education': 'from-blue-500 to-blue-600',
      'entrepreneurship': 'from-green-500 to-green-600',
      'consulting': 'from-purple-500 to-purple-600',
      'strategy': 'from-orange-500 to-orange-600',
      'engineering': 'from-gray-500 to-gray-600',
      'automotive': 'from-red-500 to-red-600',
      'ai': 'from-indigo-500 to-purple-600'
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      'education': '🎓',
      'entrepreneurship': '🚀',
      'consulting': '💼',
      'strategy': '🎯',
      'engineering': '⚙️',
      'automotive': '🚗',
      'ai': '🤖'
    }
    return icons[category as keyof typeof icons] || '📋'
  }

  const getCategoryBgColor = (category: string) => {
    const colors = {
      'education': 'bg-blue-50 border-blue-200',
      'entrepreneurship': 'bg-green-50 border-green-200',
      'consulting': 'bg-purple-50 border-purple-200',
      'strategy': 'bg-orange-50 border-orange-200',
      'engineering': 'bg-gray-50 border-gray-200',
      'automotive': 'bg-red-50 border-red-200',
      'ai': 'bg-indigo-50 border-indigo-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200'
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
            {t('timeline.experienceLabel')}
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
                    <div className={`w-12 h-12 ${getCategoryBgColor(event.category)} rounded-full flex items-center justify-center text-lg font-bold border`}>
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getCategoryBgColor(event.category)}`}>
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
            {t('timeline.educationLabel')}
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
                    <div className={`w-12 h-12 ${getCategoryBgColor(event.category)} rounded-full flex items-center justify-center text-lg font-bold border`}>
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getCategoryBgColor(event.category)}`}>
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
            {t('timeline.futureLabel')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {futureEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center text-2xl font-bold border border-indigo-200 mx-auto mb-3">
                    {event.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h4>
                  <span className="text-indigo-600 font-medium text-sm">{event.subtitle}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
