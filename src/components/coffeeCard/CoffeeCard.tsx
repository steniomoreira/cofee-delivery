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
import { useCoffeeCartContext } from '../../hooks/useCoffeeCart'

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
}

export function CoffeeCard({ coffee }: CooffeeProps) {
  const { addCoffeeCart } = useCoffeeCartContext()
  const [counter, setCounter] = useState(0)

  const { imageUrl, name, tags, description, price } = coffee

  function handleIncrement() {
    setCounter((state) => state + 1)
  }

  function handleDecrement() {
    if (counter === 0) return
    setCounter((state) => state - 1)
  }

  function calculatedTotalPrice() {
    if (counter > 0) {
      return counter * price
    }

    return price
  }

  function handleAddCoffeeCart() {
    const totalPrice = calculatedTotalPrice()

    addCoffeeCart({
      order: new Date().getTime(),
      imageUrl,
      name,
      totalPrice,
      price,
      counter,
    })
    setCounter(0)
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
          <span>R$</span>{' '}
          {priceFormatter.format(calculatedTotalPrice()).replace('R$', '')}
        </h3>

        <ActionContainer>
          <Counter
            counter={counter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <button
            onClick={() => handleAddCoffeeCart()}
            disabled={counter === 0}
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionContainer>
      </Buy>
    </CoffeeCardContainer>
  )
}
