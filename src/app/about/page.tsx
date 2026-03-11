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
        <h2>About Me</h2>
        <p>
          I’m a high school student at York Community High School with a strong
          interest in computer science, software development, and game
          development. I enjoy building projects that combine creativity with
          problem-solving, especially in Roblox development, desktop
          applications, and web development.
        </p>
        <p>
          My strongest languages are Luau and Python, and I’m currently
          expanding my skills in HTML, CSS, JavaScript, and C#. I’m especially
          interested in creating polished, interactive experiences and writing
          code that is both efficient and scalable.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Education</h2>
        <h3>York Community High School</h3>
        <p>Expected Graduation: 2027</p>
        <p>Relevant Coursework:</p>
        <ul className="list-none p-0">
          <li className={liClasses}>AP Computer Science Principles</li>
          <li className={liClasses}>Computer Programming</li>
          <li className={liClasses}>Technology Services Internship</li>
          <li className={liClasses}>Honors Physics</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Technical Focus</h2>
        <p>
          I’ve worked on projects involving Roblox systems, world generation,
          VFX workflows, portfolio websites, and C# application development.
          I’m interested in building software that is functional, secure, and
          user-friendly, while continuing to strengthen my foundation in
          computer science.
        </p>

        <h3 className="mt-6">Skills</h3>
        <Skills />

        <h3 className="mt-6">Certifications</h3>
        <ul className="list-none p-0">
          <li className={liClasses}>CompTIA Tech+</li>
          <li className={liClasses}>RDF Programming</li>
          <li className={liClasses}>Lenovo Laptop Repair</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Goals & Interests</h2>
        <p>
          I’m working toward a future in computer science, with interests in
          software engineering, game development, and technical problem-solving.
          I enjoy learning by building real projects and improving them over
          time.
        </p>
        <ul className="list-none p-0">
          <li className={liClasses}>Developing games and systems in Roblox</li>
          <li className={liClasses}>Building modern web and desktop applications</li>
          <li className={liClasses}>Learning new programming languages and tools</li>
          <li className={liClasses}>Competing in SkillsUSA</li>
          <li className={liClasses}>Practicing wrestling and Jiu Jitsu</li>
        </ul>
      </motion.section>
    </>
  )
}

export default AboutPage