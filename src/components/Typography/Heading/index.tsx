import { cn } from '@/utils'
import { Slot } from '@radix-ui/react-slot'
import { HeadingProps } from './types'
import { heading } from './variants'

export const Heading = ({ asChild, className, ...props }: HeadingProps) => {
  const Component = asChild ? Slot : 'h1'
  return <Component className={cn(heading({ className }))} {...props} />
}
