import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CouterProps {
  counter: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export function Counter({
  counter,
  handleIncrement,
  handleDecrement,
}: CouterProps) {
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
