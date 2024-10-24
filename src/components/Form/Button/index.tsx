import { cn } from '@/utils'
import { Slot } from '@radix-ui/react-slot'
import { ButtonProps } from './types'
import { button } from './variants'

export const Button = ({
  asChild,
  variant,
  className,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return <Component className={cn(button({ variant, className }))} {...props} />
}
