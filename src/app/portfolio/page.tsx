import type { Metadata } from 'next'
import PortfolioPageClient from '@/components/pages/PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Portfolio Gallery',
  description:
    'Visual gallery of selected projects by Jeremy Hayes across web development, game development, and software.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio Gallery | Jeremy Hayes',
    description: 'A visual showcase of Jeremy Hayes projects and builds.',
    url: '/portfolio',
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
