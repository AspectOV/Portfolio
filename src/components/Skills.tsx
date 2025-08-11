'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
  { name: 'UI Design', icon: 'fas fa-palette' },
  { name: 'Software Development', icon: 'fas fa-desktop' },
  { name: 'Bot Development', icon: 'fa-brands fa-discord' }
]

const Skills: React.FC = () => {
  return (
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
  )
}

export default Skills
