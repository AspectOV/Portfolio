import type { MetadataRoute } from 'next'

import { getProjectHref, projects } from '@/content/siteContent'

const baseUrl = 'https://jeremymhayes.com'

const staticRoutes = [
  { route: '', lastModified: '2026-04-07', changeFrequency: 'weekly', priority: 1 },
  { route: '/about', lastModified: '2026-04-07', changeFrequency: 'monthly', priority: 0.8 },
  { route: '/projects', lastModified: '2026-04-07', changeFrequency: 'weekly', priority: 0.9 },
  { route: '/contact', lastModified: '2026-03-12', changeFrequency: 'monthly', priority: 0.7 },
  {
    route: '/privacy-policy',
    lastModified: '2026-04-07',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
] as const

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((entry) => ({
      url: `${baseUrl}${entry.route}`,
      lastModified: entry.lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}${getProjectHref(project.slug)}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.85 : 0.75,
    })),
  ]
}
