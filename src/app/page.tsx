'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const featuredProjects = [
    {
      id: 'roblox-game',
      title: 'Roblox Game Development',
      description: 'Crafting high quality Roblox games of all genres using Roblox Studio.',
      image: '/images/roblox-game.png',
      category: 'game-dev',
      tags: ['Lua', 'Roblox', 'Game Design'],
      link: '/projects#roblox-games'
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      description: 'Developing scalable and maintainable software solutions.',
      image: '/images/unity-game.jpg',
      category: 'software-dev',
      tags: ['C#', 'Windows', 'Software'],
      link: '/portfolio#software-dev'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Building responsive and interactive websites like this portfolio.',
      image: '/images/web-dev-project.png',
      category: 'web-dev',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '/projects#web-dev'
    }
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const buttonClasses = 'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-all duration-300'

  return (
    <div className="space-y-16 md:space-y-24">
      <motion.section
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/15 backdrop-blur-sm md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/80">Portfolio • Jeremy Hayes</p>
        <h1 className="text-balance text-2xl font-bold leading-snug md:text-4xl">
          Building polished digital experiences for web and game platforms.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
          I design and develop production-ready projects spanning modern websites, interactive systems, and game experiences.
          Explore selected work, technical strengths, and the process behind each build.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className={`${buttonClasses} bg-cyan-400 text-black hover:-translate-y-0.5 hover:bg-cyan-300`}>
            <i className="fas fa-briefcase"></i>
            View Projects
          </Link>
          <Link href="/contact" className={`${buttonClasses} border border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10`}>
            <i className="fas fa-envelope"></i>
            Contact Me
          </Link>
        </div>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/20 bg-cyan-500/[0.04] p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-white/70">A curated snapshot of work focused on craftsmanship, usability, and performance.</p>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/20 bg-cyan-500/[0.04] p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Core Skills</h2>
        <p className="mt-3 max-w-2xl text-white/70">Tools and disciplines I use to ship robust, user-centered products.</p>
        <Skills />
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/20 bg-cyan-500/[0.04] p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2>Resume</h2>
          <a
            href="/JeremyHayesResume.pdf"
            download
            className={`${buttonClasses} border border-cyan-300/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-300/20`}
          >
            <i className="fas fa-download"></i>
            Download PDF
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-2 shadow-xl">
          <Image
            src="/images/JeremyHayesResume.pdf"
            alt="Jeremy M. Hayes Resume"
            width={1000}
            height={600}
            className="h-auto w-full rounded-xl"
            loading="lazy"
          />
        </div>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="mb-4 text-center after:left-1/2 after:-translate-x-1/2">Stay Updated</h2>
        <p className="mx-auto max-w-xl text-center text-white/75">
          Subscribe for occasional updates on new projects and practical lessons learned while building them.
        </p>
        <form className="mx-auto mt-6 max-w-xl" onSubmit={handleNewsletterSubmit}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="min-h-12 flex-1 rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/60 focus:outline-none"
            />
            <button
              type="submit"
              className={`${buttonClasses} min-h-12 bg-cyan-400 text-black hover:bg-cyan-300 ${isSubmitting ? 'animate-spinner' : ''}`}
            >
              Subscribe
            </button>
          </div>
          {message && (
            <div className={`mt-4 text-center font-medium ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
        </form>
      </motion.section>
    </div>
  )
}

export default HomePage
