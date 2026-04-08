'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DesktopNav } from './header/DesktopNav'
import { MobileNav } from './header/MobileNav'
import { MenuButton } from './header/MenuButton'
import { ThemeToggle } from './header/ThemeToggle'

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    if (!isOpen) return

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeMenu])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const previousHtmlOverflow = html.style.overflow
    const previousBodyOverflow = body.style.overflow

    if (isOpen) {
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
    } else {
      html.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
    }

    return () => {
      html.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [closeMenu])

  const headerClassName = [
    'fixed inset-x-0 top-0 z-50',
    'px-4 py-3 sm:px-6 lg:px-8',
    'transition-all duration-300',
    isScrolled
      ? 'border-b border-white/10 bg-black/70 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent',
  ].join(' ')

  return (
    <>
      <a
        href="#main-content"
        className="sr-only absolute left-3 top-3 z-[100] rounded-md bg-black px-3 py-2 text-sm font-medium text-white focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Skip to content
      </a>

      <motion.header
        ref={headerRef}
        role="banner"
        className={headerClassName}
        initial={false}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
          <div className="flex w-11 items-center md:hidden">
            <MenuButton isOpen={isOpen} toggle={toggleMenu} />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            >
              <Link
                href="/"
                aria-label="Go to homepage"
                className="inline-block whitespace-nowrap font-[var(--font-display)] text-[1.7rem] font-bold tracking-[-0.04em] text-cyan-400 transition-colors duration-200 hover:text-cyan-300 sm:text-[2rem]"
              >
                Jeremy Hayes
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <DesktopNav navItems={navItems} />
            <ThemeToggle />
          </div>

          <div className="flex w-11 items-center justify-end md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <MobileNav
        navItems={navItems}
        isOpen={isOpen}
        closeMenu={closeMenu}
        headerHeight={headerRef.current?.offsetHeight ?? 80}
      />
    </>
  )
}

export default Header
