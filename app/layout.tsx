import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

export const metadata: Metadata = {
  title: '杨广 / Jerry Yang - 个人网站 | 个人介绍、履历和创业项目',
  description: '杨广/Jerry Yang的个人网站，展示个人介绍、过往履历、时间线、信条和未来创业项目',
  keywords: ['杨广', 'Jerry Yang', '个人网站', '个人介绍', '履历', '创业项目', '职业发展', '时间线', '信条'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 text-gray-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
