import { useSelector } from 'react-redux'
import { componentsDictionary } from '@/components/Views'
import { ComponentName } from '@/components/Views/types'
import { getViews } from '@/adapters/views'

export const useViews = () => {
  const steps = useSelector((state: { steps: number }) => state.steps)
  const views = getViews()
  const view = views?.find((view) => view.id === steps)

  const Component = view?.component
    ? componentsDictionary[view.component as ComponentName]
    : null

  return { view, Component }
}
