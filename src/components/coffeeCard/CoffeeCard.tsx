import { priceFormatter } from '../../utils/formatter'
import { useState } from 'react'
import { Counter } from '../counter/Counter'

import {
  ActionContainer,
  Buy,
  CoffeeCardContainer,
  Tag,
  TagsContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'

type CoffeeCartType = {
  id: string
  name: string
  price: number
  counter: number | 0
}

type CoffeeType = {
  id: string
  imageUrl: string
  name: string
  description: string
  tags: Array<string>
  price: number
}

interface CooffeeProps {
  coffee: CoffeeType
  handleAddCoffeeCart: (coffee: CoffeeCartType) => void
}

export function CoffeeCard({ coffee, handleAddCoffeeCart }: CooffeeProps) {
  const [counter, setCounter] = useState(0)

  const { id, imageUrl, name, tags, description, price } = coffee

  function handleIncrement() {
    setCounter((state) => state + 1)
  }

  function handleDecrement() {
    if (counter === 0) return
    setCounter((state) => state - 1)
  }

  return (
    <CoffeeCardContainer>
      <img src={imageUrl} alt="" />

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
          <Counter
            counter={counter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <button
            onClick={() => handleAddCoffeeCart({ id, name, price, counter })}
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionContainer>
      </Buy>
    </CoffeeCardContainer>
  )
}
