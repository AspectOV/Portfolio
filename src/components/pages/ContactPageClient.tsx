'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Script from 'next/script'
import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import AudienceModeToggle from '@/components/AudienceModeToggle'
import { useAudiencePreference } from '@/components/AudiencePreferenceProvider'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  projectType: string
  budgetRange: string
  timeline: string
  goals: string
}

interface FormErrors {
  name: string
  email: string
  subject: string
  message: string
  projectType: string
  budgetRange: string
  timeline: string
  goals: string
}

interface SocialLink {
  title: string
  icon: IconType
  description: string
  href: string
  cta: string
}

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void
    onTurnstileExpired?: () => void
    onTurnstileError?: () => void
    turnstile?: {
      reset: () => void
    }
  }
}

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
})

const inputClassName =
  'w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 transition-all duration-200 focus:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80'

const labelClassName = 'mb-2 block text-sm font-medium text-white/85'

const socialLinks: SocialLink[] = [
  {
    title: 'GitHub',
    icon: FaGithub,
    description: 'Browse my projects, experiments, and public repositories.',
    href: 'https://github.com/AspectOV',
    cta: 'Visit GitHub',
  },
  {
    title: 'LinkedIn',
    icon: FaLinkedin,
    description: 'Connect with me professionally and view my background.',
    href: 'https://linkedin.com/in/jeremymhayes',
    cta: 'Connect on LinkedIn',
  },
  {
    title: 'Twitter',
    icon: FaTwitter,
    description: 'Follow updates, ideas, and work in progress.',
    href: 'https://twitter.com/realaspectdev',
    cta: 'Follow on Twitter',
  },
  {
    title: 'YouTube',
    icon: FaYoutube,
    description: 'Watch project showcases, tutorials, and dev content.',
    href: 'https://www.youtube.com/channel/UCS3szLGePeV24qXKvFEgeWw',
    cta: 'Visit YouTube',
  },
]

