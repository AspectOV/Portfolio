'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const featuredProjects = [
    {
      id: 'roblox-game',
      title: 'Roblox Game Development',
      description: 'Crafting high quality Roblox games of all genres using Roblox Studio.',
      image: '/images/roblox-game.png',
      category: 'game-dev',
      tags: ['Lua', 'Roblox', 'Game Design'],
      link: '/projects#roblox-games'
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      description: 'Developing scalable and maintainable software solutions.',
      image: '/images/unity-game.jpg',
      category: 'software-dev',
      tags: ['C#', 'Windows', 'Software'],
      link: '/portfolio#software-dev'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Building responsive and interactive websites like this portfolio.',
      image: '/images/web-dev-project.png',
      category: 'web-dev',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '/projects#web-dev'
    }
  ]

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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage('')

    try {
      // Simulate API call (replace with actual newsletter subscription logic)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Welcome</h2>
        <p>
          Hi, I'm Jeremy, a passionate high school developer specializing in scripting, game design, and computer science. 
          Welcome to my digital portfolio, where I share my projects and connect with like-minded creators in tech!
        </p>
        <div className="mt-2">
          <Link href="/projects" className="button">
            <i className="fas fa-code"></i>
            View My Projects
          </Link>
          <Link href="/contact" className="button secondary" style={{ marginLeft: '1rem' }}>
            <i className="fas fa-envelope"></i>
            Get In Touch
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Featured Work</h2>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project"
              data-category={project.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                    <a href={`#project-details-${project.id}`} className="project-link" aria-label="View project details">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a href={`#project-demo-${project.id}`} className="project-link" aria-label="View project demo">
                      <i className="fas fa-play-circle"></i>
                    </a>
                    <a href={`#project-code-${project.id}`} className="project-link" aria-label="View project code">
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
                <Link href={project.link} className="button">
                  {project.category === 'game-dev' ? 'Project Gallery' : 
                   project.category === 'web-dev' ? 'See Examples' : 'View Portfolio'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <i className={skill.icon}></i> {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="resume-section"
        style={{ margin: '2rem 0' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 style={{ textAlign: 'left' }}>My Resume</h2>
        <Image
          src="/images/resume.jpg"
          alt="Jeremy M. Hayes Resume"
          width={1000}
          height={600}
          style={{
            maxWidth: '1000px',
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            marginTop: '1rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          loading="lazy"
        />
      </motion.section>

      <motion.section
        className="newsletter-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2>Stay Updated</h2>
        <p>Subscribe to my newsletter for updates on new projects and tech insights.</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <button type="submit" className={`button ${isSubmitting ? 'loading' : ''}`}>
              Subscribe
            </button>
          </div>
          {message && (
            <div className={`form-message ${message.includes('Thank you') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </form>
      </motion.section>
    </>
  )
}

export default HomePage 
