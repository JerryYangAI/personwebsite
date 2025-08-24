'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

const ProfileImage = ({ src, alt, className = '', priority = false }: ProfileImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={500}
        priority={priority}
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center top' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export default ProfileImage
