import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { nextStep } from '@/store/reducers/steps'
import { getInputs } from '@/adapters/views'
import { createUserFormSchema } from '@/components/Views/Screens/PersonalInfo/schema'
import { createUserFormData } from '@/components/Views/Screens/PersonalInfo/types'
import { saveInfo } from '@/store/reducers/info'
import { useSelector } from 'react-redux'

export const usePresentationInfo = () => {
  const info = useSelector(
    (state: { info: { username: string; email: string; phone: string } }) =>
      state.info,
  )
  const dispatch = useDispatch()
  const inputs = getInputs()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    mode: 'onBlur',
    defaultValues: {
      username: info?.username,
      email: info?.email,
      phone: info?.phone,
    },
  })

  const formSubmit = (data: createUserFormData) => {
    dispatch(nextStep())
    dispatch(saveInfo(data))
  }

  return {
    info,
    inputs,
    register,
    handleSubmit,
    errors,
    formSubmit,
  }
}
