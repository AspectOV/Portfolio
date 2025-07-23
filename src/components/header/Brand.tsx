'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface BrandProps {
  isScrolled: boolean
  displayText: string
  subtitle: string
  fullText: string
  currentIndex: number
}

export const Brand: React.FC<BrandProps> = ({
  isScrolled,
  displayText,
  subtitle,
  fullText,
  currentIndex,
}: BrandProps) => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        className={`transition-all duration-300 font-bold ${
          isScrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
        }`}
        whileHover={{
          scale: 1.02,
          textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <span className="font-mono bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          {displayText}
          {pathname === '/' && currentIndex < fullText.length && (
            <motion.span
              className="inline-block w-0.5 h-6 md:h-8 bg-gradient-to-b from-blue-400 to-purple-500 ml-1 rounded-full"
              animate={{
                opacity: [1, 0, 1],
                scaleY: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </span>
      </motion.div>
      <motion.div
        className={`text-gray-300 mt-1 transition-all duration-300 ${
          isScrolled ? 'text-xs opacity-70' : 'text-xs md:text-sm opacity-80'
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: pathname === '/' ? 1 : 0.8, y: 0 }}
        transition={{ delay: pathname === '/' ? 2.2 : 0, duration: 0.6 }}
      >
        {subtitle}
      </motion.div>
    </div>
  )
} 