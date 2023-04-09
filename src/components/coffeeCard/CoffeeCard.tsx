import { Counter } from '../counter/Counter'
import { Cart } from '../cart/Cart'

import {
  ActionContainer,
  Buy,
  CoffeeCardContainer,
  Tag,
  TagsContainer,
} from './styles'
import { priceFormatter } from '../../utils/formatter'

interface CooffeeProps {
  imageUrl: string
  name: string
  description: string
  tags: Array<string>
  price: number
}

export function CoffeeCard({
  imageUrl,
  name,
  description,
  tags,
  price,
}: CooffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={imageUrl} alt="Café expresso" />

      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>

      <h2>{name}</h2>
      <p>{description}</p>

      <Buy>
        <h3>
          <span>R$</span> {priceFormatter.format(price).replace('R$', '')}
        </h3>

        <ActionContainer>
          <Counter />
          <Cart to="/checkout" title="Checkout" secondary />
        </ActionContainer>
      </Buy>
    </CoffeeCardContainer>
  )
}
