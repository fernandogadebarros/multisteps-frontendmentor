import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'
import { heading } from './variants'

type Variants = 'h1' | 'h2' | 'h3' | 'h4'
export type HeadingProps = ComponentProps<Variants> &
  VariantProps<typeof heading> & {
    asChild?: boolean
  }
