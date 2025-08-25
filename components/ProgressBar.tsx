'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  skill: string
  percentage: number
  color?: 'primary' | 'secondary' | 'blue' | 'green' | 'purple'
  delay?: number
}

const ProgressBar = ({ skill, percentage, color = 'primary', delay = 0 }: ProgressBarProps) => {
  const colorClasses = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className={`h-2 rounded-full ${colorClasses[color]} shadow-sm`}
        />
      </div>
    </motion.div>
  )
}

export default ProgressBar
