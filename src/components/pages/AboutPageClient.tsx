'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Skills from '@/components/Skills'
import {
  aboutNarrative,
  howIWork,
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

const itemClassName =
  "relative border-b border-white/10 py-4 pl-8 text-white/72 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      <motion.section className={`${bleedClass} pt-0`} {...sectionTransition(0)}>
        <div
          className={`${frameClass} grid gap-6 border-b border-white/10 pb-8 md:gap-8 md:pb-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-10`}
        >
          <div className="max-w-3xl py-2">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              about
            </p>

            <h1 className="mt-4 max-w-3xl text-balance text-[2.2rem] font-bold leading-[1.02] md:text-[3rem] xl:text-[3.4rem]">
              I&apos;m a student developer from Elmhurst who likes building useful
              things and figuring out how they work.
            </h1>

            <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-white/72 md:text-[1.02rem]">
              A lot of my projects sit somewhere between web development, gameplay
              systems, and security-focused software. I care a lot about how things
              are put together, not just how they look in screenshots.
            </p>

            <div className="mt-7 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-3">
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                  based in
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  Elmhurst, Illinois
                </p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                  school
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  York Community High School
                </p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                  graduating
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  June 2027
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-1 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="relative overflow-hidden rounded-[2rem] bg-black/30">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/IMG_3766.png"
                  alt="Jeremy Hayes portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-black/30">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/IMG_3774.jpeg"
                  alt="Jeremy Hayes in class"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover rotate-90 scale-[1.42]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} py-10 md:py-14`} {...sectionTransition(0.08)}>
        <div className={`${frameClass} grid gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              story
            </p>
            <h2 className="mt-4 max-w-md text-[1.75rem] font-bold md:text-[2.2rem]">
              How I got into this.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="max-w-3xl leading-8 text-white/70">
              {aboutNarrative.intro}
            </p>
            <p className="max-w-3xl leading-8 text-white/70">
              {aboutNarrative.bridge}
            </p>
            <p className="max-w-3xl leading-8 text-white/70">
              {aboutNarrative.closing}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={`${bleedClass} border-y border-white/10 bg-black/15 py-10 md:py-14`}
        {...sectionTransition(0.12)}
      >
        <div className={`${frameClass} grid gap-10 lg:grid-cols-[1fr_1fr]`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              experience
            </p>
            <h2 className="mt-4 text-[1.75rem] font-bold md:text-[2.2rem]">
              Work I&apos;ve done so far.
            </h2>

            <div className="mt-8 border-t border-white/10 pt-5">
              <h3 className="text-xl font-semibold text-white">Freelance Developer</h3>
              <p className="mt-1 text-white/60">Elmhurst, Illinois</p>
              <p className="mt-1 text-white/70">
                Scripter & Systems Engineer · Spring 2023 — Present
              </p>

              <ul className="mt-5 list-none p-0">
                <li className={itemClassName}>
                  Built gameplay systems, reusable modules, and custom Luau
                  solutions for Roblox developers across multiple genres.
                </li>
                <li className={itemClassName}>
                  Helped standardize mechanics and shorten implementation time by
                  turning one-off logic into reusable systems.
                </li>
                <li className={itemClassName}>
                  Contributed integration work for <strong>The Survivors</strong>,
                  improving stability between independently built mechanics.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              coursework
            </p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <h3 className="text-xl font-semibold text-white">
                York Community High School
              </h3>
              <p className="mt-1 text-white/60">Elmhurst, Illinois</p>
              <p className="mt-1 text-white/70">
                Anticipated Graduation: June 2027
              </p>

              <ul className="mt-5 list-none p-0">
                <li className={itemClassName}>AP Computer Science Principles</li>
                <li className={itemClassName}>AP Computer Science A</li>
                <li className={itemClassName}>
                  Advanced Technological Services Internship
                </li>
                <li className={itemClassName}>Honors Physics</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} py-10 md:py-14`} {...sectionTransition(0.16)}>
        <div className={`${frameClass} grid gap-10 lg:grid-cols-[0.72fr_1.28fr]`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              focus
            </p>
            <h2 className="mt-4 max-w-md text-[1.75rem] font-bold md:text-[2.2rem]">
              The kinds of projects I keep coming back to.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {selectedImpact.map((item, index) => (
              <div key={item.title} className="border-t border-white/10 pt-5">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-white/68">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} pb-10 md:pb-14`} {...sectionTransition(0.2)}>
        <div className={`${frameClass} grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1fr_0.9fr]`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              skills
            </p>
            <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold md:text-[2.2rem]">
              Tools and habits I bring into projects.
            </h2>

            <div className="mt-6">
              <Skills />
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-xl font-semibold text-white">How I like to work</h3>
              <ul className="mt-5 list-none p-0">
                {howIWork.map((item) => (
                  <li key={item} className={itemClassName}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              certifications
            </p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <ul className="list-none p-0">
                <li className={itemClassName}>CompTIA Tech+ — 2025</li>
                <li className={itemClassName}>CompTIA A+ — In Progress</li>
                <li className={itemClassName}>
                  Microsoft Office Specialist Certification — In Progress
                </li>
                <li className={itemClassName}>
                  SkillsUSA Illinois State — 6th Place, Technical Information
                  Services (2025)
                </li>
                <li className={itemClassName}>
                  National Technical Honor Society — Member
                </li>
              </ul>

              <Link
                href="/projects"
                className="interactive-lift mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default AboutPage
