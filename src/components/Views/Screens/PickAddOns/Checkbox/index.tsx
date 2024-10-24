import { cn } from '@/utils'
import { FaCheck } from 'react-icons/fa6'

export const Checkbox = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <div
      className={cn(
        'flex h-4 w-4 items-center justify-center rounded-sm ring-1 ring-neutral-light duration-200 lg:h-5 lg:w-5',
        isChecked
          ? 'bg-purple ring-purple'
          : 'bg-neutral-white ring-neutral-light',
      )}
    >
      <input type="checkbox" checked={isChecked} className="hidden" />
      <FaCheck
        className={cn(
          isChecked ? 'opacity-1' : 'opacity-0',
          'text-xs text-neutral-white duration-200 lg:text-base',
        )}
      />
    </div>
  )
}
