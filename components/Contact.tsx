'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import ProfileImage from './ProfileImage'

const Contact = () => {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: '邮箱',
      value: 'yangguang8666@gmail.com',
      link: 'mailto:yangguang8666@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: '地址',
      value: '上海/杭州/大阪/旧金山/纽约',
      link: null
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">联系方式</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">社交媒体</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="text-lg font-semibold text-primary-900 mb-3">合作机会</h4>
              <p className="text-primary-700 leading-relaxed">
                我正在寻找志同道合的合作伙伴，包括技术人才、投资人、行业专家等。
                如果您对我的项目感兴趣，欢迎讨论合作可能性。
              </p>
            </div>
          </motion.div>

          {/* Contact Form and Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <ProfileImage
                src="/images/profile-contact.jpg"
                alt="Jerry Yang - Contact Me"
                className="w-64 h-80"
              />
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">发送消息</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">📝 留言说明</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  请使用下方的Google Forms表单发送您的消息。所有留言将直接发送到我的邮箱，我会尽快回复您。
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>表单完全免费，无需注册账户</span>
                </div>
              </div>

              {/* Google Forms Embed */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-primary-600 px-4 py-3">
                  <h4 className="text-white font-semibold">联系表单</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">
                    请点击下方按钮打开Google Forms，填写您的留言信息：
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDXvNDATKl9BSTDsrhqedCOgY_oA-bXn8cwM0Nyq_yJfSt9A/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    打开联系表单
                  </a>
                  <p className="text-xs text-gray-500 mt-3">
                    * 表单将在新标签页中打开，提交后会自动关闭
                  </p>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">💡 其他联系方式</h4>
                <p className="text-blue-700 leading-relaxed mb-4">
                  如果您更喜欢直接联系，也可以通过以下方式：
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-800">直接发送邮件至：yangguang8666@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 2.692v4.811h-4.605V9h4.605v1.561h.035c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-blue-800">通过LinkedIn联系我</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
