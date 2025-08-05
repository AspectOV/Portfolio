'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      // Simulate API call (replace with actual contact form submission)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
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
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together or just want to say hello!
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="mb-md">
            <label htmlFor="name" className="block mb-xs font-semibold text-text-primary">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-sm border border-border rounded-md bg-bg-tertiary text-text-primary transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,180,216,0.1)]"
            />
          </div>
          
          <div className="mb-md">
            <label htmlFor="email" className="block mb-xs font-semibold text-text-primary">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-sm border border-border rounded-md bg-bg-tertiary text-text-primary transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,180,216,0.1)]"
            />
          </div>
          
          <div className="mb-md">
            <label htmlFor="subject" className="block mb-xs font-semibold text-text-primary">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full p-sm border border-border rounded-md bg-bg-tertiary text-text-primary transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,180,216,0.1)]"
            />
          </div>
          
          <div className="mb-md">
            <label htmlFor="message" className="block mb-xs font-semibold text-text-primary">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full p-sm border border-border rounded-md bg-bg-tertiary text-text-primary transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,180,216,0.1)] resize-y min-h-[120px]"
            />
          </div>
          
          <button type="submit" className={`inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 ${isSubmitting ? 'relative pointer-events-none after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:w-5 after:h-5 after:mt-[-10px] after:ml-[-10px] after:border-2 after:border-accent after:border-t-transparent after:rounded-full after:animate-spin' : ''}`}>
            Send Message
          </button>
          
          {message && (
            <div className={`mt-sm text-center font-medium ${message.includes('Thank you') ? 'text-success' : 'text-error'}`}>
              {message}
            </div>
          )}
        </form>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Connect With Me</h2>
        <div className="grid grid-cols-2 gap-16">
          <div className="bg-bg-secondary border border-border rounded-lg p-md transition-all hover:border-accent hover:shadow-md">
            <h3><i className="fab fa-github"></i> GitHub</h3>
            <p>Check out my open-source projects and contributions.</p>
            <a href="https://github.com/AspectOV" className="inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0" target="_blank" rel="noopener noreferrer">
              Visit GitHub
            </a>
          </div>
          
          <div className="bg-bg-secondary border border-border rounded-lg p-md transition-all hover:border-accent hover:shadow-md">
            <h3><i className="fab fa-linkedin"></i> LinkedIn</h3>
            <p>Connect with me professionally and see my experience.</p>
            <a href="https://linkedin.com/in/jeremymhayes" className="inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="bg-bg-secondary border border-border rounded-lg p-md transition-all hover:border-accent hover:shadow-md">
            <h3><i className="fab fa-twitter"></i> Twitter</h3>
            <p>Follow me for updates on projects and tech insights.</p>
            <a href="https://twitter.com/realaspectdev" className="inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0" target="_blank" rel="noopener noreferrer">
              Follow on Twitter
            </a>
          </div>
          
          <div className="bg-bg-secondary border border-border rounded-lg p-md transition-all hover:border-accent hover:shadow-md">
            <h3><i className="fab fa-youtube"></i> YouTube</h3>
            <p>Watch tutorials and project showcases.</p>
            <a href="https://www.youtube.com/channel/UCS3szLGePeV24qXKvFEgeWw" className="inline-flex items-center gap-xs px-md py-sm bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translatey-0" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ContactPage 
