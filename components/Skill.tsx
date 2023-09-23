import Image from 'next/image'

import Skills from '@/content/skills.json'

export type SkillType = keyof typeof Skills.skills

type SkillProps = {
  skill: SkillType
  size?: 'small' | 'large' | 'auto'
}

export default function Skill({ skill, size = 'auto' }: SkillProps) {
  const assetPath = Skills.skills[skill]

  return (
    <div className="flex items-center">
      <picture className="shrink-0">
        {size !== 'small' && (
          <source
            srcSet={assetPath}
            media="(min-width: 576px)"
            width={24}
            height={24}
          />
        )}
        {size !== 'large' && (
          <source
            srcSet={assetPath}
            media="(min-width: 0px)"
            width={20}
            height={20}
          />
        )}
        <Image src={assetPath} alt={skill} width={24} height={24} />
      </picture>
      <span
        className={`ml-[10px] text-sm text-baby-powder xs:text-lg ${
          size === 'small' && '!text-sm'
        } ${size === 'large' && '!text-lg'}`}
      >
        {skill}
      </span>
    </div>
  )
}
