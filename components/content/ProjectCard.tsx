'use client'

import { forwardRef, useEffect, useRef } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

import type Projects from '@/content/projects.json'
import appendStyles from '@/utils/appendStyles'
import tailwindMerge from '@/utils/tailwindMerge'

import { Small, Heading5 } from '../base/Typography'
import Link from '../navigation/Link'

import type { SkillType } from './Skill'
import Skill from './Skill'

export type ProjectType = Omit<
  (typeof Projects.projects)[number],
  'skills' | 'websiteUrl'
> & {
  skills: SkillType[]
  websiteUrl?: string
}

const ScrollButtonStyles = tailwindMerge(
  'absolute top-0 grid hidden w-[24px] h-[24px] shrink-0 place-items-center rounded-full bg-heading-color bg-opacity-60 hover:bg-opacity-100 transition-all cursor-pointer',
)

const ScrollButton = forwardRef<HTMLButtonElement, any>((props, ref) =>
  appendStyles('button', ScrollButtonStyles)({ ...props, ref }),
)

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

  const scrollOffset = 10 // the distance away from the edge of the container to show the scroll buttons

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

      if (scrollLeft < scrollOffset) {
        leftButton.classList.add('hidden')
      } else {
        leftButton.classList.remove('hidden')
      }

      if (scrollLeft + clientWidth > scrollWidth - scrollOffset) {
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
    <div className="w-[320px] rounded-lg bg-background-accent-color p-[20px] pb-[10px]">
      <Heading5 className="h-[30px]">{title}</Heading5>
      <Small className="h-[60px] leading-normal">{description}</Small>
      <div className="relative my-[5px]">
        <ScrollButton type="button" ref={leftButtonRef} onClick={scrollLeft}>
          <ChevronLeftIcon width={20} />
        </ScrollButton>
        <div
          ref={skillContainerRef}
          className="scrollbar-hide flex h-[25px] gap-[10px] overflow-scroll"
        >
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} size="small" />
          ))}
        </div>
        <ScrollButton
          type="button"
          ref={rightButtonRef}
          onClick={scrollRight}
          className="left-[256px]"
        >
          <ChevronRightIcon width={20} />
        </ScrollButton>
      </div>
      <div className="flex h-[25px]">
        <Link href={projectLink} target="_" className="mx-0 w-fit">
          Visit Project {websiteUrl ? 'Website' : 'on GitHub'}
        </Link>

        <ArrowRightIcon className="ml-[5px] text-heading-color" width={16} />
      </div>
    </div>
  )
}
