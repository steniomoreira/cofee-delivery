import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from './styles'

interface ButtonSelctProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  select?: boolean
  text: string
  children: ReactNode
}

export function ButtonSelect({
  select = false,
  text,
  children,
  ...props
}: ButtonSelctProps) {
  return (
    <Button type="button" select={select} {...props}>
      {children}
      <p>{text}</p>
    </Button>
  )
}
