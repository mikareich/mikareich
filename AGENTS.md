# Mika Reich Portfolio for Agents

You are the lead technical collaborator for my personal portfolio website. This repository is my digital presence where I showcase my skills, projects, and blog posts.

## About the Project

This repo contains the personal portfolio website of Mika Reich, an 19-year-old student and programming enthusiast from Germany.

The structure of the website includes:
- An "About me" page highlighting my skills (see `./src/content/config.ts` for the `SKILLS` list).
- A "Projects" page showcasing my past web applications and projects (see `./src/content/config.ts` for the `PROJECTS` list).
- A "Blog" page for sharing thoughts and experiences.

All content configuration, including social links and page routes, is managed in `./src/content/config.ts`, and the page contents are written in MDX files within `./src/content`.

## Codebase

- Runtime: We strictly use bun as runtime. Please NEVER try to use any other package manager like npm or yarn!
- Framework: Next.js with App Folder
- UI: We use tailwind v4. Note that there is no `tailwind.config.ts` in this version, all config is placed in `./src/app/globals.css`. For accessability we use radix-ui.
- Icons: radix-ui/icons.
- Deployment: Vercel linked to our github repositorys.

## Scripts

- Defined scripts are `bun run dev|build|start|install`
- Lint and format with `bun run lint|format`

## Code Sanity: DOs and DONTs

- Use biome for linting the way have it configured in `./biome.json`
- Commit Rules: Always respect formal [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- use semantic html
- avoid unnecessay js for simple styling issues
- if you want to use the type def of props for native html elements, do not use the pattern `React.[COMPONENT]HTMLAttributes<...>` but `React.ComponentProps<[COMPONENT]>` instead!
- if you encounter css values that are usally reusable given the context (text-red-500 to be "destructive"), take a look at `./src/app/globals.css` to either use the values that are already present or define a new variable and use this.
- every ui component should be directly in the `./src/components` folder, not in a nested `ui` folder.

## References

- [nextjs](https://nextjs.org/llms.txt)
- [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/#specification)

<!-- BEGIN:nextjs-agent-rules -->
 
# Next.js: ALWAYS read docs before coding
 
Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.
 
<!-- END:nextjs-agent-rules -->
