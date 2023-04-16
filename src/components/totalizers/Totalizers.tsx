import { TotalizersContainer, Item } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useTotalizers } from '../../hooks/useTotalizers'

export function Totalizers() {
  const totalizer = useTotalizers()

  return (
    <TotalizersContainer>
      <Item>
        <span>Total de itens</span>
        <span>{priceFormatter.format(totalizer.totalCoffees)}</span>
      </Item>
      <Item>
        <span>Entrega</span>
        <span>{priceFormatter.format(totalizer.delivery)}</span>
      </Item>
      <Item>
        <span>Total</span>
        <span>{priceFormatter.format(totalizer.total)}</span>
      </Item>
    </TotalizersContainer>
  )
}
