import { twMerge } from 'tailwind-merge'
import { RootProps } from './types'

export const Root = ({ errors, type, ...props }: RootProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-neutral-light px-4 py-3 shadow-sm outline-none',
        errors?.[type] && 'border-red-straw',
        errors?.[type]
          ? 'focus-within:border-red-straw'
          : 'focus-within:border-purple',
        props.className,
      )}
    />
  )
}
