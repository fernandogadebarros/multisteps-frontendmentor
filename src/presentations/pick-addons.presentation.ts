import { useSelector, useDispatch } from 'react-redux'
import { setAddOn } from '@/store/reducers/addson'
import { AddOnsProps } from '@/components/Views/Screens/PickAddOns/types'
import { PlansProps } from '@/components/Views/Screens/SelectPlan/types'

export const usePickAddOns = () => {
  const storage = useSelector(
    (state: {
      addson: AddOnsProps[]
      plans: { items: PlansProps[]; planType: string }
    }) => ({
      addson: state.addson,
      plans: state.plans,
    }),
  )
  const dispatch = useDispatch()
  const isMonthly = storage.plans.planType === 'monthly'

  const selectAddon = (id: number) => {
    return dispatch(setAddOn(id))
  }

  return { storage, isMonthly, selectAddon }
}
