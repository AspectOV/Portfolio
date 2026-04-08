'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import type { Project } from '@/content/siteContent'
import { categoryLabels, getProjectHref } from '@/content/siteContent'

interface ProjectFeatureProps {
  project: Project
  index: number
  priority?: boolean
  variant?: 'spotlight' | 'archive'
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({
  project,
  index,
  priority = false,
  variant = 'spotlight',
}) => {
  const isReversed = index % 2 === 1
  const primaryLink = getProjectHref(project.slug)
  const secondaryLink = project.links[0]

  return (
    <motion.article
      className={[
        'grid gap-5 border-t border-white/10 pt-8 md:gap-7 lg:grid-cols-12 lg:items-end lg:pt-10',
        variant === 'spotlight' ? 'first:border-t-0 first:pt-0' : '',
      ].join(' ')}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <div
        className={[
          'lg:col-span-8',
          isReversed ? 'lg:order-2' : '',
        ].join(' ')}
      >
        <Link
          href={primaryLink}
          aria-label={`Read the case study for ${project.title}`}
          className="group block"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-black/30">
            <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                {project.year}
              </span>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-sm">
                {categoryLabels[project.category]}
              </span>
              <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                {project.status}
              </span>
            </div>

            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={priority}
                loading={priority ? undefined : 'lazy'}
                sizes={
                  variant === 'archive'
                    ? '(max-width: 1024px) 100vw, 60vw'
                    : '(max-width: 1024px) 100vw, 55vw'
                }
                className="object-cover scale-[1.08] transition-transform duration-700 group-hover:scale-[1.12]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 md:p-6">
              <div>
                <p className="text-sm font-medium text-white/70">{project.role}</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {project.teamSize}
                </p>
              </div>

              <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-cyan-100/85">
                open case study
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={[
          'lg:col-span-4',
          isReversed ? 'lg:order-1' : '',
        ].join(' ')}
      >
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.22em] text-cyan-200/80">
          {categoryLabels[project.category]}
        </p>

        <h3 className="mt-4 text-[1.55rem] font-bold tracking-tight text-white md:text-[2rem]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
          {project.description}
        </p>

        <p className="mt-5 max-w-xl border-l border-cyan-300/30 pl-4 text-sm leading-7 text-cyan-100/85">
          {project.impact}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={primaryLink}
            className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
          >
            Read Case Study
          </Link>

          {secondaryLink ? (
            <a
              href={secondaryLink.href}
              target={secondaryLink.external ? '_blank' : undefined}
              rel={secondaryLink.external ? 'noopener noreferrer' : undefined}
              className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              {secondaryLink.label}
            </a>
          ) : (
            <span className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm text-white/55">
              Private work
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectFeature
