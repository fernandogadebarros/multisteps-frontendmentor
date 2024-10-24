import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'py-3.5 px-6 rounded-lg font-ubuntu-bold duration-200',
  variants: {
    variant: {
      primary: 'bg-blue-marine text-neutral-white hover:bg-blue-light-marine',
      secondary: 'bg-transparent text-neutral-dark hover:text-blue-marine',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
