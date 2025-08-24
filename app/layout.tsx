import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Jerry Yang - Personal Website | Professional Experience and Entrepreneurial Projects',
  description: 'Jerry Yang\'s personal website showcasing professional experience, entrepreneurial journey, and AI-driven innovation projects',
  keywords: ['Jerry Yang', 'Personal Website', 'Professional Experience', 'Entrepreneurial Projects', 'AI Technology', 'Career Development', 'Timeline', 'Beliefs'],
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
