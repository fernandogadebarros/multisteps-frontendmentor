import { ErrorProps } from './types'

export const Error = ({ errors, type }: ErrorProps) => {
  return (
    errors && (
      <span className="absolute right-0 font-ubuntu-bold text-sm text-red-straw lg:text-base">
        {errors?.[type]?.message}
      </span>
    )
  )
}
