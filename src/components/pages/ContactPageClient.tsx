'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Script from 'next/script'
import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name: string
  email: string
  subject: string
  message: string
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

const bleedClass =
  'relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-8'

const frameClass = 'mx-auto max-w-[1380px]'

const inputClassName =
  'w-full border-b border-white/15 bg-transparent px-0 py-3 text-white placeholder:text-white/40 transition-all duration-200 focus:border-cyan-300/60 focus:outline-none'

const labelClassName = 'mb-2 block text-sm font-medium text-white/85'

const getErrorId = (field: keyof FormErrors) => `${field}-error`

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    subject: '',
    message: '',
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

  const validate = () => {
    const nextErrors: FormErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
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

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Subject is required.'
      valid = false
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
      valid = false
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
            subject: formData.subject.trim(),
            message: formData.message.trim(),
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
    <div className="space-y-0">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <motion.section className={`${bleedClass} pt-0`} {...sectionTransition(0)}>
        <div className={`${frameClass} grid gap-8 border-b border-white/10 pb-8 md:gap-10 md:pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end`}>
          <div className="max-w-3xl py-2">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              contact
            </p>

            <h1 className="mt-4 max-w-2xl text-balance text-[2.2rem] font-bold leading-[1.02] md:text-[3rem] xl:text-[3.5rem]">
              Reach out if you want to talk about work, projects, or opportunities.
            </h1>

            <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-white/72 md:text-[1.02rem]">
              If you&apos;re contacting me about internships, freelance work, a
              collaboration, or just something you saw on the site, this is the best
              place to do it.
            </p>

            <div className="mt-7 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-3">
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                  response time
                </p>
                <p className="mt-3 text-base font-semibold text-white">Usually within 48 hours</p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                  best for
                </p>
                <p className="mt-3 text-base font-semibold text-white">Internships and freelance work</p>
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                  location
                </p>
                <p className="mt-3 text-base font-semibold text-white">Elmhurst, Illinois</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] bg-black/30">
            <div className="relative aspect-[32/21] overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.32),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.24),transparent_28%),linear-gradient(135deg,rgba(6,8,15,0.85),rgba(14,24,32,0.55))]" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 md:p-6">
              <div>
                <p className="text-sm font-medium text-white/70">Best contact method</p>
                <p className="mt-1 text-lg font-semibold text-white">Email or LinkedIn</p>
              </div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">
                open to opportunities
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} py-10 md:py-14`} {...sectionTransition(0.08)}>
        <div className={`${frameClass} grid gap-12 lg:grid-cols-[1.02fr_0.98fr]`}>
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              message
            </p>
            <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold md:text-[2.2rem]">
              Send me a message.
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 border-t border-white/10 pt-6 space-y-6">
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
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? getErrorId('name') : undefined}
                />
                {errors.name && (
                  <p id={getErrorId('name')} className="mt-2 text-sm text-red-400">
                    {errors.name}
                  </p>
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
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? getErrorId('email') : undefined}
                />
                {errors.email && (
                  <p id={getErrorId('email')} className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

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
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? getErrorId('subject') : undefined}
                />
                {errors.subject && (
                  <p id={getErrorId('subject')} className="mt-2 text-sm text-red-400">
                    {errors.subject}
                  </p>
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
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? getErrorId('message') : undefined}
                />
                {errors.message && (
                  <p id={getErrorId('message')} className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

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

          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
              elsewhere
            </p>
            <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold md:text-[2.2rem]">
              You can also find me here.
            </h2>

            <div className="mt-8 border-t border-white/10">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <div
                    key={link.title}
                    className="grid gap-4 border-b border-white/10 py-5 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center"
                  >
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                      <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                      <span>{link.title}</span>
                    </h3>

                    <p className="text-white/65">{link.description}</p>

                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-lift inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-2.5 font-medium text-cyan-200 transition-all duration-200 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    >
                      {link.cta}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage
