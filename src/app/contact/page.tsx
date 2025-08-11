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
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const validate = () => {
    let tempErrors = { name: '', email: '', subject: '', message: '' }
    let isValid = true

    if (!formData.name) {
      tempErrors.name = 'Name is required'
      isValid = false
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid'
      isValid = false
    }
    if (!formData.subject) {
      tempErrors.subject = 'Subject is required'
      isValid = false
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setMessage('')

    try {
      // Simulate API call (replace with actual contact form submission)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-error">{errors.name}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-error">{errors.email}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            {errors.subject && <p className="text-error">{errors.subject}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
            />
            {errors.message && <p className="text-error">{errors.message}</p>}
          </div>
          
          <button type="submit" className={`button ${isSubmitting ? 'loading' : ''}`}>
            Send Message
          </button>
          
          {message && (
            <div className={`form-message ${message.includes('Thank you') ? 'success' : 'error'}`}>
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
        <div className="grid grid-2 gap-4">
          <div className="card">
            <h3><i className="fab fa-github"></i> GitHub</h3>
            <p>Check out my open-source projects and contributions.</p>
            <a href="https://github.com/AspectOV" className="button" target="_blank" rel="noopener noreferrer">
              Visit GitHub
            </a>
          </div>
          
          <div className="card">
            <h3><i className="fab fa-linkedin"></i> LinkedIn</h3>
            <p>Connect with me professionally and see my experience.</p>
            <a href="https://linkedin.com/in/jeremymhayes" className="button" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="card">
            <h3><i className="fab fa-twitter"></i> Twitter</h3>
            <p>Follow me for updates on projects and tech insights.</p>
            <a href="https://twitter.com/realaspectdev" className="button" target="_blank" rel="noopener noreferrer">
              Follow on Twitter
            </a>
          </div>
          
          <div className="card">
            <h3><i className="fab fa-youtube"></i> YouTube</h3>
            <p>Watch tutorials and project showcases.</p>
            <a href="https://www.youtube.com/channel/UCS3szLGePeV24qXKvFEgeWw" className="button" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ContactPage
