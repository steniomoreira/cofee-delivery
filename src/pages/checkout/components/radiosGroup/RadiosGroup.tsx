import * as RadioGroup from '@radix-ui/react-radio-group'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { ButtonSelect } from '../../../../components/buttonSelect/ButtonSelect'
import { RadioContainer } from './styles'

export function RadiosGroup() {
  return (
    <RadioContainer defaultValue="cartao-de-credito">
      <RadioGroup.Item value="cartao-de-credito" asChild>
        <ButtonSelect text="Cartão de crédito">
          <CreditCard size={16} />
        </ButtonSelect>
      </RadioGroup.Item>

      <RadioGroup.Item value="cartao-de-debito" asChild>
        <ButtonSelect text="Cartão de débito">
          <Bank size={16} />
        </ButtonSelect>
      </RadioGroup.Item>

      <RadioGroup.Item value="dinheiro" asChild>
        <ButtonSelect text="Dinheiro">
          <Money size={16} />
        </ButtonSelect>
      </RadioGroup.Item>
    </RadioContainer>
  )
}
