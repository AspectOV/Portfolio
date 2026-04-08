'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PolicySection {
  title: string
  content?: string[]
  items?: { label?: string; text: string }[]
}

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay },
})

const policySections: PolicySection[] = [
  {
    title: 'Information I Collect',
    content: [
      'When you use this website, I may collect limited information depending on how you interact with it.',
    ],
    items: [
      {
        label: 'Contact Information',
        text: 'If you use the contact form, I may collect your name, email address, subject line, and message content.',
      },
      {
        label: 'Usage Data',
        text: 'I may collect basic analytics or usage information such as pages visited, approximate time on site, and general interaction patterns.',
      },
    ],
  },
  {
    title: 'How I Use Information',
    content: ['Information collected through this site may be used to:'],
    items: [
      { text: 'Respond to messages, questions, or inquiries.' },
      { text: 'Improve site content, usability, and performance.' },
      { text: 'Monitor basic traffic and site behavior.' },
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'I do not sell your personal information. I may only share information when reasonably necessary in limited situations, such as:',
    ],
    items: [
      { text: 'With your consent.' },
      { text: 'To comply with legal obligations.' },
      { text: 'To protect the security, rights, or operation of this website.' },
    ],
  },
  {
    title: 'Data Security',
    content: [
      'Reasonable measures may be used to protect information submitted through this website. However, no internet transmission or storage system can be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'Your Choices',
    content: ['Depending on the data involved, you may be able to:'],
    items: [
      { text: 'Request access to information you submitted.' },
      { text: 'Request corrections to inaccurate information.' },
      { text: 'Request deletion of submitted information, when applicable.' },
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      'This website may use third-party tools, services, embeds, hosting providers, or links to external platforms. Those services may handle data according to their own privacy policies.',
    ],
  },
  {
    title: 'Policy Updates',
    content: [
      'This privacy policy may be updated from time to time to reflect changes to the site, its features, or its data practices. The latest version will always be shown on this page.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'If you have questions about this privacy policy or how information is handled, please contact me through the contact page on this website.',
    ],
  },
]

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-10 md:space-y-12">
      <motion.section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm md:p-8"
        {...sectionTransition(0)}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Legal
        </p>

        <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 max-w-3xl text-base text-white/72 md:text-lg">
          This page explains what information may be collected through this
          website, how it may be used, and the choices available to visitors.
        </p>

        <p className="mt-4 text-sm text-white/50">Last updated: April 7, 2026</p>
      </motion.section>

      {policySections.map((section, index) => (
        <motion.section
          key={section.title}
          className="rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-8"
          {...sectionTransition(0.06 * (index + 1))}
        >
          <h2>{section.title}</h2>

          {section.content?.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-3xl leading-8 text-white/70">
              {paragraph}
            </p>
          ))}

          {section.items && (
            <ul className="mt-5 list-none p-0">
              {section.items.map((item) => (
                <li
                  key={`${section.title}-${item.text}`}
                  className="relative border-b border-white/10 py-4 pl-8 text-white/70 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"
                >
                  {item.label ? (
                    <>
                      <strong className="font-semibold text-white">{item.label}:</strong>{' '}
                      {item.text}
                    </>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      ))}
    </div>
  )
}

export default PrivacyPolicyPage
