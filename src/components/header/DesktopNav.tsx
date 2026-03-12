'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
}

interface DesktopNavProps {
  navItems: NavItem[]
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {
  const pathname = usePathname()

  return (
    <nav
      className="hidden items-center gap-2 md:flex"
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className="group"
          >
            <motion.span
              whileHover={{ y: -1.5 }}
              whileTap={{ scale: 0.98 }}
              className={[
                'relative inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'text-white'
                  : 'text-white/65 hover:text-white',
              ].join(' ')}
            >
              <span>{item.label}</span>

              {isActive && (
                <motion.span
                  layoutId="activeDesktopTab"
                  className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                />
              )}
            </motion.span>
          </Link>
        )
      })}
    </nav>
  )
}
