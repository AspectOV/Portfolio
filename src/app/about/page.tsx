'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'Lua/Luau', icon: 'fas fa-code' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Blender', icon: 'fas fa-cube' },
    { name: 'Unity', icon: 'fas fa-gamepad' },
    { name: 'Windows', icon: 'fab fa-windows' },
    { name: 'Game Development', icon: 'fas fa-gamepad' },
    { name: '3D Modeling', icon: 'fas fa-cube' },
    { name: 'UI Design', icon: 'fas fa-palette' }
  ]

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
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">AP Computer Science Principles</li>
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">Technology Services Internship</li>
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">Honors Physics</li>
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">Computer Programming</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Skills</h2>
        <div className="flex flex-wrap gap-sm mt-md">
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className="inline-flex items-center gap-xs px-sm py-xs bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <i className={skill.icon}></i> {skill.name}
            </motion.span>
          ))}
        </div>

        <h3 className="mt-6">Certifications</h3>
        <ul className="list-none p-0">
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">CompTIA Tech+</li>
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">RDF Programming</li>
          <li className="py-sm border-b border-border pl-lg relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:font-bold">Lenovo Laptop Repair</li>
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
