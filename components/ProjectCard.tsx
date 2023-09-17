import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Skill, { SkillType } from "./Skill";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  skills: SkillType[];
  githubRepoURL: string;
  websiteUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  skills,
  githubRepoURL,
  websiteUrl,
}: ProjectType) {
  return (
    <div className="w-[305px] h-[205px] relative group ">
      <div className="absolute top-[5px] left-[5px] w-[300px] h-[200px] bg-raisin-black-400"></div>
      <div className="overflow-hidden absolute w-[300px] h-[200px] bg-raisin-black-300 group-hover:mt-[5px] group-hover:ml-[5px] flex flex-col p-[20px] gap-[10px] transition-all">
        <h4 className="text-xl font-medium text-baby-powder">{title}</h4>
        <p className="text-xs text-raisin-black-100">{description}</p>
        <div className="flex gap-[10px] min-w-max">
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} size="small" />
          ))}
        </div>
        <div className="flex">
          <Link href={websiteUrl} className="w-fit mx-0">
            Visit Project Website
          </Link>

          <ArrowRightIcon className="ml-[10px] text-baby-powder" width={16} />
        </div>
      </div>
    </div>
  );
}
