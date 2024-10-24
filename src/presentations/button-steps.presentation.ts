import { useSelector, useDispatch } from 'react-redux'
import { nextStep, prevStep } from '@/store/reducers/steps'
import { AddOnsProps } from '@/components/Views/Screens/PickAddOns/types'

export const useStep = () => {
  const dispatch = useDispatch()
  const storage = useSelector(
    (state: { steps: number; addson: AddOnsProps[] }) => ({
      steps: state.steps,
      addson: state.addson,
    }),
  )
  const isNotAddonActive = storage.addson.every((addon) => !addon.isChecked)

  const step = {
    greaterThanOne: storage.steps > 1,
    first: storage.steps === 1,
    fourth: storage.steps === 4,
    last: storage.steps >= 5,
  }

  const goBack = () => {
    if (step.greaterThanOne) {
      dispatch(prevStep())
    }
  }

  const goNext = () => {
    if (storage.steps > 1) {
      dispatch(nextStep())
    }
  }

  return { step, isNotAddonActive, goBack, goNext }
}
