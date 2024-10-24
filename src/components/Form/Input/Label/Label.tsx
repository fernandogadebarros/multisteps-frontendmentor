import { twMerge } from 'tailwind-merge'
import { cn } from '@/utils'
import { LabelProps } from './types'

export const Label = ({ id, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        twMerge(
          'font-ubuntu text-sm text-blue-marine lg:text-base',
          'mb-1 block cursor-pointer lg:mb-2',
        ),
        props.className,
      )}
      {...props}
    />
  )
}
