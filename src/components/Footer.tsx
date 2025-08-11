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
    <>
      <motion.footer 
        className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-40"
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
              {socialLinks.map((link: SocialLink) => (
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
              Built with Next.js, TypeScript, and Tailwind CSS | <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </motion.footer>
      <style jsx>{`
        footer {
          position: relative;
          z-index: 1;
          background: linear-gradient(135deg, #111, #222);
          color: white;
          text-align: center;
          padding: 2.5rem 1.5rem;
          margin-top: 2.5rem;
        }
        
        footer p {
          margin: 0;
          color: #e0e0e0;
        }
        
        footer a {
          color: #00b4d8;
          text-decoration: none;
        }
        
        footer a:hover {
          color: #00d4f8;
        }
      `}</style>
    </>
  )
}

export default Footer
