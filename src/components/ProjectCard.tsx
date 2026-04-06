'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link: string
  index: number
}

const formatCategory = (category: string) => {
  switch (category) {
    case 'game-dev':
      return 'Game Development'
    case 'web-dev':
      return 'Web Development'
    case 'software-dev':
      return 'Software Development'
    default:
      return category
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  tags,
  link,
  index,
}) => {
  return (
    <motion.article
      data-category={category}
      className="group interactive-lift flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20 transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.05] focus-within:border-cyan-300/30 focus-within:shadow-[0_16px_40px_rgba(34,211,238,0.14)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={index < 2}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">
            {formatCategory(category)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/68 md:text-base">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={link}
            aria-label={`View details for ${title}`}
            className="interactive-lift inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black shadow-sm transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
          >
            <span>View Details</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
