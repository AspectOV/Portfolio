'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'

const AboutPage: React.FC = () => {
  const liClasses = "py-4 border-b border-border relative pl-10 before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold";

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Background</h2>
        <p>
          I'm a student at York Community High School, graduating in 2027. I'm interested in building interactive games, 
          designing game assets, and learning more about computer science and software engineering.
        </p>
        <p>
          I enjoy competing in SkillsUSA, wrestling, and practicing Jiu Jitsu. I'm also certified in CompTIA Tech+, 
          RDF Programming, and Lenovo Laptop Repair.
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
          <li className={liClasses}>Technology Services Internship</li>
          <li className={liClasses}>Honors Physics</li>
          <li className={liClasses}>Computer Programming</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Skills</h2>
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
        <h2>Hobbies & Interests</h2>
        <p>When I'm not coding or designing, you can find me:</p>
        <ul className="list-none p-0">
          <li className={liClasses}>Competing in SkillsUSA competitions</li>
          <li className={liClasses}>Practicing wrestling and Jiu Jitsu</li>
          <li className={liClasses}>Learning new game engines</li>
          <li className={liClasses}>Help developer communities solve problems</li>
          <li className={liClasses}>Contributing to open-source game projects</li>
        </ul>
      </motion.section>
    </>
  )
}

export default AboutPage
