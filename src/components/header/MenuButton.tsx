'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface MenuButtonProps {
  isOpen: boolean
  toggle: () => void
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggle }: MenuButtonProps) => (
  <motion.button
    onClick={toggle}
    className="relative group md:hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <div
      className={`relative transition-all duration-300 rounded-xl p-3 ${
        isOpen
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/40'
          : 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/40'
      } border backdrop-blur-sm`}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={18} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={18} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </motion.button>
) 