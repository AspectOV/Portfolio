import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const workspaceRoot = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  output: 'export',
  outputFileTracingRoot: workspaceRoot,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  turbopack: {
    root: workspaceRoot,
  },
}

export default nextConfig
