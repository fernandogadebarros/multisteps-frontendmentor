import { z } from 'zod'
import { createUserFormSchema } from './schema'

export type createUserFormData = z.infer<typeof createUserFormSchema>
