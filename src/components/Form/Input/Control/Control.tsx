import { twMerge } from 'tailwind-merge'
import { ControlProps } from './types'

export const Control = ({ name, reg, ...props }: ControlProps) => {
  return (
    <input
      type={props.type || 'text'}
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 font-ubuntu-medium text-blue-marine placeholder-neutral-cool outline-none focus:ring-0',
        props.className,
      )}
      {...reg?.(name)}
      {...props}
    />
  )
}
