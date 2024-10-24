import { cn } from '@/utils'

export const Container = ({ ...props }) => {
  return (
    <div
      className={cn('relative flex w-full flex-col', props.className)}
      {...props}
    />
  )
}
