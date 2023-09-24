import { ArrowRightIcon } from '@heroicons/react/24/solid'

import type Projects from '@/content/projects.json'

import Link from './Link'
import type { SkillType } from './Skill'
import Skill from './Skill'
import { Small, Heading5 } from './Typography'

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
  githubRepoURL,
}: ProjectType) {
  const projectLink = websiteUrl || githubRepoURL

  return (
    <div className="w-[320px] overflow-hidden bg-raisin-black-200 p-[20px] pb-[10px]">
      <Heading5 className="h-[30px]">{title}</Heading5>
      <Small className="h-[60px] leading-normal">{description}</Small>
      <div className="my-[5px] flex h-[25px] min-w-max gap-[10px]">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} size="small" />
        ))}
      </div>
      <div className="flex h-[25px]">
        <Link href={projectLink} className="mx-0 w-fit">
          Visit Project {websiteUrl ? 'Website' : 'on GitHub'}
        </Link>

        <ArrowRightIcon className="ml-[5px] text-baby-powder" width={16} />
      </div>
    </div>
  )
}
