import type { Metadata } from 'next'
import ProjectsPageClient from '@/components/pages/ProjectsPageClient'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse Jeremy Hayes case studies across gameplay systems, secure desktop software, and modern web products.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Jeremy Hayes',
    description:
      'Project archive and case studies across software, web, and gameplay systems.',
    url: '/projects',
  },
  twitter: {
    title: 'Projects | Jeremy Hayes',
    description:
      'Explore Jeremy Hayes project archive, featured work, and individual case studies.',
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
