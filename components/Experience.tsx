'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      period: '2025年9月 - 至今',
      company: '斯坦福大学',
      position: '人工智能与计算机科学硕士在读',
      location: '美国斯坦福',
      description: '就读人工智能与计算机科学硕士项目，深入学习生成式人工智能、大语言模型、视觉模型与扩散模型等前沿技术。',
      achievements: [
        '深入学习生成式人工智能与大语言模型技术',
        '研究视觉模型与扩散模型等前沿AI技术',
        '为未来在AI领域的创业项目奠定技术基础'
      ]
    },
    {
      period: '2019年 - 2025年9月',
      company: '耀出行（StarRides）',
      position: '首席执行官（首席执行官）',
      location: '亚洲',
      description: '初任首席运营官，后升任首席执行官，全面负责公司的经营与运营管理。',
      achievements: [
        '带领公司从0到1开创高品质出行业务',
        '打造横跨亚洲的高端出行第一品牌',
        '在品牌建设与市场份额扩展方面取得显著成就',
        '推动人工智能领域的最新技术在出行行业的应用',
        '探索智能出行的未来方向'
      ]
    },
    {
      period: '2017年 - 2019年',
      company: '滴滴出行（DiDi Chuxing）',
      position: '战略与运营管理',
      location: '全球',
      description: '推动跨国战略项目落地与实施，涵盖美国、英国、印度等市场。在规模化运营和国际化拓展方面发挥关键作用。',
      achievements: [
        '推动跨国战略项目落地与实施',
        '涵盖美国、英国、印度等市场',
        '在规模化运营和国际化拓展方面发挥关键作用'
      ]
    },
    {
      period: '2014年 - 2015年',
      company: '波士顿咨询公司（BCG）',
      position: '战略顾问',
      location: '全球',
      description: '服务于汽车与高端消费品行业客户，参与美国、英国、印度等市场的跨国战略与转型项目。',
      achievements: [
        '服务于汽车与高端消费品行业客户',
        '参与美国、英国、印度等市场的跨国战略与转型项目',
        '在商业模式创新、组织优化及企业增长战略方面有成功案例'
      ]
    },
    {
      period: '2011年 - 2014年',
      company: '捷豹路虎汽车公司（Jaguar Land Rover）',
      position: '全球战略部经理',
      location: '全球',
      description: '负责全球战略规划与市场拓展，主导多项跨国业务战略项目。',
      achievements: [
        '负责全球战略规划与市场拓展',
        '主导多项跨国业务战略项目',
        '在高端汽车品牌国际化战略和企业增长路径方面积累了丰富经验'
      ]
    },
    {
      period: '2005年 - 2009年',
      company: '福特汽车公司（Ford Motor Company）',
      position: '机械工程师',
      location: '全球',
      description: '参与整车研发与工程项目，积累了扎实的汽车工程与项目管理经验。',
      achievements: [
        '参与整车研发与工程项目',
        '积累了扎实的汽车工程与项目管理经验',
        '为后续的战略管理岗位奠定技术基础'
      ]
    }
  ]

  const education = [
    {
      period: '2025 - 2026',
      school: '斯坦福大学',
      degree: '人工智能与计算机科学硕士',
      major: 'Master of Science in AI & Computer Science',
      description: '斯坦福大学计算机科学系人工智能与计算机科学硕士项目，学习方向：生成式人工智能、大语言模型、视觉模型、扩散模型。'
    },
    {
      period: '2023 - 2024',
      school: '哈佛商学院',
      degree: '高级工商管理硕士',
      major: 'Executive MBA',
      description: '哈佛商学院Executive MBA项目，专注于高级管理技能、全球商业战略和领导力发展。'
    },
    {
      period: '2016 - 2017',
      school: '美国密歇根大学信息科学学院',
      degree: '数据科学硕士',
      major: 'Master of Science in Data Science',
      description: '美国密歇根大学信息科学学院数据科学硕士项目，学习方向：机器学习、数据分析、人工智能基础。'
    },
    {
      period: '2009 - 2011',
      school: '中欧国际工商学院',
      degree: '工商管理硕士',
      major: 'MBA',
      description: '中欧国际工商学院MBA项目，系统学习现代企业管理理论，培养国际化商业思维和领导能力。'
    }
  ]

  const certifications = [
    {
      name: 'PMP项目管理认证',
      issuer: 'PMI',
      year: '2021',
      description: '国际认可的项目管理专业认证'
    },
    {
      name: '产品经理认证',
      issuer: '行业权威机构',
      year: '2019',
      description: '产品管理专业能力认证'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            职业履历
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我的职业发展历程，从机械工程师到企业CEO，每一步都为我积累了宝贵的经验和技能
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">工作经历</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h4 className="text-2xl font-bold text-gray-900">{exp.position}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <h5 className="text-xl font-semibold text-primary-600 mb-3">{exp.company}</h5>
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h6 className="font-semibold text-gray-900 mb-2">主要成就：</h6>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">教育背景</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 text-secondary-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <h5 className="text-xl font-semibold text-primary-600 mb-2">{edu.school}</h5>
                    <p className="text-gray-600 mb-3">{edu.major}</p>
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">专业认证</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
                <p className="text-primary-600 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-700">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
