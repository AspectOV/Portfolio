'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
}

interface MobileNavProps {
  navItems: NavItem[]
  isOpen: boolean
  closeMenu: () => void
  headerHeight: number | undefined
}

export const MobileNav: React.FC<MobileNavProps> = ({ 
  navItems, 
  isOpen, 
  closeMenu, 
  headerHeight 
}: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-x-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl rounded-b-lg"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ top: headerHeight || 80 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col py-4">
              {navItems.map((item: NavItem, index: number) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link href={item.href} scroll={false} onClick={closeMenu}>
                    <motion.div
                      className={`mx-4 mb-2 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? 'text-white bg-white/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
