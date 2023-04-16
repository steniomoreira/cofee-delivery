import { ShoppingCart } from 'phosphor-react'
import { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { CartContainer } from './styles'
import { useCoffeeCartContext } from '../../hooks/useCoffeeCart'

interface CartProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

export function Cart({ to, ...props }: CartProps) {
  const { coffeeCart } = useCoffeeCartContext()

  const total = coffeeCart.length

  return (
    <CartContainer>
      <span>{total}</span>

      <Link to={to} {...props}>
        <ShoppingCart size={22} weight="fill" />
      </Link>
    </CartContainer>
  )
}
