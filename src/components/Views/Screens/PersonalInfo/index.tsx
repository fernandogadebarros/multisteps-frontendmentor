'use client'
import * as Input from '@/components/Form/Input'
import { usePresentationInfo } from '@/presentations/personal-info.presentation'

export const PersonalInfo = () => {
  const { inputs, register, handleSubmit, errors, formSubmit } =
    usePresentationInfo()

  return (
    <form
      id="personal-info"
      onSubmit={handleSubmit(formSubmit)}
      className="flex flex-col gap-4"
    >
      {inputs.map((item) => (
        <Input.Container key={item.id}>
          <Input.Error type={item.type} errors={errors} />
          <Input.Label id={item.fieldId}>{item.label}</Input.Label>
          <Input.Root type={item.type} errors={errors}>
            <Input.Control
              id={item.fieldId}
              name={item.type}
              placeholder={item.placeholder}
              reg={register}
            />
          </Input.Root>
        </Input.Container>
      ))}
    </form>
  )
}
