import { InputHTMLAttributes } from 'react'
import { InputContainer, InputFileld } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: number
}

export function Input({ ...props }: InputProps) {
  return (
    <InputContainer hasLabelOptional={!props.required} {...props}>
      <InputFileld {...props} />
    </InputContainer>
  )
}
