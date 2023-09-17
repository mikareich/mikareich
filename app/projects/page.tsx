import ProjectCard, { ProjectType } from "@/components/ProjectCard";

const exampleProject: ProjectType = {
  id: "1",
  title: "url-dwarf",
  description:
    "A quick, easy solution for transforming long URLs into short, sharable links.",
  skills: ["Docker", "HTML", "CSS", "Node.js"],
  githubRepoURL: "https://github.com/mikareich/url-dwarf",
  websiteUrl: "https://url-dwarf.vercel.app/",
};
const projects: ProjectType[] = new Array(10).fill(exampleProject);

export default function AboutMe() {
  return (
    <main>
      <h1 className="text-4xl font-medium text-baby-powder">
        Projects Showcase
      </h1>
      <p className="text-raisin-black-100 mt-[50px]">
        Below you&apos;ll find a collection of web applications and other
        projects I&apos;ve worked on over the years. Each one reflects my
        skills, passion, and dedication to web development. Take a look and see
        what I&apos;ve been up to!
      </p>

      <div className="mt-[50px] grid grid-cols-[repeat(auto-fit,305px)] gap-[20px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
