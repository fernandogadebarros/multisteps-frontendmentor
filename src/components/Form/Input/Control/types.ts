import { ComponentProps } from 'react'
import { UseFormRegister } from 'react-hook-form'

export type ControlProps = {
  name: string
  reg?: UseFormRegister<any>
} & ComponentProps<'input'>
