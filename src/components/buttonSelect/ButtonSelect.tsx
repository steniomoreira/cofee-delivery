import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { Button } from './styles'

interface ButtonSelctProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  select?: boolean
  text: string
  children: ReactNode
}

export const ButtonSelect = forwardRef<HTMLButtonElement, ButtonSelctProps>(
  (props, ref) => {
    return (
      <Button ref={ref} type="button" select={props.select} {...props}>
        {props.children}
        <p>{props.text}</p>
      </Button>
    )
  },
)

ButtonSelect.displayName = 'ButtonSelect'
