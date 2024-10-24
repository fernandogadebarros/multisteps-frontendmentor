'use client'
import { cn } from '@/utils'
import { useStep } from '@/presentations/button-steps.presentation'
import { NextButton } from './NextButton'
import { PrevButton } from './PrevButton'
import { StepsButtonsProps } from './types'

export const ButtonSteps = ({ desktop, className }: StepsButtonsProps) => {
  const { step, goBack, goNext } = useStep()

  return (
    !step.last && (
      <div
        className={cn(
          'w-full lg:flex',
          desktop
            ? 'hidden'
            : 'mt-auto flex w-full items-center bg-neutral-white px-6 py-8 lg:hidden',
          step.greaterThanOne && !desktop ? 'justify-between' : 'justify-end',
          step.greaterThanOne ? 'lg:justify-between' : 'lg:justify-end',
          className,
        )}
      >
        <PrevButton step={step} goBack={goBack} />
        <NextButton step={step} goNext={goNext} />
      </div>
    )
  )
}
