export type ProjectCategory = 'game-dev' | 'web-dev' | 'software-dev' | 'full-stack'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  tags: string[]
  link: string
}

export interface Skill {
  name: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'roblox-game-1',
    title: 'Vacancy Filled',
    description: 'An immersive horror experience inspired by The Closing Shift.',
    image: '/images/roblox-game.jpg',
    category: 'game-dev',
    tags: ['Luau', 'Roblox', 'Horror'],
    link: '#',
  },
  {
    id: 'roblox-game-2',
    title: 'Cookie Clicker',
    description: "A faithful recreation of Orteil's Cookie Clicker in Roblox.",
    image: '/images/roblox-game.jpg',
    category: 'game-dev',
    tags: ['Luau', 'Roblox', 'UI Design'],
    link: '#',
  },
  {
    id: 'web-app-1',
    title: 'Portfolio Website',
    description: 'A responsive portfolio built with modern web technologies and a strong visual system.',
    image: '/images/web-dev-project.png',
    category: 'web-dev',
    tags: ['Next.js', 'Tailwind', 'Responsive'],
    link: '#',
  },
  {
    id: 'full-stack-1',
    title: 'Realtime Creator Dashboard',
    description: 'A full-stack dashboard with live analytics, role-based permissions, and API-backed content workflows.',
    image: '/images/web-dev-project.png',
    category: 'full-stack',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 'software-1',
    title: 'File Encryptor',
    description: 'A Windows desktop application for secure file encryption and compression.',
    image: '/images/unity-game.jpg',
    category: 'software-dev',
    tags: ['C#', 'WPF', 'Desktop App'],
    link: '#',
  },
]

export const featuredProjectIds = ['roblox-game-1', 'software-1', 'web-app-1']

export const skills: Skill[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'C#', icon: 'code' },
  { name: 'Python', icon: 'python' },
  { name: 'Luau (Roblox)', icon: 'code' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Express.js', icon: 'express' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'Cloudflare', icon: 'cloudflare' },
  { name: 'Roblox Studio', icon: 'roblox' },
  { name: 'Unity', icon: 'unity' },
  { name: 'Blender', icon: 'blender' },
  { name: 'REST APIs', icon: 'api' },
  { name: 'Discord Bot Development', icon: 'discord' },
  { name: 'Game Systems Engineering', icon: 'systems' },
  { name: 'Server Administration', icon: 'server' },
]
