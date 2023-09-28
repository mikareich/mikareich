import Projects from '@/content/projects.json'

import type { ProjectType } from './ProjectCard'
import ProjectCard from './ProjectCard'

export default function AllProjects() {
  return (
    <div className="mt-[50px] grid grid-cols-[repeat(auto-fit,325px)] justify-center gap-[20px]">
      {Projects.projects.map((project) => (
        <ProjectCard key={project.title} {...(project as ProjectType)} />
      ))}
    </div>
  )
}
