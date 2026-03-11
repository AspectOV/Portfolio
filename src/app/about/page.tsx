'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'

const AboutPage: React.FC = () => {
  const liClasses =
    "py-4 border-b border-border relative pl-10 before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold"

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About</h2>
        <p>
          I’m a high school developer focused on computer science, cybersecurity,
          and full-stack software development. I build secure applications,
          backend systems, and developer tools used in Roblox and Discord
          communities. My work focuses on reliability, security, and clean system
          architecture.
        </p>
        <p>
          I’ve developed applications ranging from encrypted desktop software to
          real-time APIs and cloud-hosted infrastructure. I enjoy designing
          systems that connect multiple platforms together and solving technical
          problems that require both software and infrastructure knowledge.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Education</h2>
        <h3>York Community High School — Elmhurst, IL</h3>
        <p>Expected Graduation: June 2027</p>

        <p>Relevant Coursework:</p>
        <ul className="list-none p-0">
          <li className={liClasses}>AP Computer Science Principles</li>
          <li className={liClasses}>AP Computer Science A</li>
          <li className={liClasses}>Advanced Technological Services Internship</li>
          <li className={liClasses}>Honors Physics</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Development Experience</h2>
        <p>
          Since 2023, I’ve worked as a freelance Roblox developer and systems
          engineer. I’ve written dozens of Luau scripts and gameplay systems for
          developers, helping standardize mechanics and accelerate development
          timelines across multiple projects.
        </p>

        <p>
          I also led systems integration for the Roblox project <strong>The Survivors</strong>,
          stabilizing gameplay systems and resolving integration bugs across
          independently developed modules. The project has reached tens of
          thousands of visits.
        </p>

        <h3 className="mt-6">Technical Skills</h3>
        <Skills />

        <h3 className="mt-6">Technologies</h3>
        <ul className="list-none p-0">
          <li className={liClasses}>React, Next.js, Tailwind CSS</li>
          <li className={liClasses}>Unity and WinUI / XAML application development</li>
          <li className={liClasses}>Linux server administration</li>
          <li className={liClasses}>Git and CI/CD workflows</li>
          <li className={liClasses}>Cloudflare networking and tunneling</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Achievements</h2>
        <ul className="list-none p-0">
          <li className={liClasses}>
            SkillsUSA Illinois State Finalist — 6th Place (Technical Information Services, 2025)
          </li>
          <li className={liClasses}>Member — National Technical Honor Society</li>
          <li className={liClasses}>CompTIA Tech+ Certification</li>
          <li className={liClasses}>CompTIA A+ (In Progress)</li>
          <li className={liClasses}>Microsoft Office Specialist (In Progress)</li>
        </ul>
      </motion.section>
    </>
  )
}

export default AboutPage