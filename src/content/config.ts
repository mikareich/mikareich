export const SKILLS = [
  { name: "CSS", path: "/icons/skills/css.svg" },
  { name: "Docker", path: "/icons/skills/docker.svg" },
  { name: "Figma", path: "/icons/skills/figma.svg" },
  { name: "Firebase", path: "/icons/skills/firebase.svg" },
  { name: "Git", path: "/icons/skills/git.svg" },
  { name: "GraphQL", path: "/icons/skills/graphql.svg" },
  { name: "HTML", path: "/icons/skills/html.svg" },
  { name: "JavaScript", path: "/icons/skills/javascript.svg" },
  { name: "Jest", path: "/icons/skills/jest.svg" },
  { name: "MongoDB", path: "/icons/skills/mongodb.svg" },
  { name: "NextJS", path: "/icons/skills/nextjs.svg" },
  { name: "NodeJS", path: "/icons/skills/nodejs.svg" },
  { name: "NPM", path: "/icons/skills/npm.svg" },
  { name: "Python", path: "/icons/skills/python.svg" },
  { name: "React", path: "/icons/skills/react.svg" },
  { name: "TailwindCSS", path: "/icons/skills/tailwindcss.svg" },
  { name: "TypeScript", path: "/icons/skills/typescript.svg" },
  { name: "Vue", path: "/icons/skills/vue.svg" },
] as const;

export const PROJECTS = [
  {
    title: "astarix-trier",
    description:
      "Website for the Astarix Trier, a well-known restaurant in Trier, Germany.",
    skills: ["Docker", "NextJS", "CSS", "Figma"],
    githubRepoURL: "https://github.com/astarix-trier/astarix-trier",
    websiteUrl: "https://www.astarix-trier.de/",
  },
  {
    title: "contribution-graph",
    description: "Generate a contribution graph for your GitHub profile.",
    skills: ["NextJS", "CSS", "Git"],
    githubRepoURL: "https://github.com/mikareich/contribution-graph",
    websiteUrl: "https://contribution-graph.vercel.app/",
  },
  {
    title: "sudoku-solver",
    description:
      "TypeScript Sudoku Solver using Exact Cover for varied difficulties.",
    skills: ["NPM", "TypeScript", "Jest"],
    githubRepoURL: "https://github.com/mikareich/sudoku",
  },
  {
    title: "url-dwarf",
    description:
      "A quick, easy solution for transforming long URLs into short, sharable links.",
    skills: ["Docker", "HTML", "CSS", "NodeJS"],
    githubRepoURL: "https://github.com/mikareich/url-dwarf",
    websiteUrl: "https://url-dwarf.vercel.app/",
  },
  {
    title: "poke-mon",
    description: "My first bigger game engine with over 50 TypeScript files.",
    skills: ["TypeScript", "NPM", "CSS", "Jest"],
    githubRepoURL: "https://github.com/mikareich/poke-mon",
  },
  {
    title: "Johnny JS",
    description:
      "Von Neumann architecture Simulator. Inspired by the Johnny Simulator.",
    skills: ["TypeScript", "React", "CSS"],
    githubRepoURL: "https://github.com/mikareich/johnny-js",
    websiteUrl: "https://johnny-js.vercel.app/",
  },
  {
    title: "lars-reich",
    description: "Portfolio Website for Sen. Scientist Lars Reich",
    skills: ["NextJS", "TailwindCSS", "Figma"],
    githubRepoURL: "https://github.com/mikareich/lars-reich",
    websiteUrl: "https://lars-reich.vercel.app/",
  },
  {
    title: "minesweeper",
    description: "Minesweeper game with a custom game mode.",
    skills: ["TypeScript", "HTML", "CSS"],
    githubRepoURL: "https://github.com/mikareich/minesweeper",
    websiteUrl: "https://minesweeper-opal-eight.vercel.app/",
  },
  {
    title: "stronghold-location",
    description: "Determines the location of a stronghold in Minecraft.",
    skills: ["TypeScript", "React", "TailwindCSS", "MongoDB"],
    githubRepoURL: "https://github.com/mikareich/stronghold-location",
    websiteUrl: "https://stronghold-location.vercel.app/",
  },
  {
    title: "course-planner",
    description: "Course planner for MSS",
    skills: ["TypeScript", "React", "CSS"],
    githubRepoURL: "https://github.com/mikareich/course-planner",
    websiteUrl: "https://course-planner.mikareich.studio/leistungskurse",
  },
] as const;

export const SOCIALS = {
  email: "mikareich0@gmail.com",
  github: "https://github.com/mikareich",
  discord: "https://discordapp.com/users/708739192678514780",
} as const;

export const PAGES = [
  { slug: "/", filename: "about-me.mdx" },
  { slug: "/blog", filename: "blog.mdx" },
  { slug: "/error", filename: "error.mdx" },
  { slug: "/not-found", filename: "not-found.mdx" },
  { slug: "/projects", filename: "projects.mdx" },
] as const;

export const POSTS = [
  { slug: "/unofficial-valorant-api", filename: "unofficial-valorant-api.mdx" },
] as const;
