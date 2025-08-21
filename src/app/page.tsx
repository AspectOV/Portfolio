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

  const buttonClasses = "inline-flex items-center gap-2 px-6 py-4 bg-accent text-black rounded-md font-semibold transition-all duration-fast cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-px hover:shadow-md active:translate-y-0";
  const secondaryButtonClasses = "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-black";

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
          <Link href="/projects" className={buttonClasses}>
            <i className="fas fa-code"></i>
            View My Projects
          </Link>
          <Link href="/contact" className={`${buttonClasses} ${secondaryButtonClasses} ml-4`}>
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mt-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Skills</h2>
        <Skills />
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
        className="bg-gradient-to-r from-bg-secondary to-bg-tertiary border border-border p-10 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-center mb-6 after:left-1/2 after:-translate-x-1/2">Stay Updated</h2>
        <p>Subscribe to my newsletter for updates on new projects and tech insights.</p>
        <form className="max-w-[500px] mx-auto" onSubmit={handleNewsletterSubmit}>
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
              className="flex-1 rounded-full px-6 py-4 border border-border focus:border-accent"
            />
            <button type="submit" className={`${buttonClasses} ${isSubmitting ? 'animate-loading-spinner' : ''}`}>
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
    </>
  )
}

export default HomePage
