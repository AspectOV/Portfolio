'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
      demoUrl: '#',
      codeUrl: '#',
      detailsUrl: '#'
    },
    {
      id: 'roblox-game-2',
      title: 'Cookie Clicker',
      description: "A faithful recreation of Orteil's Cookie Clicker.",
      image: '/images/roblox-game.png',
      category: 'game-dev',
      tags: ['Lua', 'Roblox', 'UI Design'],
      demoUrl: '#',
      codeUrl: '#',
      detailsUrl: '#'
    },
    {
      id: 'web-app-1',
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with modern web technologies.',
      image: '/images/web-dev-project.png',
      category: 'web-dev',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      demoUrl: '#',
      codeUrl: '#',
      detailsUrl: '#'
    },
    {
      id: 'software-1',
      title: 'File Encryptor',
      description: 'Windows desktop application for file encryption and compression.',
      image: '/images/unity-game.jpg',
      category: 'software-dev',
      tags: ['C#', 'Windows', 'Desktop App'],
      demoUrl: '#',
      codeUrl: '#',
      detailsUrl: '#'
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
            <motion.div
              key={project.id}
              className="project"
              data-category={project.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`Image of ${project.title} Project`}
                  width={400}
                  height={225}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.detailsUrl} className="project-link" aria-label="View project details">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a href={project.demoUrl} className="project-link" aria-label="View project demo">
                      <i className="fas fa-play-circle"></i>
                    </a>
                    <a href={project.codeUrl} className="project-link" aria-label="View project code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>
                  <i className={`fas fa-${project.category === 'game-dev' ? 'gamepad' : project.category === 'web-dev' ? 'globe' : 'code'}`}></i>
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <a href={project.demoUrl} className="button">
                    <i className="fas fa-play"></i>
                    Demo
                  </a>
                  <a href={project.codeUrl} className="button secondary">
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default ProjectsPage 
