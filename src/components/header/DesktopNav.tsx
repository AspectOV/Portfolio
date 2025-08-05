'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string;
  label: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }: DesktopNavProps) => {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center justify-center gap-1" aria-label="Main Navigation">
      {navItems.map((item: NavItem) => (
        <Link key={item.href} href={item.href} scroll={false}>
          <motion.div
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
              pathname === item.href
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.label}
            {pathname === item.href && (
              <motion.div
                className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                layoutId="activeDesktopTab"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.div>
        </Link>
      ))}
    </nav>
  )
} 
