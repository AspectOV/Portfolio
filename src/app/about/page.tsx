'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'

const AboutPage: React.FC = () => {
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
        className="resume-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Education</h2>
        <h3>York Community High School</h3>
        <p>Expected Graduation: 2027</p>
        <p>Relevant Coursework:</p>
        <ul>
          <li>AP Computer Science Principles</li>
          <li>Technology Services Internship</li>
          <li>Honors Physics</li>
          <li>Computer Programming</li>
        </ul>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Skills</h2>
        <Skills />

        <h3 className="mt-2">Certifications</h3>
        <ul>
          <li>CompTIA Tech+</li>
          <li>RDF Programming</li>
          <li>Lenovo Laptop Repair</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Hobbies & Interests</h2>
        <p>When I'm not coding or designing, you can find me:</p>
        <ul>
          <li>Competing in SkillsUSA competitions</li>
          <li>Practicing wrestling and Jiu Jitsu</li>
          <li>Learning new game engines</li>
          <li>Help developer communities solve problems</li>
          <li>Contributing to open-source game projects</li>
        </ul>
      </motion.section>
    </>
  )
}

export default AboutPage
