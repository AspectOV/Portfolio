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
        <div className="mt-6">
          <Link href="/projects" className="inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
            <i className="fas fa-code"></i>
            View My Projects
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-xs px-md py-sm bg-transparent text-accent border-2 border-accent rounded-md font-semibold transition-all cursor-pointer text-base hover:bg-accent hover:text-black" style={{ marginLeft: '1rem' }}>
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg mt-md">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-bg-tertiary rounded-lg overflow-hidden border border-border transition-all"
              data-category={project.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={`Image of ${project.title} Project`}
                  width={400}
                  height={225}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex gap-sm">
                    <a href={`#project-details-${project.id}`} className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full transition-all hover:bg-accent-hover hover:scale-110" aria-label="View project details">
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <a href={`#project-demo-${project.id}`} className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full transition-all hover:bg-accent-hover hover:scale-110" aria-label="View project demo">
                      <i className="fas fa-play-circle"></i>
                    </a>
                    <a href={`#project-code-${project.id}`} className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full transition-all hover:bg-accent-hover hover:scale-110" aria-label="View project code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-md">
                <h3>
                  <i className={`fas fa-${project.category === 'game-dev' ? 'gamepad' : project.category === 'web-dev' ? 'globe' : 'code'}`}></i>
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-xs mb-md">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-sm py-xs bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30">{tag}</span>
                  ))}
                </div>
                <Link href={project.link} className="inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
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
      </motion.section>

      <motion.section
        className="my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-left">My Resume</h2>
        <Image
          src="/images/resume.jpg"
          alt="Jeremy M. Hayes Resume"
          width={1000}
          height={600}
          className="max-w-[1000px] w-full h-auto rounded-lg shadow-lg mt-4 block mx-auto"
          loading="lazy"
        />
      </motion.section>

      <motion.section
        className="bg-gradient-to-r from-bg-secondary to-bg-tertiary border border-border p-lg rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-center mb-md after:left-1/2 after:-translate-x-1/2">Stay Updated</h2>
        <p>Subscribe to my newsletter for updates on new projects and tech insights.</p>
        <form className="max-w-[500px] mx-auto" onSubmit={handleNewsletterSubmit}>
          <div className="flex gap-sm">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 rounded-full px-md py-sm border border-border focus:border-accent"
            />
            <button type="submit" className={`inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 ${isSubmitting ? 'relative pointer-events-none after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:w-5 after:h-5 after:mt-[-10px] after:ml-[-10px] after:border-2 after:border-accent after:border-t-transparent after:rounded-full after:animate-spin' : ''}`}>
              Subscribe
            </button>
          </div>
          {message && (
            <div className={`mt-sm text-center font-medium ${message.includes('Thank you') ? 'text-success' : 'text-error'}`}>
              {message}
            </div>
          )}
        </form>
      </motion.section>
    </>
  )
}

export default HomePage 
