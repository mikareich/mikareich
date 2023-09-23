import { ArrowRightIcon } from '@heroicons/react/24/solid'

import type Projects from '@/content/projects.json'

import Link from './Link'
import type { SkillType } from './Skill'
import Skill from './Skill'

export type ProjectType = Omit<
  (typeof Projects.projects)[number],
  'skills' | 'websiteUrl'
> & {
  skills: SkillType[]
  websiteUrl?: string
}

export default function ProjectCard({
  title,
  description,
  skills,
  websiteUrl,
}: ProjectType) {
  return (
    <div className="group relative h-[205px] w-[305px] ">
      <div className="absolute left-[5px] top-[5px] h-[200px] w-[300px] bg-raisin-black-400"></div>
      <div className="absolute flex h-[200px] w-[300px] flex-col gap-[10px] overflow-hidden bg-raisin-black-300 p-[20px] transition-all group-hover:ml-[5px] group-hover:mt-[5px]">
        <h4 className="text-xl font-medium text-baby-powder">{title}</h4>
        <p className="text-xs text-raisin-black-100">{description}</p>
        <div className="flex min-w-max gap-[10px]">
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} size="small" />
          ))}
        </div>
        <div className="flex">
          <Link href={websiteUrl!} className="mx-0 w-fit">
            Visit Project Website
          </Link>

          <ArrowRightIcon className="ml-[5px] text-baby-powder" width={16} />
        </div>
      </div>
    </div>
  )
}
