'use client'

import { motion } from 'framer-motion'
import { Rocket, Users, Target, TrendingUp, Globe, Lightbulb } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const currentProjects = [
    {
      title: t('projects.currentProjects.aiAgent.title'),
      description: t('projects.currentProjects.aiAgent.description'),
      status: t('projects.currentProjects.aiAgent.status'),
      progress: 80,
      features: t('projects.currentProjects.aiAgent.features'),
      team: t('projects.currentProjects.aiAgent.team'),
      timeline: t('projects.currentProjects.aiAgent.timeline'),
      icon: <Target className="w-8 h-8 text-blue-600" />,
      category: 'ai'
    },
    {
      title: t('projects.currentProjects.robot.title'),
      description: t('projects.currentProjects.robot.description'),
      status: t('projects.currentProjects.robot.status'),
      progress: 60,
      features: t('projects.currentProjects.robot.features'),
      team: t('projects.currentProjects.robot.team'),
      timeline: t('projects.currentProjects.robot.timeline'),
      icon: <Users className="w-8 h-8 text-purple-600" />,
      category: 'robotics'
    },
    {
      title: t('projects.currentProjects.mystery.title'),
      description: t('projects.currentProjects.mystery.description'),
      status: t('projects.currentProjects.mystery.status'),
      progress: 0,
      features: t('projects.currentProjects.mystery.features'),
      team: t('projects.currentProjects.mystery.team'),
      timeline: t('projects.currentProjects.mystery.timeline'),
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      category: 'mystery'
    }
  ]



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
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Current Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('projects.currentProjectsLabel')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`card border-l-4 ${
                  project.category === 'ai' ? 'border-l-blue-500' :
                  project.category === 'robotics' ? 'border-l-purple-500' :
                  'border-l-yellow-500'
                } ${project.category === 'mystery' ? 'relative overflow-hidden' : ''}`}
              >
                {/* 神秘项目特殊效果 */}
                {project.category === 'mystery' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-yellow-100/30 pointer-events-none"></div>
                )}
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl ${
                    project.category === 'ai' ? 'bg-blue-50' :
                    project.category === 'robotics' ? 'bg-purple-50' :
                    'bg-yellow-50'
                  }`}>
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      project.category === 'ai' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'robotics' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">{project.description}</p>

                {/* Progress Bar - 神秘项目不显示进度条 */}
                {project.category !== 'mystery' && (
                  <div className="mb-6 relative z-10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">项目进度</span>
                      <span className={`text-sm font-medium ${
                        project.category === 'ai' ? 'text-blue-600' :
                        'text-purple-600'
                      }`}>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          project.category === 'ai' ? 'bg-blue-600' :
                          'bg-purple-600'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6 relative z-10">
                  <h5 className="font-semibold text-gray-900 mb-3">核心功能：</h5>
                  <ul className="space-y-2">
                    {(Array.isArray(project.features) ? project.features : []).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          project.category === 'ai' ? 'bg-blue-500' :
                          project.category === 'robotics' ? 'bg-purple-500' :
                          'bg-yellow-500'
                        }`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 text-sm relative z-10">
                  <div>
                    <span className="text-gray-500">团队规模：</span>
                    <span className="font-medium text-gray-900">{project.team}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">预计上线：</span>
                    <span className="font-medium text-gray-900">{project.timeline}</span>
                  </div>
                </div>

                {/* 神秘项目呼吸光效 */}
                {project.category === 'mystery' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision - AI Progress Curve */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('projects.futureVision')}
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('projects.futureVisionDescription')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：AI进步曲线图 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                {/* 图表标题 */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('projects.aiProgress.title')}</h4>
                  <p className="text-gray-600">{t('projects.aiProgress.subtitle')}</p>
                </div>

                {/* 使用您提供的图片 */}
                <div className="relative">
                  <img 
                    src="/images/ai-progress-curve.png" 
                    alt="AI进步与社会影响曲线图" 
                    className="w-full h-auto rounded-lg shadow-lg"
                    onError={(e) => {
                      // 如果图片加载失败，显示一个占位符
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  {/* 备用SVG图表 */}
                  <div className="hidden w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-4">📈</div>
                      <p>AI进步曲线图</p>
                      <p className="text-sm">请将图片放置在 /public/images/ai-progress-curve.png</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右侧：文本解读 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.aiProgress.analysisTitle')}</h4>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {t('projects.aiProgress.analysisDescription')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('projects.aiProgress.point1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('projects.aiProgress.point2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('projects.aiProgress.point3')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{t('projects.aiProgress.point4')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('projects.superIntelligence.title')}</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('projects.superIntelligence.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
