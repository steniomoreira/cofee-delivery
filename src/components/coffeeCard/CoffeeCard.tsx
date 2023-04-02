import {
  ActionContainer,
  Buy,
  CoffeeCardContainer,
  Tag,
  TagsContainer,
} from './styles'

import expresso from '../../assets/images/type-coffee/expresso.svg'
import { Counter } from '../counter/Counter'
import { Cart } from '../cart/Cart'

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
          <Cart to="/checkout" title="Checkout" secondary />
        </ActionContainer>
      </Buy>
    </CoffeeCardContainer>
  )
}
