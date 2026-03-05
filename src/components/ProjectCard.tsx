'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, category, tags, link, index }) => {
  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-xl shadow-black/25 transition-all hover:-translate-y-1 hover:border-cyan-300/35"
      data-category={category}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`Image of ${title} Project`}
          width={400}
          height={225}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-5 text-white/70">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-100">
              {tag}
            </span>
          ))}
        </div>
        <Link href={link} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-black transition-colors hover:bg-cyan-300">
          View Details
          <i className="fas fa-arrow-right text-sm"></i>
        </Link>
      </div>
    </motion.article>
  )
}

export default ProjectCard
