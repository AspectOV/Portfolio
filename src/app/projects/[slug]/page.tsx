import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import {
  categoryLabels,
  getProjectBySlug,
  getProjectHref,
  projects,
} from '@/content/siteContent'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

const bleedClass =
  'relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-8'

const frameClass = 'mx-auto max-w-[1380px]'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: getProjectHref(project.slug),
    },
    openGraph: {
      title: `${project.title} | Jeremy Hayes`,
      description: project.description,
      url: getProjectHref(project.slug),
      images: [project.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Jeremy Hayes`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex(
    (candidate) => candidate.slug === project.slug
  )

  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://jeremymhayes.com${getProjectHref(project.slug)}`,
    author: {
      '@type': 'Person',
      name: 'Jeremy M. Hayes',
    },
    dateModified: project.updatedAt,
    keywords: project.tags,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="space-y-0">
        <section className={`${bleedClass} pt-0`}>
          <div className={`${frameClass} border-b border-white/10 pb-8 md:pb-10`}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors duration-200 hover:text-cyan-100"
            >
              <span aria-hidden="true">←</span>
              Back to projects
            </Link>

            <div className="mt-6 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {categoryLabels[project.category]}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {project.status}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {project.year}
                  </span>
                </div>

                <h1 className="mt-5 max-w-3xl text-balance text-[2.2rem] font-bold leading-[1.02] md:text-[3rem] xl:text-[3.5rem]">
                  {project.title}
                </h1>

                <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-white/72 md:text-[1.02rem]">
                  {project.tagline}
                </p>

                <p className="mt-4 max-w-2xl border-l border-cyan-300/30 pl-4 text-sm leading-7 text-cyan-100/85">
                  {project.impact}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
                  >
                    Discuss Similar Work
                  </Link>

                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
                  <div>
                    <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                      role
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">{project.role}</p>
                  </div>
                  <div>
                    <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                      team size
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">{project.teamSize}</p>
                  </div>
                  <div>
                    <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-cyan-200/75">
                      updated
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">{project.updatedAt}</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.25rem] bg-black/30">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${bleedClass} py-10 md:py-14`}>
          <div className={`${frameClass} grid gap-12 lg:grid-cols-[0.78fr_1.22fr]`}>
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                overview
              </p>
              <h2 className="mt-4 max-w-md text-[1.75rem] font-bold md:text-[2.2rem]">
                What the project is and why it mattered.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="max-w-3xl leading-8 text-white/70">{project.summary}</p>

              <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div key={highlight.label} className="border-t border-white/10 pt-5">
                    <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/40">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {highlight.label}
                    </h3>
                    <p className="mt-2 text-white/68">{highlight.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${bleedClass} border-y border-white/10 bg-black/15 py-10 md:py-14`}
        >
          <div className={`${frameClass} grid gap-10 lg:grid-cols-[1fr_1fr]`}>
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                problem
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="max-w-3xl leading-8 text-white/70">{project.problem}</p>
              </div>
            </div>

            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                role
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="max-w-3xl leading-8 text-white/70">{project.roleSummary}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${bleedClass} py-10 md:py-14`}>
          <div className={`${frameClass} grid gap-10 lg:grid-cols-[0.74fr_1.26fr]`}>
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                build details
              </p>
              <h2 className="mt-4 max-w-md text-[1.75rem] font-bold md:text-[2.2rem]">
                Stack, constraints, and decisions.
              </h2>
            </div>

            <div className="grid gap-10">
              <div className="border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold text-white">Stack</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold text-white">Constraints</h3>
                <ul className="mt-5 list-none p-0">
                  {project.constraints.map((constraint) => (
                    <li
                      key={constraint}
                      className="relative border-b border-white/10 py-4 pl-8 text-white/72 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"
                    >
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold text-white">Decisions Made</h3>
                <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
                  {project.decisions.map((decision, index) => (
                    <div key={decision.title} className="border-t border-white/10 pt-5">
                      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/40">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h4 className="mt-3 text-lg font-semibold text-white">
                        {decision.title}
                      </h4>
                      <p className="mt-3 leading-7 text-white/68">
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${bleedClass} border-y border-white/10 bg-black/15 py-10 md:py-14`}
        >
          <div className={`${frameClass} grid gap-10 lg:grid-cols-[0.7fr_1.3fr]`}>
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                outcome
              </p>
              <h2 className="mt-4 max-w-md text-[1.75rem] font-bold md:text-[2.2rem]">
                What came out of it.
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              <div className="border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold text-white">Outcome</h3>
                <ul className="mt-5 list-none p-0">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="relative border-b border-white/10 py-4 pl-8 text-white/72 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold text-white">Lessons</h3>
                <ul className="mt-5 list-none p-0">
                  {project.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="relative border-b border-white/10 py-4 pl-8 text-white/72 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-5">
                <h3 className="text-xl font-semibold text-white">Next</h3>
                <ul className="mt-5 list-none p-0">
                  {project.nextSteps.map((step) => (
                    <li
                      key={step}
                      className="relative border-b border-white/10 py-4 pl-8 text-white/72 last:border-b-0 before:absolute before:left-0 before:top-4 before:text-cyan-300 before:content-['▸']"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`${bleedClass} py-10 md:py-14`}>
          <div className={`${frameClass} flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between`}>
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                keep browsing
              </p>
              <p className="mt-4 max-w-2xl text-white/70">
                Keep moving through the archive or reach out if you want to talk
                through similar work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={getProjectHref(previousProject.slug)}
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
              >
                Previous: {previousProject.title}
              </Link>

              <Link
                href={getProjectHref(nextProject.slug)}
                className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-all duration-200 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90"
              >
                Next: {nextProject.title}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
