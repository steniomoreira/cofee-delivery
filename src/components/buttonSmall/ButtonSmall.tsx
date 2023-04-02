import { ButtonHTMLAttributes } from 'react'
import { ButtonSmallContainer } from './styles'
import { Trash } from 'phosphor-react'

interface ButtonSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function ButtonSmall({ text, ...props }: ButtonSmallProps) {
  return (
    <ButtonSmallContainer {...props}>
      <Trash size={16} />
      {text}
    </ButtonSmallContainer>
  )
}
