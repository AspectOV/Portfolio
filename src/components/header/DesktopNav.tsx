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
    <motion.nav
      className="hidden md:flex items-center justify-center gap-1 py-2 mt-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.6 }}
      aria-label="Main Navigation"
    >
      {navItems.map((item: NavItem, index: number) => (
        <Link key={item.href} href={item.href} scroll={false}>
          <motion.div
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
              pathname === item.href
                ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-500/10'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            whileHover={{
              y: -2,
              boxShadow:
                pathname === item.href
                  ? '0 10px 25px rgba(59, 130, 246, 0.2)'
                  : '0 5px 15px rgba(255, 255, 255, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7 + index * 0.1, duration: 0.4 }}
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
    </motion.nav>
  )
} 