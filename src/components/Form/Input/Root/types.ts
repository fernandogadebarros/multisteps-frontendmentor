import { ComponentProps } from 'react'
import { InputError } from '../types'

export type RootProps = { type: string } & ComponentProps<'div'> & InputError
