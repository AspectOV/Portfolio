'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 'roblox-game-1',
      title: 'Vacancy Filled',
      description: 'An immersive horror experience inspired by The Closing Shift.',
      image: '/images/roblox-game.png',
      category: 'game-dev',
      tags: ['Lua', 'Roblox', 'Horror'],
      link: '#'
    },
    {
      id: 'roblox-game-2',
      title: 'Cookie Clicker',
      description: "A faithful recreation of Orteil's Cookie Clicker.",
      image: '/images/roblox-game.png',
      category: 'game-dev',
      tags: ['Lua', 'Roblox', 'UI Design'],
      link: '#'
    },
    {
      id: 'web-app-1',
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with modern web technologies.',
      image: '/images/web-dev-project.png',
      category: 'web-dev',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      link: '#'
    },
    {
      id: 'software-1',
      title: 'File Encryptor',
      description: 'Windows desktop application for file encryption and compression.',
      image: '/images/unity-game.jpg',
      category: 'software-dev',
      tags: ['C#', 'Windows', 'Desktop App'],
      link: '#'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'game-dev', label: 'Game Development' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'software-dev', label: 'Software Development' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Projects</h2>
        <p>
          Here's a collection of my recent projects showcasing my skills in game development, 
          web development, and software engineering.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Filter Projects</h2>
        <div className="flex gap-2 mb-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`button ${activeFilter === filter.id ? '' : 'secondary'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default ProjectsPage
