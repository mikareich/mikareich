import Image from 'next/image'
import { SKILLS } from '~/content/config'

const SIZE_IN_PIXELS = {
  large: 32,
  medium: 24,
  small: 24,
} as const

type Size = keyof typeof SIZE_IN_PIXELS

type Props = {
  skill: string
  size?: Size
}

export default function Skill({ skill, size = 'medium' }: Props) {
  const skillPath = SKILLS.find((s) => s.name === skill)?.path
  if (!skillPath) return null

  return (
    <div className="flex items-center gap-2 text-gray-100">
      <Image
        alt={skill}
        height={SIZE_IN_PIXELS[size]}
        src={skillPath}
        width={SIZE_IN_PIXELS[size]}
      />

      {size !== 'small' && (
        <span className={size === 'medium' ? 'base' : 'large'}>{skill}</span>
      )}
    </div>
  )
}