const ContactPage: React.FC = () => {
  const { audience } = useAudiencePreference()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    goals: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    goals: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')

  const isSuccess = useMemo(
    () => statusMessage.toLowerCase().includes('thank'),
    [statusMessage]
  )

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token)
    }

    window.onTurnstileExpired = () => {
      setTurnstileToken('')
    }

    window.onTurnstileError = () => {
      setTurnstileToken('')
    }

    return () => {
      delete window.onTurnstileSuccess
      delete window.onTurnstileExpired
      delete window.onTurnstileError
    }
  }, [])

  useEffect(() => {
    setStatusMessage('')
    setErrors({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: '',
      budgetRange: '',
      timeline: '',
      goals: '',
    })
  }, [audience])

  const validate = () => {
    const nextErrors: FormErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: '',
      budgetRange: '',
      timeline: '',
      goals: '',
    }

    let valid = true

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.'
      valid = false
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
      valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.'
      valid = false
    }

    if (audience === 'recruiter') {
      if (!formData.projectType.trim()) {
        nextErrors.projectType = 'Project type is required.'
        valid = false
      }

      if (!formData.budgetRange.trim()) {
        nextErrors.budgetRange = 'Budget range is required.'
        valid = false
      }

      if (!formData.timeline.trim()) {
        nextErrors.timeline = 'Timeline is required.'
        valid = false
      }

      if (!formData.goals.trim()) {
        nextErrors.goals = 'Goals are required.'
        valid = false
      }
    } else {
      if (!formData.subject.trim()) {
        nextErrors.subject = 'Subject is required.'
        valid = false
      }

      if (!formData.message.trim()) {
        nextErrors.message = 'Message is required.'
        valid = false
      }
    }

    setErrors(nextErrors)
    return valid
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) return

    if (!turnstileToken) {
      setStatusMessage('Please complete the verification check.')
      return
    }

    setIsSubmitting(true)
    setStatusMessage('')

    const payload =
      audience === 'recruiter'
        ? {
            subject: `Portfolio inquiry: ${formData.projectType.trim()} (${formData.timeline.trim()})`,
            message: [
              `Project type: ${formData.projectType.trim()}`,
              `Budget range: ${formData.budgetRange.trim()}`,
              `Timeline: ${formData.timeline.trim()}`,
              '',
              'Goals:',
              formData.goals.trim(),
            ].join('\n'),
          }
        : {
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }

    try {
      const response = await fetch(
        'https://contactapi.mcjeremyhaynes.workers.dev/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            ...payload,
            turnstileToken,
          }),
        }
      )

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            data?.error || 'Please wait a minute before sending another message.'
          )
        }

        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setStatusMessage("Thank you for your message. I'll get back to you soon.")
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: '',
        budgetRange: '',
        timeline: '',
        goals: '',
      })
      setTurnstileToken('')
      window.turnstile?.reset()
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
      setTurnstileToken('')
      window.turnstile?.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-14 md:space-y-20">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <motion.section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm md:p-8"
        {...sectionTransition(0)}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Contact
        </p>

        <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
          Let’s build something useful.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          I’m open to opportunities, collaborations, freelance work, and
          interesting technical conversations. Reach out and I’ll get back to you.
        </p>
      </motion.section>

      <motion.section
        className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        {...sectionTransition(0.08)}
      >
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-8">
          <h2>Send a Message</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Choose the contact path that fits you best, then fill out the form.
          </p>

          <div className="mt-6">
            <AudienceModeToggle />
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className={labelClassName}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClassName}
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClassName}
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {audience === 'recruiter' ? (
              <>
                <div>
                  <label htmlFor="projectType" className={labelClassName}>
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={inputClassName}
                    placeholder="e.g., marketing site, dashboard, redesign"
                  />
                  {errors.projectType && (
                    <p className="mt-2 text-sm text-red-400">{errors.projectType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budgetRange" className={labelClassName}>
                    Budget Range
                  </label>
                  <input
                    type="text"
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className={inputClassName}
                    placeholder="e.g., $2k-$5k"
                  />
                  {errors.budgetRange && (
                    <p className="mt-2 text-sm text-red-400">{errors.budgetRange}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className={labelClassName}>
                    Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={inputClassName}
                    placeholder="e.g., launch in 6 weeks"
                  />
                  {errors.timeline && (
                    <p className="mt-2 text-sm text-red-400">{errors.timeline}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="goals" className={labelClassName}>
                    Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={7}
                    value={formData.goals}
                    onChange={handleInputChange}
                    className={`${inputClassName} resize-y`}
                    placeholder="What should this project achieve?"
                  />
                  {errors.goals && (
                    <p className="mt-2 text-sm text-red-400">{errors.goals}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="subject" className={labelClassName}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={inputClassName}
                    placeholder="What are you reaching out about?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={labelClassName}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${inputClassName} resize-y`}
                    placeholder="Share your message or question."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="pt-1">
              <div
                className="cf-turnstile"
                data-sitekey="0x4AAAAAACpxvBbYYkCL8G5V"
                data-callback="onTurnstileSuccess"
                data-expired-callback="onTurnstileExpired"
                data-error-callback="onTurnstileError"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3.5 font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-cyan-300 text-black/80 opacity-80'
                    : 'interactive-lift bg-cyan-400 text-black hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {statusMessage && (
                <p
                  className={`text-sm font-medium ${
                    isSuccess ? 'text-green-400' : 'text-red-400'
                  }`}
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-8">
            <h2>Connect With Me</h2>
            <p className="mt-3 text-white/80">
              You can also find me on these platforms.
            </p>
            <p className="mt-3 text-white/80">
              Prefer email? Reach out directly at{' '}
              <a
                href="mailto:Jeremy@jeremymhayes.com"
                className="font-semibold text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100"
              >
                Jeremy@jeremymhayes.com
              </a>
              .
            </p>
          </div>

          <div className="grid gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <div
                  key={link.title}
                  className="interactive-lift rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                    <span>{link.title}</span>
                  </h3>

                  <p className="mt-3 text-white/65">{link.description}</p>

                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-lift mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-2.5 font-medium text-cyan-200 transition-all duration-200 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                  >
                    {link.cta}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage
