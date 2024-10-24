'use client'
import Image from 'next/image'
import { cn } from '@/utils'
import { useSelectPlan } from '@/presentations/select-plan.presentation'

export const SelectPlan = () => {
  const { plans, isMonthly, handlePlanClick, handlePlanTypeChange } =
    useSelectPlan()

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
        {plans.items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-5 ring-1 duration-200 hover:ring-purple lg:h-[160px] lg:flex-col lg:items-start lg:justify-between lg:gap-6',
              item.isActive
                ? 'bg-light-purple ring-purple'
                : 'ring-neutral-light',
            )}
            onClick={() => handlePlanClick(item.id)}
          >
            <div className="relative h-8 w-8">
              <Image src={item.img.src} alt={item.img.alt} fill sizes="100%" />
            </div>
            <div className="flex flex-col">
              <span className="font-ubuntu-medium text-blue-marine">
                {item.text}
              </span>
              <span className="text-sm text-neutral-dark">
                {isMonthly ? item.prices[0] : item.prices[1]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-light-purple py-3 duration-200">
        <span
          className={cn(
            'cursor-pointer font-ubuntu-bold text-sm duration-200',
            isMonthly ? 'text-blue-marine' : 'text-neutral-dark',
          )}
          onClick={() => handlePlanTypeChange('monthly')}
        >
          Monthly
        </span>
        <span className="durtion-200 flex h-5 w-9 transform items-center rounded-full bg-blue-marine">
          <span
            className={cn(
              'mx-1 block h-3 w-3 rounded-full bg-neutral-white transition-transform',
              isMonthly ? 'translate-x-0' : 'translate-x-4',
            )}
          />
        </span>
        <span
          className={cn(
            'cursor-pointer font-ubuntu-bold text-sm duration-200',
            !isMonthly ? 'text-blue-marine' : 'text-neutral-dark',
          )}
          onClick={() => handlePlanTypeChange('yearly')}
        >
          Yearly
        </span>
      </div>
    </div>
  )
}
