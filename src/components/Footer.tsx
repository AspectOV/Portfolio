'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
  external?: boolean
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/aspectov',
    icon: Github,
    external: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jeremymhayes/',
    icon: Linkedin,
    external: true,
  },
  {
    name: 'Email',
    url: 'mailto:Jeremy@jeremymhayes.com',
    icon: Mail,
  },
]

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="mt-24 border-t border-white/10 bg-black/25 px-4 py-10 backdrop-blur-md sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-white/80">
                Jeremy M. Hayes
              </p>
              <p className="mt-1 text-sm text-white/55">
                © {currentYear} All rights reserved.
              </p>
            </div>

            <nav
              className="flex items-center gap-3"
              aria-label="Footer social links"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    className="interactive-lift inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 transition-all duration-200 hover:border-cyan-300/30 hover:bg-cyan-400/[0.08] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    {...(link.external
                      ? {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </motion.a>
                )
              })}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
            <span>Built with Next.js, TypeScript, and Tailwind CSS</span>
            <span className="mx-2 text-white/25">•</span>
            <Link
              href="/privacy-policy"
              className="rounded-md text-white/65 transition-colors duration-200 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
