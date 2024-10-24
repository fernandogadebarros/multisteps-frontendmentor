import { useSelector, useDispatch } from 'react-redux'
import { PlansProps } from '@/components/Views/Screens/SelectPlan/types'
import { setPlan, setPlanType } from '@/store/reducers/plans'

export const useSelectPlan = () => {
  const dispatch = useDispatch()
  const plans = useSelector(
    (state: { plans: { items: PlansProps[]; planType: string } }) => ({
      items: state.plans.items,
      planType: state.plans.planType,
    }),
  )
  const isMonthly = plans.planType === 'monthly'

  const handlePlanClick = (id: number) => {
    dispatch(setPlan(id))
  }

  const handlePlanTypeChange = (type: string) => {
    dispatch(setPlanType(type))
  }

  return { plans, isMonthly, handlePlanClick, handlePlanTypeChange }
}
