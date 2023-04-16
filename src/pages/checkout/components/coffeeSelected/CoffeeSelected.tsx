import { useState } from 'react'
import expresso from '../../../../assets/images/type-coffee/expresso.svg'
import { ButtonSmall } from '../../../../components/buttonSmall/ButtonSmall'
import { Counter } from '../../../../components/counter/Counter'
import {
  CoffeeSelectedContainer,
  Info,
  Details,
  Actions,
  Divider,
} from './styles'

export function CoffeeSelected() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter((state) => state + 1)
  }

  function handleDecrement() {
    if (counter === 0) return
    setCounter((state) => state - 1)
  }

  return (
    <>
      <CoffeeSelectedContainer>
        <Info>
          <img src={expresso} alt="Café expresso" />

          <Details>
            <h2>Expresso Tradicional</h2>
            <Actions>
              <Counter
                counter={counter}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <ButtonSmall text="Remover" />
            </Actions>
          </Details>
        </Info>

        <span>R$ 9,90</span>
      </CoffeeSelectedContainer>

      <Divider />
    </>
  )
}
