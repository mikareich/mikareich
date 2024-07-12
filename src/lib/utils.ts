import skillMap from "../../public/data/skills.json";
import projects from "../../public/data/projects.json";

export { skillMap, projects };

export const skills = skillMap.map((skill) => skill.name);

export const router = [
  { title: "About me", slug: "/" },
  { title: "Projects", slug: "/projects" },
  { title: "Blog", slug: "/blog" },
] as const;

export const socials = {
  email: "mikareich0@gmail.com",
  github: "https://github.com/mikareich",
  discord: "https://discordapp.com/users/708739192678514780",
};
