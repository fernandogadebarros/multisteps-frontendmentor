import { z } from 'zod'

export const createUserFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Name is required' })
    .regex(/^[A-Za-z\s]+$/i, 'Name is invalid'),
  email: z
    .string()
    .min(3, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
})
