'use client'

import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { DesktopNav } from './header/DesktopNav'
import { MobileNav } from './header/MobileNav'
import { MenuButton } from './header/MenuButton'

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeMenu])

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
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-[100] bg-black text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
        Skip to content
      </a>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/20 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        role="banner"
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a href="/" className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Jeremy Hayes
                </a>
              </motion.div>
            </div>

            <div className="hidden md:flex">
              <DesktopNav navItems={navItems} />
            </div>

            <div className="md:hidden">
              <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav
        navItems={navItems}
        isOpen={isOpen}
        closeMenu={closeMenu}
        headerHeight={headerRef.current?.offsetHeight}
      />

      <style jsx>{`
        header {
          position: relative;
          z-index: 1;
          color: white;
          text-align: center;
          padding: 1rem 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.1), transparent 70%);
          z-index: 0;
        }
        
        header > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </>
  )
}

export default Header
