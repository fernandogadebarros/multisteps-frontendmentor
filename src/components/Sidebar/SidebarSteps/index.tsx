'use client'
import { useSidebar } from '@/presentations/sidebar-steps.presentation'
import { getStepsInfo } from '@/adapters/sidebar-steps'
import { SidebarItem } from './SidebarItem'

export const SidebarSteps = () => {
  const { steps: step } = useSidebar()
  const stepsInfo = getStepsInfo()

  return (
    <div className="flex flex-row gap-4 lg:flex-col lg:gap-8">
      {stepsInfo.map((stepInfo) => (
        <SidebarItem key={stepInfo.id} step={step} stepInfo={stepInfo} />
      ))}
    </div>
  )
}
