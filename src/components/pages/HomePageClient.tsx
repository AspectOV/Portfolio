'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import ProjectFeature from '@/components/ProjectFeature'
import Skills from '@/components/Skills'
import {
  featuredProjects,
  homeFocusItems,
  selectedImpact,
} from '@/content/siteContent'

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
})

const bleedClass =
  'relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-8'

const frameClass = 'mx-auto max-w-[1380px]'

const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <motion.section className={`${bleedClass} pt-0`} {...sectionTransition(0)}>
        <div
          className={`${frameClass} grid gap-6 border-b border-white/10 pb-8 md:gap-8 md:pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10`}
        >
          <div className="max-w-3xl py-2 md:py-4">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">
              Jeremy Hayes / portfolio
            </p>

            <h1 className="mt-4 max-w-2xl text-balance text-[2.2rem] font-bold leading-[1.02] text-[color:var(--text)] md:text-[2.9rem] xl:text-[3.35rem]">
              I build websites, gameplay systems, and software projects.
            </h1>

            <p className="mt-4 max-w-xl text-[0.98rem] leading-8 text-[color:var(--text-muted)] md:text-[1.02rem]">
              I&apos;m still in high school, and this is where I keep the projects
              I&apos;ve made across web dev, Roblox systems, and security-focused software.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
              >
                About Me
              </Link>

              <Link
                href="/contact"
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
              >
                Contact
              </Link>
            </div>

            <div className="mt-7 grid gap-4 border-t border-white/10 pt-4 md:grid-cols-3">
              {homeFocusItems.map((item) => (
                <div key={item.label}>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative py-2 md:py-4">
            <div className="relative ml-auto max-w-[760px]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-black/30">
                <div className="relative aspect-[32/21] overflow-hidden">
                  <Image
                    src="/images/tuffJeremy.png"
                    alt="Jeremy Hayes portrait"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-sm font-medium text-white/70">Elmhurst, Illinois</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      York Community High School
                    </p>
                  </div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">
                    class of 2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} py-10 md:py-14`} {...sectionTransition(0.08)}>
        <div className={frameClass}>
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                selected work
              </p>
              <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold md:text-[2.25rem]">
                A few projects.
              </h2>
            </div>

            <p className="max-w-2xl text-[0.96rem] leading-8 text-white/68 md:text-[1rem]">
              These are the ones I&apos;d point someone to first.
            </p>
          </div>

          <div className="mt-8 space-y-2">
            {featuredProjects.map((project, index) => (
              <ProjectFeature
                key={project.id}
                project={project}
                index={index}
                priority={index === 0}
                variant="spotlight"
              />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className={`${bleedClass} border-y border-white/10 bg-black/15 py-10 md:py-14`}
        {...sectionTransition(0.12)}
      >
        <div className={`${frameClass} grid gap-10 lg:grid-cols-[0.72fr_1.28fr]`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              quick scan
            </p>
            <h2 className="mt-4 max-w-md text-[1.75rem] font-bold md:text-[2.25rem]">
              What I spend time on.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {selectedImpact.map((item, index) => (
              <div key={item.title} className="border-t border-white/10 pt-5">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 max-w-xl text-white/68">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} py-10 md:py-14`} {...sectionTransition(0.16)}>
        <div className={`${frameClass} grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              tools
            </p>
            <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold md:text-[2.25rem]">
              Tools I keep using.
            </h2>
            <div className="mt-8">
              <Skills />
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 lg:pt-0">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              resume
            </p>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-8 text-white/70 md:text-[1.04rem]">
              If you just want the compact version of my background and experience,
              my resume is here too.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/JeremyHayesResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
              >
                Open Resume
              </a>

              <a
                href="/JeremyHayesResume.pdf"
                download
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
              >
                Download PDF
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
              <a href="/JeremyHayesResume.pdf" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/JeremyHayesResume.avif"
                  alt="Preview of Jeremy Hayes resume"
                  width={1200}
                  height={1600}
                  className="w-full bg-white"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage
