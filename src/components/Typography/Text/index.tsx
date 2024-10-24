import { cn } from '@/utils'
import { Slot } from '@radix-ui/react-slot'
import { TextProps } from './types'
import { text } from './variants'

export const Text = ({
  asChild,
  variant,
  weight,
  size,
  className,
  ...props
}: TextProps) => {
  const Component = asChild ? Slot : 'p'
  return (
    <Component
      className={cn(text({ variant, weight, size, className }))}
      {...props}
    />
  )
}
