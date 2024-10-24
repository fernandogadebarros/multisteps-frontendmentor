import { Heading } from '@/components/Typography/Heading'
import { Text } from '@/components/Typography/Text'
import { ContainerProps } from './types'

export const Container = ({ heading, text, children }: ContainerProps) => {
  return (
    <div className="h-full w-full lg:w-[480px] lg:py-8">
      {heading && <Heading>{heading}</Heading>}
      {text && <Text className="mb-6 lg:mb-12">{text}</Text>}
      {children}
    </div>
  )
}
