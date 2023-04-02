import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter((state) => state + 1)
  }

  function handleDecrement() {
    if (counter === 0) return

    setCounter((state) => state - 1)
  }
  return (
    <CounterContainer>
      <button onClick={() => handleDecrement()}>
        <Minus size={14} />
      </button>
      <span>{counter}</span>
      <button onClick={() => handleIncrement()}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
