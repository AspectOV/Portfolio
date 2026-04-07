'use client'

import React, { useState } from 'react'
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
  priority?: boolean
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
  id,
  title,
  description,
  image,
  category,
  tags,
  link,
  index,
  priority = false,
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <>
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
            loading={priority ? undefined : 'lazy'}
            priority={priority}
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

          <div className="mt-6 flex flex-wrap gap-3">
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

            <button
              type="button"
              onClick={() => setIsOverlayOpen(true)}
              className="interactive-lift inline-flex items-center rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-200 transition-all duration-200 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              Open Expanded View
            </button>
          </div>
        </div>
      </motion.article>

      {isOverlayOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-overlay-title-${id}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-8"
        >
          <div className="relative h-[92vh] w-[min(96vw,1180px)] overflow-y-auto rounded-3xl border border-cyan-300/25 bg-[#08131a] p-6 shadow-2xl shadow-cyan-500/10 md:p-10">
            <button
              type="button"
              onClick={() => setIsOverlayOpen(false)}
              className="sticky top-0 ml-auto inline-flex rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-300/45 hover:text-cyan-200"
            >
              Close ✕
            </button>

            <h3
              id={`project-overlay-title-${id}`}
              className="mt-2 text-3xl font-bold text-white md:text-4xl"
            >
              {title} • Expanded Project View
            </h3>

            <p className="mt-4 max-w-4xl text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <p className="mt-3 max-w-4xl text-white/75">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10">
                <Image src={image} alt={`${title} preview small`} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 md:h-72">
                <Image src={image} alt={`${title} preview medium`} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 md:col-span-2 md:h-[24rem]">
                <Image src={image} alt={`${title} preview large`} fill sizes="95vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
