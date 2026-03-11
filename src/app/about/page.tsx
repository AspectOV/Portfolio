'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  const sectionClass =
    'rounded-2xl border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur-sm'
  const itemClass =
    "py-4 border-b border-border/50 relative pl-10 before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold last:border-b-0"

  return (
    <>
      <motion.section
        className="mb-8 rounded-2xl border border-border/60 bg-background/60 p-8 shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Jeremy M. Hayes
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Full-Stack Developer focused on secure systems, APIs, and real-world software.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
          I’m a high school developer pursuing computer science and cybersecurity,
          with experience building secure applications, backend systems, and
          cloud-hosted tools used in Roblox and Discord communities.
        </p>
      </motion.section>

      <motion.section
        className={sectionClass}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2>Profile</h2>
        <p className="mt-4 text-muted-foreground leading-8">
          I build software with a strong focus on security, reliability, and
          practical use. My work spans full-stack development, backend APIs,
          encrypted desktop applications, Linux hosting, and developer tools for
          online communities.
        </p>
        <p className="mt-4 text-muted-foreground leading-8">
          I enjoy solving technical problems that connect software and
          infrastructure, and I’m especially interested in software engineering,
          cybersecurity, and systems architecture.
        </p>
      </motion.section>

      <motion.section
        className={`${sectionClass} mt-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Education</h2>
        <div className="mt-4">
          <h3>York Community High School — Elmhurst, IL</h3>
          <p className="mt-1 text-muted-foreground">
            Anticipated Graduation: June 2027
          </p>
        </div>

        <h3 className="mt-6">Relevant Coursework</h3>
        <ul className="list-none p-0 mt-2">
          <li className={itemClass}>AP Computer Science Principles</li>
          <li className={itemClass}>AP Computer Science A</li>
          <li className={itemClass}>
            Advanced Technological Services Internship
          </li>
          <li className={itemClass}>Honors Physics</li>
        </ul>
      </motion.section>

      <motion.section
        className={`${sectionClass} mt-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Experience</h2>
        <div className="mt-4">
          <h3>Freelance Developer — Elmhurst, IL</h3>
          <p className="mt-1 text-muted-foreground">
            Scripter & Systems Engineer · Spring 2023 — Present
          </p>
        </div>

        <ul className="list-none p-0 mt-4">
          <li className={itemClass}>
            Developed Luau scripts, systems, and gameplay mechanics for Roblox
            developers, helping standardize features and reduce implementation
            time across projects.
          </li>
          <li className={itemClass}>
            Created and shared educational resources and reusable models within
            developer communities.
          </li>
          <li className={itemClass}>
            Led systems integration for <strong>The Survivors</strong>,
            resolving bugs, unifying independently developed mechanics, and
            stabilizing gameplay systems for a project with tens of thousands of
            visits.
          </li>
        </ul>
      </motion.section>

      <motion.section
        className={`${sectionClass} mt-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Selected Work</h2>
        <p className="mt-4 text-muted-foreground leading-8">
          My projects include secure desktop applications, self-hosted APIs,
          Discord tooling, and performance-focused infrastructure. I like
          building systems that are practical, secure, and designed for real
          users.
        </p>

        <ul className="list-none p-0 mt-4">
          <li className={itemClass}>
            Built a file encryption utility in C# using AES-256-GCM and
            Argon2id.
          </li>
          <li className={itemClass}>
            Developed a self-hosted API gateway connecting Discord systems with
            Roblox game instances in real time.
          </li>
          <li className={itemClass}>
            Created a multi-purpose Discord bot with moderation, logging, and
            custom utilities.
          </li>
          <li className={itemClass}>
            Designed a high-performance portfolio site with Next.js, React, and
            Tailwind CSS.
          </li>
        </ul>

        <a
          href="/projects"
          className="inline-flex mt-6 font-semibold text-accent hover:underline"
        >
          View full project archive →
        </a>
      </motion.section>

      <motion.section
        className={`${sectionClass} mt-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2>Skills & Technologies</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/50 p-4">
            <h3 className="text-base font-semibold">Languages</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              C#, TypeScript, Luau, Python, JavaScript, HTML/CSS
            </p>
          </div>

          <div className="rounded-xl border border-border/50 p-4">
            <h3 className="text-base font-semibold">Frameworks</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              React, Next.js, Tailwind CSS, Unity, WinUI 3
            </p>
          </div>

          <div className="rounded-xl border border-border/50 p-4">
            <h3 className="text-base font-semibold">Infrastructure</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Linux server administration, Cloudflare Tunnel, JWT
              authentication, rate limiting, self-hosting, reverse proxy setup
            </p>
          </div>

          <div className="rounded-xl border border-border/50 p-4">
            <h3 className="text-base font-semibold">Tools & Hardware</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Git, Blender, CI/CD workflows, desktop and laptop repair,
              diagnostics, and system optimization
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={`${sectionClass} mt-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Certifications & Honors</h2>
        <ul className="list-none p-0 mt-4">
          <li className={itemClass}>CompTIA Tech+ — 2025</li>
          <li className={itemClass}>CompTIA A+ — In Progress</li>
          <li className={itemClass}>
            Microsoft Office Specialist Certification — In Progress
          </li>
          <li className={itemClass}>
            SkillsUSA Illinois State — 6th Place, Technical Information Services
            (2025)
          </li>
          <li className={itemClass}>
            National Technical Honor Society — Member
          </li>
        </ul>
      </motion.section>
    </>
  )
}

export default AboutPage