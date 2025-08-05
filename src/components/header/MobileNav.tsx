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
            className="md:hidden fixed inset-x-0 z-50 bg-gradient-to-b from-black/95 to-black/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
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
                      className={`mx-4 mb-2 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? 'text-text-primary bg-gradient-to-r from-accent/20 to-purple-500/20 border border-accent/30 shadow-lg'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'
                      }`}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        {pathname === item.href && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-purple-500"
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
  )
} 
