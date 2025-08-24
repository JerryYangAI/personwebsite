'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Jerry Yang</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              致力于通过创新和创业精神改变世界，创造真正的价值。
            </p>
            <p className="text-gray-400 text-sm">
              让我们一起构建更美好的未来。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">{t('nav.about')}</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-white transition-colors duration-200">{t('nav.timeline')}</a></li>
              <li><a href="#beliefs" className="text-gray-300 hover:text-white transition-colors duration-200">{t('nav.beliefs')}</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">{t('nav.projects')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系信息</h4>
            <div className="space-y-2 text-gray-300">
              <p>邮箱：yangguang8666@gmail.com</p>
              <p>地址：上海/杭州/大阪/旧金山/纽约</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Jerry Yang. 保留所有权利.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>用心制作</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>在</span>
              <span className="text-primary-400">中国</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-md shadow-lg transition-all duration-200 hover:scale-110"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
