import { useSelector, useDispatch } from 'react-redux'
import { nextStep, prevStep } from '@/store/reducers/steps'

export const useStep = () => {
  const dispatch = useDispatch()
  const steps = useSelector((state: { steps: number }) => state.steps)

  const step = {
    greaterThanOne: steps > 1,
    first: steps === 1,
    fourth: steps === 4,
    last: steps >= 5,
  }

  const goBack = () => {
    if (step.greaterThanOne) {
      dispatch(prevStep())
    }
  }

  const goNext = () => {
    if (steps > 1) {
      dispatch(nextStep())
    }
  }

  return { steps, step, goBack, goNext }
}
