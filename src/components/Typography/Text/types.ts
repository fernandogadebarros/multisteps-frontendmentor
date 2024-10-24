import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import { text } from './variants'

export type TextProps = ComponentProps<'p'> &
  VariantProps<typeof text> & {
    asChild?: boolean
  }
