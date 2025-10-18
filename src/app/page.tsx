'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'

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

  // Updated button classes for a more modern look and feel
  const buttonClasses = "group inline-flex items-center gap-3 px-6 py-3 bg-accent text-black rounded-lg font-semibold transition-all duration-300 cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 active:translate-y-0 active:shadow-sm";
  const secondaryButtonClasses = "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-black";

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          Creative Developer & Game Designer
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-content-secondary">
          Hi, I'm Jeremy, a passionate high school developer specializing in scripting, game design, and computer science. 
          Welcome to my digital portfolio, where I share my projects and connect with like-minded creators in tech!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/projects" className={buttonClasses}>
            <i className="fas fa-code transition-transform duration-300 group-hover:rotate-6"></i>
            View My Projects
          </Link>
          <Link href="/contact" className={`${buttonClasses} ${secondaryButtonClasses}`}>
            <i className="fas fa-envelope transition-transform duration-300 group-hover:rotate-6"></i>
            Get In Touch
          </Link>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Featured Work</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mt-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>My Skills</h2>
        <Skills />
      </motion.section>
      
      {/* Resume Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2>My Resume</h2>
          <a href="/jeremy_hayes_resume.pdf" download className={`${buttonClasses} ${secondaryButtonClasses}`}>
             <i className="fas fa-download"></i>
             Download
          </a>
        </div>
        <div className="p-2 border border-border rounded-lg bg-bg-secondary shadow-lg">
            <Image
              src="/images/resume.jpg"
              alt="Jeremy M. Hayes Resume"
              width={1000}
              height={600}
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="bg-gradient-to-r from-bg-secondary to-bg-tertiary border border-border p-10 rounded-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-center mb-6 after:left-1/2 after:-translate-x-1/2">Stay Updated</h2>
        <p className="max-w-xl mx-auto text-content-secondary">
          Subscribe to my newsletter for occasional updates on new projects and tech insights. No spam, ever.
        </p>
        <form className="max-w-md mx-auto mt-6" onSubmit={handleNewsletterSubmit}>
          <div className="flex gap-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 rounded-lg px-6 py-3 border border-border bg-bg-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            <button type="submit" className={`${buttonClasses} ${isSubmitting ? 'animate-spinner' : ''}`}>
              Subscribe
            </button>
          </div>
          {message && (
            <div className={`mt-4 text-center font-medium ${message.includes('Thank you') ? 'text-success' : 'text-error'}`}>
              {message}
            </div>
          )}
        </form>
      </motion.section>
    </div>
  )
}

export default HomePage

