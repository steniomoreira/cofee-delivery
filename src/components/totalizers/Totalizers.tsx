import { TotalizersContainer, Item } from './styles'

export function Totalizers() {
  return (
    <TotalizersContainer>
      <Item>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </Item>
      <Item>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </Item>
      <Item>
        <span>Total</span>
        <span>R$ 33,20</span>
      </Item>
    </TotalizersContainer>
  )
}
