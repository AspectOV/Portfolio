'use client'

import React, { useDeferredValue, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import ProjectFeature from '@/components/ProjectFeature'
import type { ProjectCategory } from '@/content/siteContent'
import { categoryLabels, projects } from '@/content/siteContent'

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

const bleedClass =
  'relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-8'

const frameClass = 'mx-auto max-w-[1380px]'

const filters: FilterOption[] = [
  { id: 'all', label: 'All Projects' },
  ...Object.entries(categoryLabels).map(([id, label]) => ({
    id: id as ProjectCategory,
    label,
  })),
]

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const deferredQuery = useDeferredValue(searchQuery.trim().toLowerCase())

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === 'all' || project.category === activeFilter

      const haystack = [
        project.title,
        project.description,
        project.role,
        project.status,
        project.impact,
        project.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase()

      const matchesQuery =
        deferredQuery.length === 0 || haystack.includes(deferredQuery)

      return matchesFilter && matchesQuery
    })
  }, [activeFilter, deferredQuery])

  return (
    <div className="space-y-0">
      <motion.section className={`${bleedClass} pt-0`} {...sectionTransition(0)}>
        <div className={`${frameClass} border-b border-white/10 pb-10 md:pb-14`}>
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
            projects archive
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <h1 className="max-w-4xl text-balance text-[2.2rem] font-bold leading-[1.02] md:text-[3rem] xl:text-[3.5rem]">
              This is the organized version of the projects I&apos;ve built.
            </h1>

            <div className="max-w-2xl space-y-4">
              <p className="text-[0.98rem] leading-8 text-white/72 md:text-[1.02rem]">
                Some of these are finished, some are still being improved, and some
                are private collaboration work that I can still explain.
              </p>
              <p className="text-[0.98rem] leading-8 text-white/62 md:text-[1.02rem]">
                You can filter by category, search by keyword, and open the case
                studies when you want the full breakdown.
              </p>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/55">
            {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'}
          </div>

          <div className="mt-8 grid gap-5 border-t border-white/10 pt-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
            <label className="block max-w-xl">
              <span className="mb-2 block text-sm font-medium text-white/75">
                Search projects
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Next.js, encryption, Roblox, systems..."
                className="min-h-12 w-full border-b border-white/15 bg-transparent px-0 py-3 text-white placeholder:text-white/40 transition-all duration-200 focus:border-cyan-300/60 focus:outline-none"
              />
            </label>

            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Project filters">
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
                      'interactive-lift inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80',
                      isActive
                        ? 'bg-cyan-400 text-black'
                        : 'border border-white/15 text-white/75 hover:border-white/30 hover:bg-white/5 hover:text-white',
                    ].join(' ')}
                  >
                    {filter.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className={`${bleedClass} py-12 md:py-16`} {...sectionTransition(0.08)}>
        <div className={frameClass}>
          {filteredProjects.length > 0 ? (
            <div id="project-results" className="space-y-2">
              {filteredProjects.map((project, index) => (
                <ProjectFeature
                  key={project.id}
                  project={project}
                  index={index}
                  priority={index === 0}
                  variant="archive"
                />
              ))}
            </div>
          ) : (
            <div
              className="border-t border-white/10 py-16"
              role="status"
            >
              <h2>No projects found</h2>
              <p className="mt-4 max-w-xl text-white/65">
                Try a broader filter or search for a different keyword.
              </p>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  )
}

export default ProjectsPage
