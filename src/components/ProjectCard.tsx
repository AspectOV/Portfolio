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

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image, category, tags, link, index }) => {
  return (
    <motion.div
      className="bg-bg-tertiary rounded-lg overflow-hidden border border-border transition-all group"
      data-category={category}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={image}
          alt={`Image of ${title} Project`}
          width={400}
          height={225}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex gap-4">
            <a href={`#project-details-${id}`} className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full transition-all hover:bg-accent-hover hover:scale-110" aria-label="View project details">
              <i className="fas fa-info-circle"></i>
            </a>
            <a href={`#project-demo-${id}`} className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full transition-all hover:bg-accent-hover hover:scale-110" aria-label="View project demo">
              <i className="fas fa-play-circle"></i>
            </a>
            <a href={`#project-code-${id}`} className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full transition-all hover:bg-accent-hover hover:scale-110" aria-label="View project code">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3>
          <i className={`fas fa-${category === 'game-dev' ? 'gamepad' : category === 'web-dev' ? 'globe' : 'code'}`}></i>
          {title}
        </h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30">{tag}</span>
          ))}
        </div>
        <Link href={link} className="inline-flex items-center gap-2 px-6 py-4 bg-accent text-black rounded-md font-semibold transition-all border-none cursor-pointer text-base hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
          {category === 'game-dev' ? 'Project Gallery' : 
           category === 'web-dev' ? 'See Examples' : 'View Portfolio'}
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
