import Link from "next/link";
import { SKILLS } from "~/content/skills";
import { Skill } from "./skill";

type ProjectCardProps = {
  title: string;
  description: string;
  skills: (keyof typeof SKILLS)[];
  githubUrl: string;
  appUrl: string;
};

export function ProjectCard({
  title,
  description,
  skills,
  githubUrl,
  appUrl,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className="h-fit min-w-0 w-full max-w-96 flex-1 basis-72 space-y-3 border border-theme-border p-4"
      key={title}
    >
      <header className="flex justify-between">
        <h5 className="truncate font-medium text-portfolio-text-strong text-xl">
          {title}
        </h5>
      </header>

      <div>
        <p className="text-small">Description</p>
        <p className="font-medium text-portfolio-text-strong">{description}</p>
      </div>

      <div>
        <p className="text-small">Technologies</p>
        <div className="flex flex-wrap gap-2 py-1">
          {skills.map((skill) => (
            <Skill key={skill} src={SKILLS[skill]} size="small">
              {skill}
            </Skill>
          ))}
        </div>
      </div>

      <Link
        className="text-link"
        href={appUrl || githubUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        {appUrl ? "Visit Website" : "View Source Code"}
      </Link>
    </div>
  );
}
