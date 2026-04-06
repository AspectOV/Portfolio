import type { MetadataRoute } from 'next'

const routes = ['', '/about', '/projects', '/portfolio', '/contact', '/privacy-policy']

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jeremymhayes.com'

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
