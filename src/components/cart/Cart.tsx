import { ShoppingCart } from 'phosphor-react'
import { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { CartContainer } from './styles'

interface CartProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

export function Cart({ to, ...props }: CartProps) {
  return (
    <CartContainer>
      <span>3</span>

      <Link to={to} {...props}>
        <ShoppingCart size={22} weight="fill" />
      </Link>
    </CartContainer>
  )
}
