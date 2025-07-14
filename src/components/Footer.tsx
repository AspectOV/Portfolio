'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aspectov',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jeremymhayes/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:jeremy@jeremymhayes.com',
      icon: Mail,
    },
  ]

  return (
    <motion.footer 
      className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="text-gray-300 text-sm">
            © {currentYear} Jeremy M. Hayes. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer 