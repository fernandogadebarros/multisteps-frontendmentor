import { cn } from '@/utils'
import { Button } from '@/components/Form/Button'
import { NextButtonProps } from './types'

export const NextButton = ({ step, goNext }: NextButtonProps) => (
  <Button
    {...(step.first && {
      form: 'personal-info',
      type: 'submit',
    })}
    className={cn(step.fourth && 'bg-purple hover:bg-[#928CFF]')}
    onClick={() => step.greaterThanOne && goNext()}
  >
    Next Step
  </Button>
)
