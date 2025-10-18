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
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const buttonClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-accent text-black hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-md active:translate-y-0'
  const secondaryButtonClasses =
    'bg-transparent text-accent border border-accent hover:bg-accent hover:text-black'

  return (
    <main className="flex flex-col gap-24 px-6 md:px-12 lg:px-24 py-16 text-foreground bg-background">
      {/* Hero Section */}
      <motion.section
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Hi, I&apos;m <span className="font-semibold text-accent">Jeremy</span>, a passionate high school
          developer specializing in scripting, game design, and computer science.
          Welcome to my digital portfolio, where I share my projects and connect
          with like-minded creators in tech!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/projects" className={buttonClasses}>
            <i className="fas fa-code" />
            View My Projects
          </Link>
          <Link href="/contact" className={`${buttonClasses} ${secondaryButtonClasses}`}>
            <i className="fas fa-envelope" />
            Get In Touch
          </Link>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Featured Work</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <Skills />
      </motion.section>

      {/* Resume Section */}
      <motion.section
        className="max-w-5xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        <Image
          src="/images/resume.jpg"
          alt="Jeremy M. Hayes Resume"
          width={1000}
          height={600}
          className="rounded-xl shadow-lg border border-border mx-auto"
          loading="lazy"
        />
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="max-w-3xl mx-auto w-full bg-gradient-to-r from-secondary/40 to-tertiary/40 border border-border p-10 rounded-2xl text-center shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to my newsletter for updates on new projects and tech insights.
        </p>

        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${buttonClasses} ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 font-medium ${
              message.includes('Thank you') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message}
          </p>
        )}
      </motion.section>
    </main>
  )
}

export default HomePage
