'use client'

import React from 'react'
import Link from 'next/link'
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
}) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isTyping = isHome && currentIndex < fullText.length

  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="inline-flex flex-col items-center text-center"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className={[
          'font-bold leading-none tracking-tight transition-all duration-300',
          isScrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl',
        ].join(' ')}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
          {displayText}
        </span>

        {isTyping && (
          <motion.span
            className="ml-1 inline-block h-6 w-[3px] rounded-full bg-cyan-400 align-[-0.1em] md:h-8"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>

      <motion.span
        initial={false}
        animate={{
          opacity: isHome ? 0.9 : 0.75,
          y: 0,
        }}
        transition={{ duration: 0.3 }}
        className={[
          'mt-1 text-white/60 transition-all duration-300',
          isScrolled ? 'text-[11px]' : 'text-xs md:text-sm',
        ].join(' ')}
      >
        {subtitle}
      </motion.span>
    </Link>
  )
}
