import { ButtonSmall } from '../../../../components/buttonSmall/ButtonSmall'
import { Counter } from '../../../../components/counter/Counter'
import { useCoffeeCartContext } from '../../../../hooks/useCoffeeCart'
import { priceFormatter } from '../../../../utils/formatter'

import { CoffeeSelectedContainer, Info, Details, Actions } from './styles'

type CoffeeCart = {
  order: number
  imageUrl: string
  name: string
  price: number
  totalPrice: number
  counter: number | 0
}

export function CoffeeSelected() {
  const { coffeeCart, updateCoffeeCart } = useCoffeeCartContext()

  function handleIncrement(coffee: CoffeeCart) {
    updateCoffeeCart({
      ...coffee,
      counter: coffee.counter + 1,
      totalPrice: (coffee.counter + 1) * coffee.price,
    })
  }

  function handleDecrement(coffee: CoffeeCart) {
    if (coffee.counter === 1) return
    updateCoffeeCart({
      ...coffee,
      counter: coffee.counter - 1,
      totalPrice: (coffee.counter - 1) * coffee.price,
    })
  }

  function calculatedTotalPrice(coffee: CoffeeCart) {
    if (coffee.counter > 0) {
      return coffee.counter * coffee.price
    }

    return coffee.price
  }

  return (
    <>
      {coffeeCart.map((coffee) => (
        <CoffeeSelectedContainer key={coffee.order}>
          <Info>
            <img src={coffee.imageUrl} alt={coffee.name} />

            <Details>
              <h2>{coffee.name}</h2>
              <Actions>
                <Counter
                  counter={coffee.counter}
                  handleIncrement={() => handleIncrement(coffee)}
                  handleDecrement={() => handleDecrement(coffee)}
                  isDisabled={coffee.counter === 1}
                />
                <ButtonSmall text="Remover" />
              </Actions>
            </Details>
          </Info>

          <span>{priceFormatter.format(calculatedTotalPrice(coffee))}</span>
        </CoffeeSelectedContainer>
      ))}
    </>
  )
}
