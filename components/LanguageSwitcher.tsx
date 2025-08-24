'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { languages, Language } from '../lib/i18n'
import { Globe, ChevronDown } from 'lucide-react'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{languages[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                language === code ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
