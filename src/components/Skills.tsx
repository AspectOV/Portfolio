'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FaCode,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaCube,
  FaDiscord,
  FaServer,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiRoblox,
  SiUnity,
  SiCloudflare,
} from 'react-icons/si'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { TbApi, TbSettingsCog } from 'react-icons/tb'

interface Skill {
  name: string
  icon: IconType
}

const skills: Skill[] = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'C#', icon: FaCode },
  { name: 'Python', icon: FaPython },
  { name: 'Luau (Roblox)', icon: FaCode },

  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: HiOutlineSquares2X2 },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Tailwind CSS', icon: SiTailwindcss },

  { name: 'Linux', icon: FaLinux },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Cloudflare', icon: SiCloudflare },

  { name: 'Roblox Studio', icon: SiRoblox },
  { name: 'Unity', icon: SiUnity },
  { name: 'Blender', icon: FaCube },

  { name: 'REST APIs', icon: TbApi },
  { name: 'Discord Bot Development', icon: FaDiscord },
  { name: 'Game Systems Engineering', icon: TbSettingsCog },
  { name: 'Server Administration', icon: FaServer },
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
      ease: 'easeOut',
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
      {skills.map((skill) => {
        const Icon = skill.icon

        return (
          <motion.li
            key={skill.name}
            variants={itemVariants}
            className="list-none"
          >
            <div className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-400/[0.08]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-300 transition-colors duration-200 group-hover:bg-cyan-400/15">
                <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
              </span>

              <span className="leading-snug">{skill.name}</span>
            </div>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

export default Skills
