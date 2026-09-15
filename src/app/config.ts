export const SOCIALS = {
  discord: "https://discordapp.com/users/708739192678514780",
  email: "mikareich0@gmail.com",
  github: "https://github.com/mikareich",
} as const;

export const SKILLS = {
  CSS: "/icons/skills/css.svg",
  Docker: "/icons/skills/docker.svg",
  Figma: "/icons/skills/figma.svg",
  Firebase: "/icons/skills/firebase.svg",
  Git: "/icons/skills/git.svg",
  GraphQL: "/icons/skills/graphql.svg",
  HTML: "/icons/skills/html.svg",
  JavaScript: "/icons/skills/javascript.svg",
  Jest: "/icons/skills/jest.svg",
  MongoDB: "/icons/skills/mongodb.svg",
  NextJS: "/icons/skills/nextjs.svg",
  NodeJS: "/icons/skills/nodejs.svg",
  NPM: "/icons/skills/npm.svg",
  Python: "/icons/skills/python.svg",
  React: "/icons/skills/react.svg",
  TailwindCSS: "/icons/skills/tailwindcss.svg",
  TypeScript: "/icons/skills/typescript.svg",
  Vue: "/icons/skills/vue.svg",
} as const;

export const PROJECTS = [
  {
    description:
      "Website for the Astarix Trier, a well-known restaurant in Trier, Germany.",
    githubUrl: "https://github.com/astarix-trier/astarix-trier",
    skills: ["Docker", "NextJS", "CSS", "Figma"],
    title: "astarix-trier",
    appUrl: "https://www.astarix-trier.de/",
  },
  {
    description: "Generate a contribution graph for your GitHub profile.",
    githubUrl: "https://github.com/mikareich/contribution-graph",
    skills: ["NextJS", "CSS", "Git"],
    title: "contribution-graph",
    appUrl: "https://contribution-graph.vercel.app/",
  },
  {
    description:
      "TypeScript Sudoku Solver using Exact Cover for varied difficulties.",
    githubUrl: "https://github.com/mikareich/sudoku",
    skills: ["NPM", "TypeScript", "Jest"],
    title: "sudoku-solver",
  },
  {
    description:
      "A quick, easy solution for transforming long URLs into short, sharable links.",
    githubUrl: "https://github.com/mikareich/url-dwarf",
    skills: ["Docker", "HTML", "CSS", "NodeJS"],
    title: "url-dwarf",
    appUrl: "https://url-dwarf.vercel.app/",
  },
  {
    description: "My first bigger game engine with over 50 TypeScript files.",
    githubUrl: "https://github.com/mikareich/poke-mon",
    skills: ["TypeScript", "NPM", "CSS", "Jest"],
    title: "poke-mon",
  },
  {
    description:
      "Von Neumann architecture Simulator. Inspired by the Johnny Simulator.",
    githubUrl: "https://github.com/mikareich/johnny-js",
    skills: ["TypeScript", "React", "CSS"],
    title: "Johnny JS",
    appUrl: "https://johnny-js.vercel.app/",
  },
  {
    description: "Portfolio Website for Sen. Scientist Lars Reich",
    githubUrl: "https://github.com/mikareich/lars-reich",
    skills: ["NextJS", "TailwindCSS", "Figma"],
    title: "lars-reich",
    appUrl: "https://lars-reich.vercel.app/",
  },
  {
    description: "Minesweeper game with a custom game mode.",
    githubUrl: "https://github.com/mikareich/minesweeper",
    skills: ["TypeScript", "HTML", "CSS"],
    title: "minesweeper",
    appUrl: "https://minesweeper-opal-eight.vercel.app/",
  },
  {
    description: "Determines the location of a stronghold in Minecraft.",
    githubUrl: "https://github.com/mikareich/stronghold-location",
    skills: ["TypeScript", "React", "TailwindCSS", "MongoDB"],
    title: "stronghold-location",
    appUrl: "https://stronghold-location.vercel.app/",
  },
  {
    description: "Course planner for MSS",
    githubUrl: "https://github.com/mikareich/course-planner",
    skills: ["TypeScript", "React", "CSS"],
    title: "course-planner",
    appUrl: "https://course-planner.mikareich.studio/leistungskurse",
  },
] as const;
