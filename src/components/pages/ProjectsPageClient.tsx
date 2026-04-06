'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

import type { ProjectCategory } from '@/content/siteContent'
import { projects } from '@/content/siteContent'

type ProjectFilter = 'all' | ProjectCategory

interface FilterOption {
  id: ProjectFilter
  label: string
}

const sectionTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
})

const filters: FilterOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'game-dev', label: 'Game Development' },
  { id: 'web-dev', label: 'Web Development' },
  { id: 'software-dev', label: 'Software Development' },
  { id: 'full-stack', label: 'Full Stack' },
]

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="space-y-14 md:space-y-20">
      <motion.section
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm md:p-8"
        {...sectionTransition(0)}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Projects
        </p>

        <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
          Selected work across games, software, and web development.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          A collection of projects that reflect my interests in interactive design,
          gameplay systems, modern web development, and practical software engineering.
        </p>
      </motion.section>

      <motion.section
        className="rounded-3xl border border-cyan-300/15 bg-cyan-500/[0.04] p-6 md:p-8"
        {...sectionTransition(0.08)}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2>Filter Projects</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Browse projects by category to focus on the type of work you want to see.
            </p>
          </div>

          <div className="text-sm text-white/55">
            {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3" role="tablist" aria-label="Project filters">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                role="tab"
                id={`filter-${filter.id}`}
                aria-controls="project-results"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                className={[
                  'interactive-lift inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80',
                  isActive
                    ? 'bg-cyan-400 text-black shadow-[0_10px_30px_rgba(34,211,238,0.18)]'
                    : 'border border-white/15 bg-white/5 text-white/75 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white',
                ].join(' ')}
              >
                {filter.label}
              </button>
            )
          })}
        </div>
      </motion.section>

      <motion.section {...sectionTransition(0.14)}>
        {filteredProjects.length > 0 ? (
          <div id="project-results" className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} priority={index === 0} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center" role="status">
            <h3 className="text-xl font-semibold text-white">No projects found</h3>
            <p className="mt-3 text-white/65">
              There are no projects in this category yet.
            </p>
          </div>
        )}
      </motion.section>
    </div>
  )
}

export default ProjectsPage
