'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

interface SocialLink {
  name: string
  url: string
  icon: React.FC<{ size: number }>
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks: SocialLink[] = [
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
      className="mt-24 border-t border-white/10 bg-black/25 px-8 py-10 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/70">© {currentYear} Jeremy M. Hayes. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((link: SocialLink) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-white/80 hover:border-cyan-300/40 hover:text-cyan-200"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                aria-label={link.name}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
          Built with Next.js, TypeScript, and Tailwind CSS ·{' '}
          <Link href="/privacy-policy" className="text-white/70 hover:text-cyan-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
