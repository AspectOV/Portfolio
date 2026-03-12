'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface MenuButtonProps {
  isOpen: boolean
  toggle: () => void
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggle }) => {
  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className={[
        'relative inline-flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-300 md:hidden',
        isOpen
          ? 'border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
          : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10',
      ].join(' ')}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="flex items-center justify-center"
            >
              <X size={18} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="flex items-center justify-center"
            >
              <Menu size={18} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
