'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const pathname = usePathname()

  const fullText = 'Jeremy Hayes'
  const subtitle = 'Developer | Game Designer | Programmer'

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  // Reset typewriter only on home route
  useEffect(() => {
    if (pathname === '/') {
      setDisplayText('')
      setCurrentIndex(0)
    } else {
      // Immediately show full name on other routes
      setDisplayText(fullText)
      setCurrentIndex(fullText.length)
    }
  }, [pathname])

  // Typewriter effect with cleanup
  useEffect(() => {
    if (pathname !== '/' || currentIndex >= fullText.length) return
    
    const timer = setTimeout(() => {
      setDisplayText(prev => fullText.slice(0, prev.length + 1))
      setCurrentIndex(prev => prev + 1)
    }, 150)

    return () => clearTimeout(timer)
  }, [currentIndex, fullText, pathname])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <motion.header 
      className="fixed top-0 inset-x-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Spacer for layout balance */}
          <div className="w-12 md:hidden" />
          
          {/* Desktop logo placeholder */}
          <div className="hidden md:block w-12" />
          
          {/* Name and title */}
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="font-mono bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {displayText}
                {pathname === '/' && currentIndex < fullText.length && (
                  <motion.span
                    className="inline-block w-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 ml-1 rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </span>
            </motion.div>
            
            <motion.div 
              className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2 opacity-0"
              animate={{ opacity: pathname === '/' ? 1 : 0.8 }}
              transition={{ delay: pathname === '/' ? 2 : 0, duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          </div>

          {/* Menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative bg-transparent border border-white/20 rounded-lg p-2 transition-all duration-300 hover:bg-white/5 hover:border-white/40">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X size={20} className="text-white" />
                ) : (
                  <Menu size={20} className="text-white" />
                )}
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex items-center justify-center gap-4 py-3 mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} scroll={false}>
              <motion.div
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full inset-x-0 bg-black/95 backdrop-blur-lg border-b border-white/10"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  <Link href={item.href} scroll={false} onClick={closeMenu}>
                    <div
                      className={`px-5 py-3 text-base font-medium transition-colors duration-300 ${
                        pathname === item.href
                          ? 'text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header