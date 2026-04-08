'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
}

interface MobileNavProps {
  navItems: NavItem[]
  isOpen: boolean
  closeMenu: () => void
  headerHeight?: number
}

import type { Variants } from 'framer-motion'

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: 'easeOut' as const,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: 'easeIn' as const,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
}

export const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  isOpen,
  closeMenu,
  headerHeight = 80,
}) => {
  const pathname = usePathname()

  useEffect(() => {
    closeMenu()
    // intentionally runs on pathname change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 z-50 rounded-b-2xl border-b border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl md:hidden"
            style={{ top: headerHeight }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4">
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(`${item.href}/`)

                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      className={[
                        'interactive-lift flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80',
                        isActive
                          ? 'bg-white/10 text-white ring-1 ring-white/10'
                          : 'text-white/70 hover:bg-white/5 hover:text-white',
                      ].join(' ')}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
