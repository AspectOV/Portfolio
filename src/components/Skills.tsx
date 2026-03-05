'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'TypeScript', icon: 'fab fa-js' },
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
  { name: 'Server Administration', icon: 'fas fa-server' }
]
const Skills: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/90 transition-all hover:border-cyan-300/40 hover:bg-cyan-500/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.04 }}
        >
          <i className={`${skill.icon} text-cyan-300`} aria-hidden="true"></i>
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default Skills
