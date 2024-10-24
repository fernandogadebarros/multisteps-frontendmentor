import { Button } from '@/components/Form/Button'
import { PrevButtonProps } from './types'

export const PrevButton = ({ step, goBack }: PrevButtonProps) => {
  if (!step.greaterThanOne) return null

  return (
    <Button variant="secondary" onClick={() => goBack()}>
      Go Back
    </Button>
  )
}
