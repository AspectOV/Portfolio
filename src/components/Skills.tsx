'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'

interface Skill {
  name: string
  icon: string
}

const skills: Skill[] = [
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'C#', icon: 'fas fa-code' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Luau (Roblox)', icon: 'fas fa-code' },

  { name: 'React', icon: 'fab fa-react' },
  { name: 'Next.js', icon: 'fas fa-layer-group' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Express.js', icon: 'fas fa-server' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind' },

  { name: 'Linux', icon: 'fab fa-linux' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Cloudflare', icon: 'fas fa-cloud' },

  { name: 'Roblox Studio', icon: 'fas fa-gamepad' },
  { name: 'Unity', icon: 'fas fa-gamepad' },
  { name: 'Blender', icon: 'fas fa-cube' },

  { name: 'REST APIs', icon: 'fas fa-network-wired' },
  { name: 'Discord Bot Development', icon: 'fab fa-discord' },
  { name: 'Game Systems Engineering', icon: 'fas fa-gears' },
  { name: 'Server Administration', icon: 'fas fa-server' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: 'easeOut' as const,
    },
  },
}

const Skills: React.FC = () => {
  return (
    <motion.ul
      className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      aria-label="Skills and technologies"
    >
      {skills.map((skill) => (
        <motion.li
          key={skill.name}
          variants={itemVariants}
          className="list-none"
        >
          <div className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-400/[0.08]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-300 transition-colors duration-200 group-hover:bg-cyan-400/15">
              <i className={skill.icon} aria-hidden="true" />
            </span>

            <span className="leading-snug">{skill.name}</span>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default Skills
