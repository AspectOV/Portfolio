'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBriefcase, FaEnvelope } from 'react-icons/fa'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'
import Image from 'next/image'
import { featuredProjectIds, projects } from '@/content/siteContent'
import AudienceModeToggle from '@/components/AudienceModeToggle'
import { useAudiencePreference } from '@/components/AudiencePreferenceProvider'

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
})

const testimonials = [
  {
    quote:
      'Jeremy helped us turn an early concept into a stable experience with better structure and faster iteration cycles.',
    name: 'Indie Studio Collaborator',
    role: 'Gameplay Lead',
  },
  {
    quote:
      'Communication was clear, technical decisions were well explained, and deliverables arrived on time.',
    name: 'Freelance Client',
    role: 'Product Founder',
  },
]

const timelineHighlights = [
  '2023 — Started freelance systems and gameplay development work.',
  '2024 — Expanded into modern web projects with React and Next.js.',
  '2025 — Shipped secure desktop software and reusable full-stack tooling.',
  '2026 — Optimizing portfolio conversion with stronger case-study storytelling.',
]

const HomePage: React.FC = () => {
  const { audience } = useAudiencePreference()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const featuredProjects = useMemo(
    () => projects.filter((project) => featuredProjectIds.includes(project.id)),
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
    'interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90'

  const secondaryButtonClassName =
    'interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80'

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
          I design and build fast, accessible web apps that turn visitors into customers.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          From landing pages to production dashboards, I focus on measurable outcomes:
          performance, conversion, and maintainable delivery.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className={primaryButtonClassName}>
            <FaBriefcase aria-hidden="true" className="h-[16px] w-[16px]" />
            <span>{audience === 'recruiter' ? 'View Hiring-Focused Projects' : 'View Projects'}</span>
          </Link>

          <Link href="/contact" className={secondaryButtonClassName}>
            <FaEnvelope aria-hidden="true" className="h-[16px] w-[16px]" />
            <span>{audience === 'recruiter' ? 'Start a Project Call' : 'Send a Message'}</span>
          </Link>
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.05)}>
        <h2>Choose Your Path</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Whether you&apos;re hiring or need a developer partner, start with the path that matches your goal.
        </p>

        <div className="mt-5">
          <AudienceModeToggle />
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">I&apos;m hiring</p>
            <h3 className="mt-3 text-xl font-semibold text-white">See role-fit proof quickly</h3>
            <p className="mt-3 text-white/75">
              Review highlighted projects, relevant skills, and my current resume in one pass.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/projects" className={secondaryButtonClassName}>
                View Selected Work
              </Link>
              <a href="/JeremyHayesResume.pdf" className={secondaryButtonClassName}>
                Open Resume
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-500/[0.08] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">I need a developer</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Plan and ship with confidence</h3>
            <p className="mt-3 text-white/75">
              Share scope, timeline, and goals to get a structured response and next steps.
            </p>
            <div className="mt-5">
              <Link href="/contact" className={primaryButtonClassName}>
                {audience === 'recruiter' ? 'Start a Project Conversation' : 'Open Contact Form'}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.08)}>
        <h2>Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          A curated selection of work centered on craftsmanship, usability, and performance.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} priority={index === 0} />
          ))}
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.12)}>
        <h2>Core Skills</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          The tools and disciplines I use to build reliable, user-focused projects.
        </p>

        <div className="mt-8">
          <Skills />
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.14)}>
        <h2>Social Proof</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Feedback from collaborators who have worked with me on systems, shipping, and delivery.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <p className="text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-cyan-200">
                {testimonial.name} · {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.16)}>
       <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2>Resume</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              View my current resume online, open it full screen, or download a PDF copy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/JeremyHayesResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              <span>Open Full Screen</span>
            </a>

            <a
              href="/JeremyHayesResume.pdf"
              download
              className="interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-6 py-3.5 font-semibold text-cyan-200 transition-all duration-200 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
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
              loading="lazy"
            />
          </a>
        </div>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.18)}>
        <h2>Featured In & Open Source</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Highlights that demonstrate public proof of work and community-facing output.
        </p>

        <ul className="mt-5 space-y-3 text-white/80">
          <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            Published portfolio and product experiments with iterative UX improvements.
          </li>
          <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            Shared reusable development patterns through public repositories and project code organization.
          </li>
          <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            Documented practical build decisions to make implementation tradeoffs transparent.
          </li>
        </ul>
      </motion.section>

      <motion.section className={panelClassName} {...sectionTransition(0.19)}>
        <h2>Timeline Highlights</h2>
        <div className="mt-5 space-y-3">
          {timelineHighlights.map((highlight) => (
            <p
              key={highlight}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/80"
            >
              {highlight}
            </p>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent p-8 md:p-12"
        {...sectionTransition(0.2)}
      >
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-semibold text-white">Currently building</h3>
            <p className="mt-2 text-white/75">Faster case-study pages with clearer impact snapshots.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-semibold text-white">Exploring</h3>
            <p className="mt-2 text-white/75">Performance tooling and reusable UI patterns for content-heavy pages.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-semibold text-white">Available for</h3>
            <p className="mt-2 text-white/75">Frontend, full-stack web projects, and targeted performance improvements.</p>
          </div>
        </div>

        <h2 className="mb-4 text-center after:left-1/2 after:-translate-x-1/2">
          Stay Updated
        </h2>

        <p className="mx-auto max-w-xl text-center text-white/85">
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
              className="min-h-12 flex-1 rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3.5 font-semibold transition-all duration-200 ${
                isSubmitting
                  ? 'cursor-not-allowed bg-cyan-300 text-black/80 opacity-80'
                  : 'interactive-lift bg-cyan-400 text-black hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80'
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
