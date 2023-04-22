import * as RadioGroup from '@radix-ui/react-radio-group'
import { Controller, useFormContext } from 'react-hook-form'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { ButtonSelect } from '../../../../components/buttonSelect/ButtonSelect'
import { RadioContainer } from './styles'

export function RadiosGroup() {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name="typeOfPayment"
      render={({ field }) => {
        return (
          <RadioContainer
            onValueChange={field.onChange}
            value={field.value}
            defaultValue="Cartão de crédito"
          >
            <RadioGroup.Item value="Cartão de crédito" asChild>
              <ButtonSelect text="Cartão de crédito">
                <CreditCard size={16} />
              </ButtonSelect>
            </RadioGroup.Item>

            <RadioGroup.Item value="Cartão de débito" asChild>
              <ButtonSelect text="Cartão de débito">
                <Bank size={16} />
              </ButtonSelect>
            </RadioGroup.Item>

            <RadioGroup.Item value="Dinheiro" asChild>
              <ButtonSelect text="Dinheiro">
                <Money size={16} />
              </ButtonSelect>
            </RadioGroup.Item>
          </RadioContainer>
        )
      }}
    />
  )
}
