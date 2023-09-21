import ProjectCard, { ProjectType } from "./ProjectCard";
import Projects from "@/content/projects.json";

export default function AllProjects() {
  return (
    <div className="mt-[50px] grid grid-cols-[repeat(auto-fit,305px)] justify-center gap-[20px]">
      {Projects.projects.map((project) => (
        <ProjectCard key={project.title} {...(project as ProjectType)} />
      ))}
    </div>
  );
}
