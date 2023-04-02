import { ReactNode } from 'react'
import { CoffeeCardContainer } from './styles'

type CoffeeCardBoxProps = {
  children: ReactNode
}

export function CoffeeCardBox({ children }: CoffeeCardBoxProps) {
  return <CoffeeCardContainer>{children}</CoffeeCardContainer>
}
