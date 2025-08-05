'use client'

import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DesktopNav } from './header/DesktopNav'
import { MobileNav } from './header/MobileNav'
import { Brand } from './header/Brand'
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
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement | null>(null)
  
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20])

  const fullText = 'Jeremy Hayes'
  const subtitle = 'Developer | Game Designer | Programmer'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/') {
      setDisplayText('')
      setCurrentIndex(0)
    } else {
      setDisplayText(fullText)
      setCurrentIndex(fullText.length)
    }
  }, [pathname, fullText])

  useEffect(() => {
    if (pathname !== '/' || currentIndex >= fullText.length) return
    const char = fullText[currentIndex]
    const delay = char === ' ' ? 50 : Math.random() * 100 + 100
    const timer = setTimeout(() => {
      setDisplayText((prev: string) => fullText.slice(0, prev.length + 1))
      setCurrentIndex((prev: number) => prev + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [currentIndex, fullText, pathname])

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
            ? 'bg-bg-primary/30 backdrop-blur-xl border-b border-white/20 shadow-lg'
            : 'bg-bg-primary/20 backdrop-blur-md border-b border-white/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur.get()}px)`,
        }}
        role="banner"
      >
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-2 w-8" />
            
            <Brand
              isScrolled={isScrolled}
              displayText={displayText}
              subtitle={subtitle}
              fullText={fullText}
              currentIndex={currentIndex}
            />

            <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          </div>

          <DesktopNav navItems={navItems} />
        </div>
      </motion.header>

      <MobileNav
        navItems={navItems}
        isOpen={isOpen}
        closeMenu={closeMenu}
        headerHeight={headerRef.current?.offsetHeight}
      />
    </>
  )
}

export default Header
