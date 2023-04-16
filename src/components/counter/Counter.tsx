import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CouterProps {
  counter: number
  handleIncrement: () => void
  handleDecrement: () => void
  isDisabled?: boolean
}

export function Counter({
  counter,
  handleIncrement,
  handleDecrement,
  isDisabled,
}: CouterProps) {
  const maxlimit = counter >= 20
  const minLimit = counter < 1

  return (
    <CounterContainer>
      <button
        onClick={() => handleDecrement()}
        disabled={isDisabled || minLimit}
      >
        <Minus size={14} />
      </button>
      <span>{counter}</span>
      <button onClick={() => handleIncrement()} disabled={maxlimit}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
