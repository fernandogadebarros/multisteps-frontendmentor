import { cn } from '@/utils'
import { Text } from '@/components/Typography/Text'
import { SidebarItemProps } from './types'

export const SidebarItem = ({ step, stepInfo }: SidebarItemProps) => {
  const isStepActive = stepInfo.id === step
  const isTheLastStepActive = stepInfo.id === 4 && step >= 4

  return (
    <div className="flex items-center gap-4" key={stepInfo.id}>
      <span
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full font-ubuntu-bold',
          isStepActive || isTheLastStepActive
            ? 'bg-blue-light text-blue-marine'
            : 'text-neutral-white ring-1 ring-neutral-white',
        )}
      >
        {stepInfo.id}
      </span>
      <div className="hidden flex-col lg:flex">
        <Text variant="light-blue" size="xs">
          {stepInfo.step.toUpperCase()}
        </Text>
        <Text variant="white" weight="bold" className="tracking-wide">
          {stepInfo.text.toUpperCase()}
        </Text>
      </div>
    </div>
  )
}
