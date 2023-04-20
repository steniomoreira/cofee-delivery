import { InputHTMLAttributes, ReactNode } from 'react'
import InputMask from 'react-input-mask'

interface InputMaskedProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  mask: string
}

export function InputMasked({ children, mask, ...props }: InputMaskedProps) {
  return (
    <InputMask
      mask={mask}
      maskPlaceholder={null}
      onChange={props.onChange}
      {...props}
    >
      {children}
    </InputMask>
  )
}
