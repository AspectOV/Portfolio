'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
})

const sectionClassName =
  'rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-10'

const itemClassName =
  "relative border-b border-white/10 py-4 pl-8 text-white/72 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-14 md:space-y-20">
      <motion.section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm md:p-8"
        {...sectionTransition(0)}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          About • Jeremy M. Hayes
        </p>

        <h1 className="max-w-4xl text-balance text-3xl font-bold leading-tight md:text-5xl">
          Developer focused on secure systems, modern web apps, and practical software.
        </h1>

        <p className="mt-5 max-w-3xl text-base text-white/80 md:text-lg">
          I’m a student developer interested in computer science, cybersecurity,
          software engineering, and systems design. I enjoy building projects that
          are reliable, polished, and useful in the real world.
        </p>
      </motion.section>

      <motion.section className={sectionClassName} {...sectionTransition(0.08)}>
        <h2>Profile</h2>

        <div className="mt-4 space-y-4">
          <p className="max-w-3xl leading-8 text-white/70">
            My work spans web development, backend systems, desktop software,
            Linux hosting, APIs, and game development. I care about writing clean,
            maintainable code and building systems that balance performance,
            usability, and security.
          </p>

          <p className="max-w-3xl leading-8 text-white/70">
            I’m especially interested in software engineering, cybersecurity, and
            infrastructure. I like solving technical problems that connect code,
            architecture, and real user needs.
          </p>
        </div>
      </motion.section>

      <motion.section className={sectionClassName} {...sectionTransition(0.12)}>
        <h2>Education</h2>

        <div className="mt-5">
          <h3 className="text-xl font-semibold text-white">
            York Community High School
          </h3>
          <p className="mt-1 text-white/60">Elmhurst, Illinois</p>
          <p className="mt-1 text-white/70">
            Anticipated Graduation: June 2027
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Relevant Coursework</h3>
          <ul className="mt-4 list-none p-0">
            <li className={itemClassName}>AP Computer Science Principles</li>
            <li className={itemClassName}>AP Computer Science A</li>
            <li className={itemClassName}>
              Advanced Technological Services Internship
            </li>
            <li className={itemClassName}>Honors Physics</li>
          </ul>
        </div>
      </motion.section>

      <motion.section className={sectionClassName} {...sectionTransition(0.16)}>
        <h2>Experience</h2>

        <div className="mt-5">
          <h3 className="text-xl font-semibold text-white">Freelance Developer</h3>
          <p className="mt-1 text-white/60">Elmhurst, Illinois</p>
          <p className="mt-1 text-white/70">
            Scripter & Systems Engineer · Spring 2023 — Present
          </p>
        </div>

        <ul className="mt-5 list-none p-0">
          <li className={itemClassName}>
            Built gameplay systems, reusable modules, and custom Luau solutions for
            Roblox developers across a range of projects and genres.
          </li>
          <li className={itemClassName}>
            Helped standardize mechanics and reduce implementation time by creating
            reusable systems and technical resources for other developers.
          </li>
          <li className={itemClassName}>
            Contributed systems integration work for <strong>The Survivors</strong>,
            resolving bugs, connecting independently built mechanics, and improving
            overall game stability.
          </li>
        </ul>
      </motion.section>

      <motion.section className={sectionClassName} {...sectionTransition(0.2)}>
        <h2>Selected Work</h2>

        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          My projects include secure desktop applications, self-hosted tools,
          Discord utilities, game systems, and performance-focused web projects.
          I like building software that is practical, secure, and well structured.
        </p>

        <ul className="mt-5 list-none p-0">
          <li className={itemClassName}>
            Built a C# file encryption utility using AES-256-GCM and modern secure
            design principles.
          </li>
          <li className={itemClassName}>
            Developed self-hosted tools and APIs connecting live systems between
            Discord and Roblox experiences.
          </li>
          <li className={itemClassName}>
            Created multi-purpose Discord tooling with moderation, logging, and
            automation features.
          </li>
          <li className={itemClassName}>
            Designed and developed a modern portfolio site with Next.js, React, and
            Tailwind CSS.
          </li>
        </ul>

        <Link
          href="/projects"
          className="interactive-lift mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-200 transition-all duration-200 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
        >
          View full project archive
          <span aria-hidden="true">→</span>
        </Link>
      </motion.section>

      <motion.section className={sectionClassName} {...sectionTransition(0.24)}>
        <h2>Skills & Technologies</h2>
        <div className="mt-6">
          <Skills />
        </div>
      </motion.section>

      <motion.section className={sectionClassName} {...sectionTransition(0.28)}>
        <h2>Certifications & Honors</h2>

        <ul className="mt-5 list-none p-0">
          <li className={itemClassName}>CompTIA Tech+ — 2025</li>
          <li className={itemClassName}>CompTIA A+ — In Progress</li>
          <li className={itemClassName}>
            Microsoft Office Specialist Certification — In Progress
          </li>
          <li className={itemClassName}>
            SkillsUSA Illinois State — 6th Place, Technical Information Services
            (2025)
          </li>
          <li className={itemClassName}>
            National Technical Honor Society — Member
          </li>
        </ul>
      </motion.section>
    </div>
  )
}

export default AboutPage
