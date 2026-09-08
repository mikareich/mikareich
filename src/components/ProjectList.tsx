import { PROJECTS } from "~/content/config";
import Skill from "./Skill";

export default function ProjectList() {
  return (
    <section className="flex flex-wrap gap-5">
      {PROJECTS.map((project, i) => (
        <div
          className="h-fit min-w-0 w-full max-w-96 flex-1 basis-72 space-y-3 border border-theme-border p-4"
          key={project.title}
        >
          <header className="flex justify-between">
            <h5 className="truncate font-medium text-portfolio-text-strong text-xl">
              {project.title}
            </h5>
            <span className="text-theme-primary">
              {i.toString().padStart(2, "0")}
            </span>
          </header>

          <div>
            <p className="text-small">Description</p>
            <p className="font-medium text-portfolio-text-strong">
              {project.description}
            </p>
          </div>

          <div>
            <p className="text-small">Technologies</p>
            <div className="flex flex-wrap gap-2 py-1">
              {project.skills.map((skill) => (
                <Skill key={skill} size="small" skill={skill} />
              ))}
            </div>
          </div>

          <a
            className="highlighted mt-2 block w-fit"
            href={
              "websiteUrl" in project
                ? project.websiteUrl
                : project.githubRepoURL
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            {"websiteUrl" in project ? "Visit Website" : "View Source Code"}
          </a>
        </div>
      ))}
    </section>
  );
}
