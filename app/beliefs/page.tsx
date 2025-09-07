'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Lightbulb, Target, Globe, BookOpen, Users, Zap, Star, Waves } from 'lucide-react'
import Link from 'next/link'

const BeliefsPage = () => {
  const beliefs = [
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: '强者思维',
      description: '我选择红色药丸',
      author: 'Jerry Yang',
      category: 'mindset'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: '成长思维',
      description: '世界是由那些并不比你聪明的人拼凑起来的，你可以去改变它',
      author: 'Jerry Yang',
      category: 'growth'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: '创新思维',
      description: '在共识之中，寻找非共识',
      author: 'Jerry Yang',
      category: 'innovation'
    },
    {
      icon: <Waves className="w-8 h-8 text-teal-600" />,
      title: '冲浪思维',
      description: '要在时代的浪潮中去找到属于你的那一浪',
      author: 'Jerry Yang',
      category: 'surfing'
    }
  ]

  const principles = [
    {
      icon: '🔍',
      title: '洞察周期，笃定前行',
      description: '深刻理解"周期"的规律，在起伏与波动中，坚持信念与长期主义的价值取向，才能照亮前行的道路。',
      category: 'insight'
    },
    {
      icon: '🎯',
      title: '将军赶路，不逐小兔',
      description: '专注长期目标，不被短期机会和噪音分散注意力，以坚定的战略眼光指引方向。',
      category: 'focus'
    },
    {
      icon: '⚡',
      title: '在干中学，干即是学',
      description: '学习最好的方式就是实践，在不断行动中积累经验，在不断迭代中收获成长。',
      category: 'action'
    }
  ]

  const quotes = [
    {
      text: "技术不是目的，而是手段。真正的价值在于我们如何用它来改善人类的生活。",
      author: "Jerry Yang",
      source: "个人感悟"
    },
    {
      text: "在共识中寻找非共识，在平凡中发现非凡，这就是创新的真谛。",
      author: "Jerry Yang", 
      source: "创新思考"
    },
    {
      text: "每一次失败都是通向成功的垫脚石，每一次挫折都是成长的催化剂。",
      author: "Jerry Yang",
      source: "人生感悟"
    },
    {
      text: "真正的领导力不是控制，而是赋能；不是命令，而是启发。",
      author: "Jerry Yang",
      source: "管理哲学"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-medium">返回首页</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">我的人生信条</h1>
              <p className="text-sm text-gray-500">My Life Beliefs</p>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              人生信条
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              这些是我在人生旅程中逐渐形成的核心信念和价值观，它们指引着我的每一个决策和行动。
            </p>
          </motion.div>

          {/* Core Beliefs */}
          <section className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">核心信念</h3>
            <div className="space-y-8">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
                        {belief.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{belief.title}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">{belief.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">{belief.author}</span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span className="capitalize">{belief.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Operating Principles */}
          <section className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">行动原则</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      {principle.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{principle.title}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Personal Quotes */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">个人感悟</h3>
            <div className="space-y-6">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200"
                >
                  <blockquote className="text-xl text-gray-800 leading-relaxed mb-4 italic">
                    "{quote.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{quote.author}</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border border-blue-200">
                      {quote.source}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 rounded-2xl text-white">
              <p className="text-xl mb-4">
                "人生不是一场赛跑，而是一次旅行。重要的不是终点，而是沿途的风景和内心的成长。"
              </p>
              <p className="text-lg opacity-80">— Jerry Yang</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default BeliefsPage
