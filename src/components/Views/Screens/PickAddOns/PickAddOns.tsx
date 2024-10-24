import { cn } from '@/utils'
import { usePickAddOns } from '@/presentations/pick-addons.presentation'
import { Checkbox } from './Checkbox'

export const PickAddOns = () => {
  const { storage, isMonthly, selectAddon } = usePickAddOns()

  return (
    <div className="flex flex-col gap-4">
      {storage.addson.map((addon) => (
        <div
          key={addon.id}
          className={cn(
            'grid cursor-pointer grid-cols-[20px_1fr] items-center gap-6 rounded-lg px-6 py-4 ring-1 duration-200 hover:ring-purple',
            addon.isChecked ? 'ring-purple' : 'ring-neutral-light',
          )}
          onClick={() => selectAddon(addon.id)}
        >
          <Checkbox isChecked={addon.isChecked} />

          <div className="flex w-full items-center justify-between">
            <div className="flex w-full flex-col">
              <span className="font-ubuntu-medium text-sm text-blue-marine lg:text-base">
                {addon.title}
              </span>
              <span className="text-xs text-neutral-dark lg:text-sm">
                {addon.subtitle}
              </span>
            </div>
            <span className="text-xs text-purple lg:text-sm">
              {isMonthly ? addon.prices[0] : addon.prices[1]}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
