'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20])

  const fullText = 'Jeremy Hayes'
  const subtitle = 'Developer | Game Designer | Programmer'

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset typewriter only on home route
  useEffect(() => {
    if (pathname === '/') {
      setDisplayText('')
      setCurrentIndex(0)
    } else {
      setDisplayText(fullText)
      setCurrentIndex(fullText.length)
    }
  }, [pathname])

  // Enhanced typewriter effect with variable speed
  useEffect(() => {
    if (pathname !== '/' || currentIndex >= fullText.length) return
    
    const char = fullText[currentIndex]
    const delay = char === ' ' ? 50 : Math.random() * 100 + 100 // Shorter delay for spaces
    
    const timer = setTimeout(() => {
      setDisplayText(prev => fullText.slice(0, prev.length + 1))
      setCurrentIndex(prev => prev + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [currentIndex, fullText, pathname])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeMenu])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.header 
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-lg' 
            : 'bg-black/20 backdrop-blur-md border-b border-white/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ 
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`
        }}
      >
        <div className="container py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Brand area - could add actual logo here */}
            <motion.div 
              className="hidden md:flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
            </motion.div>
            
            {/* Mobile spacer */}
            <div className="w-8 md:hidden" />
            
            {/* Name and title */}
            <div className="flex flex-col items-center text-center">
              <motion.div 
                className={`transition-all duration-300 font-bold ${
                  isScrolled 
                    ? 'text-2xl md:text-3xl' 
                    : 'text-3xl md:text-4xl'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="font-mono bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  {displayText}
                  {pathname === '/' && currentIndex < fullText.length && (
                    <motion.span
                      className="inline-block w-0.5 h-6 md:h-8 bg-gradient-to-b from-blue-400 to-purple-500 ml-1 rounded-full"
                      animate={{ 
                        opacity: [1, 0, 1],
                        scaleY: [1, 0.8, 1]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </span>
              </motion.div>
              
              <motion.div 
                className={`text-gray-300 mt-1 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-xs opacity-70' 
                    : 'text-xs md:text-sm opacity-80'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: pathname === '/' ? 1 : 0.8, y: 0 }}
                transition={{ delay: pathname === '/' ? 2.2 : 0, duration: 0.6 }}
              >
                {subtitle}
              </motion.div>
            </div>

            {/* Enhanced menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className={`relative transition-all duration-300 rounded-xl p-3 ${
                isOpen 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/40' 
                  : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/40'
              } border backdrop-blur-sm`}>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={18} className="text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={18} className="text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center justify-center gap-1 py-2 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} scroll={false}>
                <motion.div
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                    pathname === item.href
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ 
                    y: -2,
                    boxShadow: pathname === item.href 
                      ? "0 10px 25px rgba(59, 130, 246, 0.2)" 
                      : "0 5px 15px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7 + index * 0.1, duration: 0.4 }}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      layoutId="activeDesktopTab"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </motion.nav>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Menu */}
            <motion.div
              className="md:hidden fixed top-[calc(100%_-_1px)] inset-x-0 z-50 bg-gradient-to-b from-black/95 to-black/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ top: headerRef.current?.offsetHeight || 80 }}
            >
              <div className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={item.href} scroll={false} onClick={closeMenu}>
                      <motion.div
                        className={`mx-4 mb-2 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg'
                            : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                        whileHover={{ x: 8, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          {item.label}
                          {pathname === item.href && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            />
                          )}
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </>
  )
}

export default Header
