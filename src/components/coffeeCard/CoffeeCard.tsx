import {
  ActionContainer,
  Buy,
  CoffeeCardContainer,
  Tag,
  TagsContainer,
} from './styles'

import expresso from '../../assets/images/type-coffee/expresso.svg'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Counter } from '../counter/Counter'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="Café expresso" />

      <TagsContainer>
        <Tag>Tradicional</Tag>
        <Tag>especial</Tag>
      </TagsContainer>

      <h2>Expresso Tradicional</h2>
      <p>O Tradicional café feito com água quente e grãos moídos</p>

      <Buy>
        <h3>
          <span>R$</span> 9,90
        </h3>

        <ActionContainer>
          <Counter />
          <Link to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </ActionContainer>
      </Buy>
    </CoffeeCardContainer>
  )
}
