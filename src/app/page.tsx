'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBriefcase, FaEnvelope } from 'react-icons/fa'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'
import Image from 'next/image'

interface FeaturedProject {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link: string
  priority?: boolean
}

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
})

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const featuredProjects: FeaturedProject[] = useMemo(
    () => [
      {
        id: 'roblox-game',
        title: 'Roblox Game Development',
        description:
          'Designing polished Roblox experiences with strong gameplay systems, visuals, and player-focused design.',
        image: '/images/roblox-game.jpg',
        category: 'game-dev',
        tags: ['Luau', 'Roblox', 'Game Design'],
        link: '/projects#roblox-games',
      },
      {
        id: 'software-dev',
        title: 'Software Development',
        description:
          'Building maintainable software with clean architecture, strong usability, and practical problem solving.',
        image: '/images/unity-game.jpg',
        category: 'software-dev',
        tags: ['C#', 'Windows', 'Software'],
        link: '/portfolio#software-dev',
      },
      {
        id: 'web-dev',
        title: 'Web Development',
        description:
          'Creating responsive websites and interfaces with a focus on performance, clarity, and modern design.',
        image: '/images/web-dev-project.png',
        category: 'web-dev',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '/projects#web-dev',
      },
    ],
    []
  )

  const handleNewsletterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!email.trim()) return

    setIsSubmitting(true)
    setMessage('')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage('Thanks for subscribing.')
      setEmail('')
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const primaryButtonClassName =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300'

  const secondaryButtonClassName =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10'

  const panelClassName =
    'rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-10'

  return (
    <div className="space-y-16 md:space-y-24">
      <motion.section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm md:p-8"
        {...sectionTransition(0)}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Portfolio • Jeremy Hayes
        </p>

        <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
          Building polished digital experiences for the web and game platforms.
        </h1>

        <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
          I build modern websites, interactive systems, and game projects with a focus
          on performance, usability, and clean execution.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className={primaryButtonClassName}>
            <FaBriefcase aria-hidden="true" className="h-[16px] w-[16px]" />
            <span>View Projects</span>
          </Link>

          <Link href="/contact" className={secondaryButtonClassName}>
            <FaEnvelope aria-hidden="true" className="h-[16px] w-[16px]" />
            <span>Contact Me</span>
          </Link>
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.08)}>
        <h2>Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          A curated selection of work centered on craftsmanship, usability, and performance.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.12)}>
        <h2>Core Skills</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          The tools and disciplines I use to build reliable, user-focused projects.
        </p>

        <div className="mt-8">
          <Skills />
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.16)}>
       <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2>Resume</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              View my current resume online, open it full screen, or download a PDF copy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/JeremyHayesResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              <span>Open Full Screen</span>
            </a>

            <a
              href="/JeremyHayesResume.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-6 py-3.5 font-semibold text-cyan-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300/20"
            >
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl">
          <a
            href="/JeremyHayesResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/JeremyHayesResume.avif"
              alt="Preview of Jeremy Hayes resume"
              width={1200}
              height={1600}
              className="w-full bg-white"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </a>
        </div>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent p-8 md:p-12"
        {...sectionTransition(0.2)}
      >
        <h2 className="mb-4 text-center after:left-1/2 after:-translate-x-1/2">
          Stay Updated
        </h2>

        <p className="mx-auto max-w-xl text-center text-white/75">
          Subscribe for occasional updates on new projects and lessons learned while building them.
        </p>

        <form className="mx-auto mt-6 max-w-xl" onSubmit={handleNewsletterSubmit}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="min-h-12 flex-1 rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/60 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3.5 font-semibold transition-all duration-200 ${
                isSubmitting
                  ? 'cursor-not-allowed bg-cyan-300 text-black/80 opacity-80'
                  : 'bg-cyan-400 text-black hover:bg-cyan-300'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.includes('Thanks') ? 'text-green-400' : 'text-red-400'
              }`}
              aria-live="polite"
            >
              {message}
            </p>
          )}
        </form>
      </motion.section>
    </div>
  )
}

export default HomePage