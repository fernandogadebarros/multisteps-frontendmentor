import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import { button } from './variants'

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    asChild?: boolean
  }
