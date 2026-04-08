export type ProjectCategory = 'game-dev' | 'web-dev' | 'software-dev'

export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface ProjectDecision {
  title: string
  description: string
}

export interface ProjectHighlight {
  label: string
  value: string
}

export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  category: ProjectCategory
  tags: string[]
  year: string
  role: string
  teamSize: string
  status: string
  featured: boolean
  impact: string
  summary: string
  problem: string
  roleSummary: string
  stack: string[]
  constraints: string[]
  decisions: ProjectDecision[]
  outcomes: string[]
  lessons: string[]
  nextSteps: string[]
  highlights: ProjectHighlight[]
  links: ProjectLink[]
  updatedAt: string
}

export interface Skill {
  name: string
  icon: string
}

export interface FocusItem {
  label: string
  value: string
  detail: string
}

export interface ImpactItem {
  title: string
  text: string
}

export const categoryLabels: Record<ProjectCategory, string> = {
  'game-dev': 'Game Development',
  'web-dev': 'Web Development',
  'software-dev': 'Software Development',
}

export const projects: Project[] = [
  {
    id: 'vacancy-filled',
    slug: 'vacancy-filled',
    title: 'Vacancy Filled',
    tagline: 'Freelance Roblox horror work centered on pacing, interaction, and atmosphere.',
    description:
      'A private Roblox horror collaboration inspired by late-night tension and slow-burn environmental storytelling.',
    image: '/images/roblox-game.jpg',
    category: 'game-dev',
    tags: ['Luau', 'Roblox Studio', 'Gameplay Systems', 'Horror'],
    year: '2025',
    role: 'Gameplay Scripter & Systems Collaborator',
    teamSize: 'Small team',
    status: 'Private collaboration',
    featured: true,
    impact:
      'Connected gameplay systems, tightened interaction flow, and helped turn scattered mechanics into a more cohesive playable build.',
    summary:
      'Vacancy Filled is a Roblox horror experience built around tension, timing, and environmental storytelling. My contribution focused on making the underlying gameplay systems dependable enough to support the atmosphere instead of fighting it.',
    problem:
      'Horror projects lose their effect quickly when interactions are inconsistent or progression logic breaks tension. The goal was to support a moody experience with systems that felt stable, reusable, and easy for the team to keep extending.',
    roleSummary:
      'I handled gameplay scripting, systems integration, and technical cleanup across shared mechanics. That included connecting independently built features, standardizing how interactions behaved, and supporting the overall gameplay loop as the project evolved.',
    stack: ['Luau', 'Roblox Studio', 'Client/server remotes', 'Reusable gameplay modules'],
    constraints: [
      'The project was collaborative, so new systems had to fit work built by other contributors.',
      'Roblox performance constraints meant keeping logic lean and predictable.',
      'Atmosphere-first pacing required interactions to feel deliberate instead of over-scripted.',
    ],
    decisions: [
      {
        title: 'Modularize repeatable interactions',
        description:
          'I favored reusable interaction patterns instead of one-off scripts so doors, prompts, and progression beats could share the same logic foundation.',
      },
      {
        title: 'Treat tension as a systems problem',
        description:
          'Scares only land when triggers, timing, and state changes stay reliable, so the implementation emphasized stable handoffs between mechanics.',
      },
      {
        title: 'Optimize for future content drops',
        description:
          'The scripting approach aimed to make follow-up scenes and polish passes easier to add without reworking core systems.',
      },
    ],
    outcomes: [
      'Delivered a clearer gameplay flow that better supported the project’s horror pacing.',
      'Reduced friction between independently built mechanics by integrating them into shared systems.',
      'Left behind reusable scripting patterns that made future iteration easier for the team.',
    ],
    lessons: [
      'Atmosphere depends on reliability just as much as art or audio direction.',
      'Reusable systems are especially valuable on collaborative Roblox projects.',
      'Playtesting is the fastest way to spot pacing issues that are hard to see in code alone.',
    ],
    nextSteps: [
      'Expand progression QA around edge cases and late-scene transitions.',
      'Add more tooling for fast playtest iteration and tuning.',
      'Continue polishing encounter timing, onboarding, and environmental feedback.',
    ],
    highlights: [
      { label: 'Focus', value: 'Tension-driven interaction flow' },
      { label: 'Contribution', value: 'Reusable Luau systems' },
      { label: 'Availability', value: 'Private case study' },
    ],
    links: [],
    updatedAt: '2026-04-07',
  },
  {
    id: 'portfolio-site',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'A case-study driven portfolio built to communicate proof, focus, and availability faster.',
    description:
      'The website you are reading now: a responsive portfolio built with Next.js, TypeScript, and a stronger content model.',
    image: '/images/web-dev-project.png',
    category: 'web-dev',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
    year: '2026',
    role: 'Designer & Full-Stack Web Developer',
    teamSize: 'Solo build',
    status: 'Live site',
    featured: true,
    impact:
      'Turned a broad, portfolio-template feel into a site with clearer positioning, real project proof, and lower-friction contact paths.',
    summary:
      'This project started as a clean portfolio foundation, but it needed stronger positioning and better proof. The rebuild focused on case studies, richer metadata, more intentional route structure, and clearer recruiter/client messaging.',
    problem:
      'The original site had good visuals and working infrastructure, but it still felt broad. Placeholder content, overlapping routes, and generic calls-to-action made it harder for visitors to quickly understand what kind of work I do best.',
    roleSummary:
      'I designed and built the site end to end, from the App Router structure and content model to the UI system, project archive, protected contact flow, and metadata setup.',
    stack: [
      'Next.js App Router',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Cloudflare Turnstile',
    ],
    constraints: [
      'The site needed to stay fast and maintainable while becoming more content-rich.',
      'Project data had to work across cards, archive views, metadata, and detail pages.',
      'The contact experience needed to remain simple while still filtering out spam.',
    ],
    decisions: [
      {
        title: 'Move from placeholder cards to real case studies',
        description:
          'I introduced a richer project model so the homepage, archive, sitemap, and detail pages all draw from the same structured content.',
      },
      {
        title: 'Simplify the route story',
        description:
          'Instead of splitting attention between overlapping archive routes, the navigation now points visitors toward a single projects hub and individual case studies.',
      },
      {
        title: 'Replace decorative CTAs with intent-driven ones',
        description:
          'The homepage now emphasizes current focus, availability, and a direct invitation to start a conversation rather than a placeholder newsletter flow.',
      },
    ],
    outcomes: [
      'Added individual project pages with consistent case-study sections.',
      'Improved homepage positioning around secure software, modern web apps, and gameplay systems.',
      'Kept contact protection in place with a Turnstile-backed submission flow.',
    ],
    lessons: [
      'A portfolio feels stronger when it proves thinking, not just polish.',
      'Information architecture matters as much as visuals once a site has real depth.',
      'Structured content makes metadata, navigation, and future maintenance much easier.',
    ],
    nextSteps: [
      'Add stronger social proof and a more intentional contact intake flow.',
      'Expand the notes/build-log portion of the site.',
      'Continue adding richer visuals and dedicated Open Graph images for top case studies.',
    ],
    highlights: [
      { label: 'Audience', value: 'Recruiters, clients, collaborators' },
      { label: 'Focus', value: 'Proof-first project storytelling' },
      { label: 'Shipping', value: 'Live on jeremymhayes.com' },
    ],
    links: [
      { label: 'Visit live site', href: 'https://jeremymhayes.com', external: true },
      { label: 'View source', href: 'https://github.com/AspectOV/Portfolio', external: true },
    ],
    updatedAt: '2026-04-07',
  },
  {
    id: 'filelocker',
    slug: 'filelocker',
    title: 'FileLocker',
    tagline: 'A Windows encryption tool designed to make strong security feel approachable.',
    description:
      'A WinUI 3 desktop app that uses AES-256-GCM, metadata stripping, compression, and optional steganography to protect files and folders.',
    image: '/images/unity-game.jpg',
    category: 'software-dev',
    tags: ['C#', 'WinUI 3', 'AES-256-GCM', 'Desktop Security'],
    year: '2025',
    role: 'Solo Developer',
    teamSize: 'Solo build',
    status: 'Shipped desktop app',
    featured: true,
    impact:
      'Combined strong encryption primitives with a drag-and-drop desktop workflow so the security model stayed usable instead of intimidating.',
    summary:
      'FileLocker is a Windows application built around secure file and folder protection. The goal was to pair modern cryptography with a workflow that feels understandable for real users, not only technical ones.',
    problem:
      'A lot of security tools are powerful but unfriendly. I wanted to build something that preserved strong encryption choices while making the experience practical for everyday file protection.',
    roleSummary:
      'I built the application as a solo project, shaping the UX, cryptographic workflow, and desktop implementation details around clarity, safety, and a streamlined encryption flow.',
    stack: ['C#', 'WinUI 3', 'Windows App SDK', 'AES-256-GCM', 'Desktop file handling'],
    constraints: [
      'Security-sensitive features needed to be understandable without oversimplifying the underlying risks.',
      'The app had to support both single-file and folder-based workflows.',
      'Metadata exposure and storage overhead both mattered, not just raw encryption.',
    ],
    decisions: [
      {
        title: 'Use authenticated encryption by default',
        description:
          'AES-256-GCM gave the project a strong baseline for confidentiality and integrity instead of treating encryption as a checkbox feature.',
      },
      {
        title: 'Reduce leakage beyond file contents',
        description:
          'Metadata stripping and optional renaming focused on limiting information leaks that many basic tools ignore.',
      },
      {
        title: 'Build around a simple desktop workflow',
        description:
          'Drag-and-drop support, password validation, and folder handling helped the app stay practical instead of feeling like a crypto demo.',
      },
    ],
    outcomes: [
      'Implemented AES-256-GCM encryption for files and folders.',
      'Added password protection, optional password strength validation, and metadata stripping.',
      'Included compression and optional steganography mode as part of the workflow.',
    ],
    lessons: [
      'Security tooling earns trust through both correctness and clarity.',
      'UX details matter even more when users are making irreversible decisions like encryption.',
      'Thinking about metadata and side channels leads to better product choices.',
    ],
    nextSteps: [
      'Add more recovery guidance and guardrails around destructive actions.',
      'Expand automated verification around encryption and restore flows.',
      'Refine release packaging and documentation for easier adoption.',
    ],
    highlights: [
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'UX', value: 'Drag-and-drop file handling' },
      { label: 'Repo', value: 'Public on GitHub' },
    ],
    links: [
      { label: 'View GitHub repo', href: 'https://github.com/AspectOV/FileLocker', external: true },
    ],
    updatedAt: '2026-04-07',
  },
  {
    id: 'privacylens',
    slug: 'privacylens',
    title: 'PrivacyLens',
    tagline: 'A privacy-focused desktop experiment for real-time screen redaction.',
    description:
      'A WinUI 3 desktop application that explores real-time screen capture, detection pipelines, and censor overlays for sensitive content.',
    image: '/images/web-dev-project.png',
    category: 'software-dev',
    tags: ['C#', 'WinUI 3', 'ONNX', 'Computer Vision'],
    year: '2026',
    role: 'Solo Developer',
    teamSize: 'Solo build',
    status: 'Early prototype',
    featured: false,
    impact:
      'Established a modular capture → detection → overlay architecture that can grow into a practical privacy tool instead of a one-off computer vision demo.',
    summary:
      'PrivacyLens explores how to analyze on-screen content in real time and visually redact sensitive areas. The project is early, but the architecture is designed to make experimentation with models, overlays, and capture sources easier over time.',
    problem:
      'Real-time privacy tooling has to balance responsiveness, clarity, and extensibility. I wanted to build a pipeline that could eventually support both pretrained and custom ONNX models without tightly coupling every piece together.',
    roleSummary:
      'I designed the architecture, built the app lifecycle and overlay system, and structured the pipeline so capture, detection, and rendering could evolve independently.',
    stack: ['C#', 'WinUI 3', 'Windows App SDK', 'ONNX Runtime (planned)', 'Real-time overlays'],
    constraints: [
      'The system needs to stay responsive while processing live visual data.',
      'Future model support should not require rewriting the app shell or overlay layer.',
      'The project is still early, so the architecture has to support iteration without premature complexity.',
    ],
    decisions: [
      {
        title: 'Separate capture, detection, and overlay concerns',
        description:
          'Breaking the pipeline into independent layers keeps the project flexible as model support and capture targets evolve.',
      },
      {
        title: 'Ship the visual system before full detection',
        description:
          'Building the overlay window and censor rendering first made it easier to validate the UX side before full inference was wired up.',
      },
      {
        title: 'Design for custom models early',
        description:
          'The project structure anticipates experimentation with both pretrained and user-selected models rather than hardcoding a single path.',
      },
    ],
    outcomes: [
      'Implemented the application lifecycle and overlay window system.',
      'Built dynamic censor-box rendering with test data to validate the UI layer.',
      'Set up a modular service pipeline for later screen capture and inference work.',
    ],
    lessons: [
      'Real-time systems benefit from strong seams between pipeline stages.',
      'Prototype visibility layers early so model work has a clear target.',
      'Privacy tooling needs thoughtful controls, not just a working detector.',
    ],
    nextSteps: [
      'Complete live screen capture integration and ONNX inference.',
      'Add label filtering, confidence thresholds, and multi-monitor support.',
      'Explore blur or pixelation options in addition to solid censor boxes.',
    ],
    highlights: [
      { label: 'Architecture', value: 'Capture -> detection -> overlay' },
      { label: 'Status', value: 'Early but functional shell' },
      { label: 'Direction', value: 'Privacy-focused CV tooling' },
    ],
    links: [
      { label: 'View GitHub repo', href: 'https://github.com/AspectOV/PrivacyLens', external: true },
    ],
    updatedAt: '2026-04-07',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const homeFocusItems: FocusItem[] = [
  {
    label: 'Currently',
    value: 'Publishing stronger case studies and privacy-minded tooling.',
    detail:
      'The current push is making the portfolio prove how I think, not just what I can list.',
  },
  {
    label: 'Available for',
    value: 'Internships, freelance web work, and gameplay systems collaboration.',
    detail:
      'I am especially interested in roles where product quality and systems thinking both matter.',
  },
  {
    label: 'Focused on',
    value: 'Secure software, modern web apps, and scalable game systems.',
    detail:
      'The through-line in my work is building software that stays reliable as complexity increases.',
  },
]

export const selectedImpact: ImpactItem[] = [
  {
    title: 'Roblox systems work',
    text:
      'Built reusable Luau systems and integration support for private collaborator projects instead of one-off scripting.',
  },
  {
    title: 'Security-minded desktop tools',
    text:
      'Shipped FileLocker around AES-256-GCM, metadata stripping, and an easier desktop workflow.',
  },
  {
    title: 'Privacy pipeline experimentation',
    text:
      'Structured PrivacyLens around a modular capture, detection, and overlay pipeline to support future ONNX-based iteration.',
  },
  {
    title: 'Clearer portfolio proof',
    text:
      'Reworked this site around dedicated case studies, stronger messaging, and more intentional visitor paths.',
  },
]

export const aboutNarrative = {
  intro:
    'I got into building software through the same thing that still motivates me now: I like making systems feel understandable. That started with gameplay scripting and experimentation, then expanded into modern web apps, privacy-focused desktop tools, and infrastructure-minded problem solving.',
  bridge:
    'What ties my work together is a systems mindset. Whether I am shaping a Roblox mechanic, building a Next.js product surface, or thinking through secure file handling, I care about the way the parts fit together over time.',
  closing:
    'I am especially interested in the overlap between product quality, technical depth, and maintainability. The best projects, to me, are the ones that feel polished to the user because the underlying engineering is thoughtful.',
}

export const howIWork = [
  'I like turning vague goals into a concrete scope with a clear first ship.',
  'I prefer modular systems that are easy to extend instead of clever one-off implementations.',
  'I care about communication, handoffs, and documentation because good engineering is collaborative.',
  'I try to balance ambition with practicality so the result is both interesting and maintainable.',
]

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

export const getProjectHref = (slug: string) => `/projects/${slug}`

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)
