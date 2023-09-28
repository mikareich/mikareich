import type { ComponentProps } from 'react'

import '@/styles/github-dark.css'
import clsx from 'clsx'

import Skill from '../content/Skill'

type CodeProps = ComponentProps<'code'>

export default function Code({ className, ...props }: CodeProps) {
  const language =
    className
      ?.split(' ')
      .find((name) => name.startsWith('language-'))
      ?.replace('language-', '') ?? 'text'

  return (
    <div className="px-[20px] py-[10px]">
      <div className="my-[10px]">
        <Skill skill={language as any} size="small" />
      </div>
      <code className={clsx(className, '')} {...props} />
    </div>
  )
}
