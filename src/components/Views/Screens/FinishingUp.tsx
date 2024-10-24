import { useFinishingUp } from '@/presentations/finishing-up.presentation'

export const FinishingUp = () => {
  const {
    planChoosenByUser,
    addOnSelected,
    plan,
    totalPrice,
    currencyUnit,
    isMonthly,
    handlePlanTypeChange,
  } = useFinishingUp()

  return (
    <div>
      <div className="rounded-lg bg-light-purple px-6 py-4 font-ubuntu text-neutral-dark">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-ubuntu-bold text-sm text-blue-marine lg:text-base">
              {planChoosenByUser[0]?.text} ({plan.text})
            </span>
            <span
              className="cursor-pointer text-sm underline duration-200 hover:text-purple"
              onClick={() => handlePlanTypeChange(plan.switch)}
            >
              Change
            </span>
          </div>
          <span className="font-ubuntu-bold text-sm text-blue-marine lg:text-base">
            {isMonthly
              ? planChoosenByUser[0]?.prices?.[0]
              : planChoosenByUser[0]?.prices?.[1]}
          </span>
        </div>
        <span className="mb-4 mt-6 block h-[1px] w-full bg-neutral-dark/20" />
        <div className="flex flex-col gap-4">
          {addOnSelected.map((addon) => (
            <div key={addon.id} className="flex items-center justify-between">
              <span className="text-sm">{addon.title}</span>
              <span className="text-sm text-blue-marine">
                {isMonthly ? addon.prices[0] : addon.prices[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between px-6 text-neutral-dark">
        <span className="text-sm">Total (per {plan.per})</span>
        <span className="font-ubuntu-bold text-base text-purple lg:text-xl">
          +${totalPrice}
          {currencyUnit}
        </span>
      </div>
    </div>
  )
}
