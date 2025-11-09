export const SKILLS = [
  { name: 'CSS', path: '/icons/skills/css.svg' },
  { name: 'Docker', path: '/icons/skills/docker.svg' },
  { name: 'Figma', path: '/icons/skills/figma.svg' },
  { name: 'Firebase', path: '/icons/skills/firebase.svg' },
  { name: 'Git', path: '/icons/skills/git.svg' },
  { name: 'GraphQL', path: '/icons/skills/graphql.svg' },
  { name: 'HTML', path: '/icons/skills/html.svg' },
  { name: 'JavaScript', path: '/icons/skills/javascript.svg' },
  { name: 'Jest', path: '/icons/skills/jest.svg' },
  { name: 'MongoDB', path: '/icons/skills/mongodb.svg' },
  { name: 'NextJS', path: '/icons/skills/nextjs.svg' },
  { name: 'NodeJS', path: '/icons/skills/nodejs.svg' },
  { name: 'NPM', path: '/icons/skills/npm.svg' },
  { name: 'Python', path: '/icons/skills/python.svg' },
  { name: 'React', path: '/icons/skills/react.svg' },
  { name: 'TailwindCSS', path: '/icons/skills/tailwindcss.svg' },
  { name: 'TypeScript', path: '/icons/skills/typescript.svg' },
  { name: 'Vue', path: '/icons/skills/vue.svg' },
] as const

export const PROJECTS = [
  {
    description:
      'Website for the Astarix Trier, a well-known restaurant in Trier, Germany.',
    githubRepoURL: 'https://github.com/astarix-trier/astarix-trier',
    skills: ['Docker', 'NextJS', 'CSS', 'Figma'],
    title: 'astarix-trier',
    websiteUrl: 'https://www.astarix-trier.de/',
  },
  {
    description: 'Generate a contribution graph for your GitHub profile.',
    githubRepoURL: 'https://github.com/mikareich/contribution-graph',
    skills: ['NextJS', 'CSS', 'Git'],
    title: 'contribution-graph',
    websiteUrl: 'https://contribution-graph.vercel.app/',
  },
  {
    description:
      'TypeScript Sudoku Solver using Exact Cover for varied difficulties.',
    githubRepoURL: 'https://github.com/mikareich/sudoku',
    skills: ['NPM', 'TypeScript', 'Jest'],
    title: 'sudoku-solver',
  },
  {
    description:
      'A quick, easy solution for transforming long URLs into short, sharable links.',
    githubRepoURL: 'https://github.com/mikareich/url-dwarf',
    skills: ['Docker', 'HTML', 'CSS', 'NodeJS'],
    title: 'url-dwarf',
    websiteUrl: 'https://url-dwarf.vercel.app/',
  },
  {
    description: 'My first bigger game engine with over 50 TypeScript files.',
    githubRepoURL: 'https://github.com/mikareich/poke-mon',
    skills: ['TypeScript', 'NPM', 'CSS', 'Jest'],
    title: 'poke-mon',
  },
  {
    description:
      'Von Neumann architecture Simulator. Inspired by the Johnny Simulator.',
    githubRepoURL: 'https://github.com/mikareich/johnny-js',
    skills: ['TypeScript', 'React', 'CSS'],
    title: 'Johnny JS',
    websiteUrl: 'https://johnny-js.vercel.app/',
  },
  {
    description: 'Portfolio Website for Sen. Scientist Lars Reich',
    githubRepoURL: 'https://github.com/mikareich/lars-reich',
    skills: ['NextJS', 'TailwindCSS', 'Figma'],
    title: 'lars-reich',
    websiteUrl: 'https://lars-reich.vercel.app/',
  },
  {
    description: 'Minesweeper game with a custom game mode.',
    githubRepoURL: 'https://github.com/mikareich/minesweeper',
    skills: ['TypeScript', 'HTML', 'CSS'],
    title: 'minesweeper',
    websiteUrl: 'https://minesweeper-opal-eight.vercel.app/',
  },
  {
    description: 'Determines the location of a stronghold in Minecraft.',
    githubRepoURL: 'https://github.com/mikareich/stronghold-location',
    skills: ['TypeScript', 'React', 'TailwindCSS', 'MongoDB'],
    title: 'stronghold-location',
    websiteUrl: 'https://stronghold-location.vercel.app/',
  },
  {
    description: 'Course planner for MSS',
    githubRepoURL: 'https://github.com/mikareich/course-planner',
    skills: ['TypeScript', 'React', 'CSS'],
    title: 'course-planner',
    websiteUrl: 'https://course-planner.mikareich.studio/leistungskurse',
  },
] as const

export const SOCIALS = {
  discord: 'https://discordapp.com/users/708739192678514780',
  email: 'mikareich0@gmail.com',
  github: 'https://github.com/mikareich',
} as const

export const PAGES = [
  { filename: 'about-me.mdx', slug: '/' },
  { filename: 'blog.mdx', slug: '/blog' },
  { filename: 'error.mdx', slug: '/error' },
  { filename: 'not-found.mdx', slug: '/not-found' },
  { filename: 'projects.mdx', slug: '/projects' },
] as const

export const POSTS = [
  { filename: 'unofficial-valorant-api.mdx', slug: '/unofficial-valorant-api' },
] as const
