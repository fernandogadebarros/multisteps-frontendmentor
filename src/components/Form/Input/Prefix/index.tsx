import { PrefixProps } from './types'

export const Prefix = (props: PrefixProps) => {
  return <div {...props} className={props.className} />
}
