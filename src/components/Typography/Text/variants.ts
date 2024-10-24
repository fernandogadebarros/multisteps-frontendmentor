import { tv } from 'tailwind-variants'

export const text = tv({
  base: 'text-base font-ubuntu',
  variants: {
    variant: {
      dark: 'text-neutral-dark',
      white: 'text-neutral-white',
      'light-blue': 'text-blue-light',
    },
    weight: {
      bold: 'font-ubuntu-bold',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
})
