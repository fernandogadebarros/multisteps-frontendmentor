import { tv } from 'tailwind-variants'

export const heading = tv({
  base: 'text-2xl/tight font-ubuntu-bold',
  variants: {
    variant: {
      primary: 'text-blue-marine',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
