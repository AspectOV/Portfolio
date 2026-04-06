import type { Metadata } from 'next'
import ProjectsPageClient from '@/components/pages/ProjectsPageClient'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse Jeremy Hayes projects across game development, web applications, and software engineering.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Jeremy Hayes',
    description: 'Selected projects across game-dev, web-dev, and software engineering.',
    url: '/projects',
  },
  twitter: {
    title: 'Projects | Jeremy Hayes',
    description: 'Explore Jeremy Hayes project archive and featured work.',
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
