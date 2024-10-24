import { useSelector } from 'react-redux'

export const useSidebar = () => {
  const steps = useSelector((state: { steps: number }) => state.steps)

  return { steps }
}
