'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { projects } from '@/content/siteContent'

const portfolioItems = projects.filter((project) => project.category !== 'full-stack')

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
})

const formatCategory = (category: string) => {
  switch (category) {
    case 'web-dev':
      return 'Web Development'
    case 'game-dev':
      return 'Game Development'
    case 'software-dev':
      return 'Software Development'
    default:
      return category
  }
}

const PortfolioPage: React.FC = () => {
  return (
    <div className="space-y-14 md:space-y-20">
      <motion.section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm md:p-8"
        {...sectionTransition(0)}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Portfolio
        </p>

        <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
          A visual showcase of selected work.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          A curated gallery of projects across web development, game development,
          and software engineering.
        </p>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-8"
        {...sectionTransition(0.08)}
      >
        <h2>Portfolio Gallery</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Selected builds that reflect my focus on design quality, usability, and technical execution.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="group interactive-lift overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20 transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading={index === 0 ? undefined : 'lazy'}
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-cyan-300/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">
                    {formatCategory(item.category)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/68 md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default PortfolioPage
