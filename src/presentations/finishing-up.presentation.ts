import { useSelector, useDispatch } from 'react-redux'
import { PlansProps } from '@/components/Views/Screens/SelectPlan/types'
import { AddOnsProps } from '@/components/Views/Screens/PickAddOns/types'
import { setPlanType } from '@/store/reducers/plans'

export const useFinishingUp = () => {
  const dispatch = useDispatch()
  const packages = useSelector(
    (state: {
      addson: AddOnsProps[]
      plans: { items: PlansProps[]; planType: string }
    }) => ({
      addson: state.addson,
      items: state.plans.items,
      planType: state.plans.planType,
    }),
  )
  const planChoosenByUser = packages.items.filter((item) => item.isActive)
  const addOnSelected = packages.addson.filter((item) => item.isChecked)
  const planType = packages.planType
  const isMonthly = planType === 'monthly'
  const plan = {
    switch: isMonthly ? 'yearly' : 'monthly',
    per: isMonthly ? 'month' : 'year',
    text: planType.charAt(0).toUpperCase() + planType.slice(1),
  }

  const planPriceText = isMonthly
    ? planChoosenByUser[0]?.prices?.[0]
    : planChoosenByUser[0]?.prices?.[1]

  const onlyNumber = /(\d+)/
  const planPrice = Number(planPriceText.match(onlyNumber)?.[0])

  const addonsTotal = addOnSelected.reduce((total, addon) => {
    const addonPriceMonthly = Number(addon.prices?.[0].match(onlyNumber)?.[0])
    const addonPriceYearly = Number(addon.prices?.[1].match(onlyNumber)?.[0])
    const addonPrice = isMonthly ? addonPriceMonthly : addonPriceYearly

    return total + addonPrice
  }, 0)
  const totalPrice = planPrice + addonsTotal
  const currencyUnit = isMonthly ? '/mo' : '/yr'

  const handlePlanTypeChange = (type: string) => {
    dispatch(setPlanType(type))
  }

  return {
    planChoosenByUser,
    addOnSelected,
    plan,
    totalPrice,
    currencyUnit,
    isMonthly,
    handlePlanTypeChange,
  }
}
