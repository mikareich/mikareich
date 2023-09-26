'use client'

import { useEffect, useRef } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
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

  const skillContainerRef = useRef<HTMLDivElement>(null)
  const leftButtonRef = useRef<HTMLButtonElement>(null)
  const rightButtonRef = useRef<HTMLButtonElement>(null)

  const handleScrollButtons = () => {
    const skillContainer = skillContainerRef.current
    const leftButton = leftButtonRef.current
    const rightButton = rightButtonRef.current

    if (skillContainer && leftButton && rightButton) {
      const { scrollLeft, scrollWidth, clientWidth } = skillContainer

      const isScrollable = scrollWidth > clientWidth

      if (!isScrollable) {
        leftButton.classList.add('hidden')
        rightButton.classList.add('hidden')
        return
      }

      if (scrollLeft === 0) {
        leftButton.classList.add('hidden')
      } else {
        leftButton.classList.remove('hidden')
      }

      if (Math.floor(scrollLeft + clientWidth) === scrollWidth) {
        rightButton.classList.add('hidden')
      } else {
        rightButton.classList.remove('hidden')
      }
    }
  }

  useEffect(() => {
    const skillContainer = skillContainerRef.current

    if (skillContainer) {
      handleScrollButtons()
      skillContainer.addEventListener('scroll', handleScrollButtons)
    }

    return () =>
      skillContainer?.removeEventListener('scroll', handleScrollButtons)
  }, [])

  const scroll = (amount: number) => {
    const skillContainer = skillContainerRef.current

    if (skillContainer) {
      skillContainer.scrollBy({
        left: amount,
        behavior: 'smooth',
      })
    }
  }

  const scrollLeft = () => scroll(-100)

  const scrollRight = () => scroll(100)

  return (
    <div className="w-[320px] bg-raisin-black-200 p-[20px] pb-[10px]">
      <Heading5 className="h-[30px]">{title}</Heading5>
      <Small className="h-[60px] leading-normal">{description}</Small>
      <div className="relative my-[5px]">
        <button
          type="button"
          ref={leftButtonRef}
          onClick={scrollLeft}
          className="absolute top-0 grid hidden h-[24px] w-[24px] shrink-0 place-items-center rounded-full bg-baby-powder bg-opacity-60"
        >
          <ChevronLeftIcon width={20} />
        </button>
        <div
          ref={skillContainerRef}
          className="scrollbar-hide flex h-[25px] gap-[10px] overflow-scroll"
        >
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} size="small" />
          ))}
        </div>
        <button
          type="button"
          ref={rightButtonRef}
          onClick={scrollRight}
          className="absolute left-[256px] top-0 grid hidden h-[24px] w-[24px] shrink-0 place-items-center rounded-full bg-baby-powder bg-opacity-60"
        >
          <ChevronRightIcon width={20} />
        </button>
      </div>
      <div className="flex h-[25px]">
        <Link href={projectLink} target="_" className="mx-0 w-fit">
          Visit Project {websiteUrl ? 'Website' : 'on GitHub'}
        </Link>

        <ArrowRightIcon className="ml-[5px] text-baby-powder" width={16} />
      </div>
    </div>
  )
}
