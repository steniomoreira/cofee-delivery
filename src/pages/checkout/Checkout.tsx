import { InputMasked } from '../../components/inputMasked/InputMasked'
import { Input } from '../../components/input/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { ButtonSelect } from '../../components/buttonSelect/ButtonSelect'
import { Button } from '../../components/button/Button'
import { CoffeeSelected } from './components/coffeeSelected/CoffeeSelected'
import { Totalizers } from '../../components/totalizers/Totalizers'
// import { useNavigate } from 'react-router-dom'
import { fetchAddress } from '../../services/coffeServiçes'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CheckoutContainer,
  CompleteOrder,
  ConfirmRequest,
  DescriptionContainer,
  GroupInputsFields,
} from './styles'

type CheckouFormInput = {
  postalCode: string
  street: string
  number: number
  complement?: string
  district: string
  city: string
  uf: string
}

export function Checkout() {
  const methods = useForm<CheckouFormInput>()

  function handleOnChange(postalCode: string) {
    if (postalCode?.length === 9) {
      fetchAddress(postalCode).then((response) => {
        methods.setValue('street', response.logradouro)
        methods.setValue('district', response.bairro)
        methods.setValue('city', response.localidade)
        methods.setValue('uf', response.uf)
      })
    }
  }

  function onSave(data: CheckouFormInput) {
    console.log(data)

    // navigate('/success')
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer>
        <section>
          <h2>Complete seu pedido</h2>
          <form>
            <CompleteOrder>
              <DescriptionContainer iconColor="yellowDark">
                <MapPinLine size={22} />
                <span>
                  <h2>Endereço de Entrega</h2>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </span>
              </DescriptionContainer>

              <GroupInputsFields>
                <InputMasked
                  mask="99999-999"
                  {...methods.register('postalCode')}
                  onChange={(event) => handleOnChange(event.target.value)}
                >
                  <Input name="" placeholder="CEP" maxWidth={200} required />
                </InputMasked>

                <Input name="street" placeholder="Rua" required />
                <Input
                  name="number"
                  placeholder="Número"
                  maxWidth={200}
                  required
                />
                <Input
                  name="complement"
                  placeholder="Complemento"
                  maxWidth={348}
                />
                <Input
                  name="district"
                  placeholder="Bairro"
                  maxWidth={200}
                  required
                />
                <Input
                  name="city"
                  placeholder="Cidade"
                  maxWidth={276}
                  required
                />
                <Input name="uf" placeholder="UF" maxWidth={60} required />
              </GroupInputsFields>
            </CompleteOrder>

            <CompleteOrder>
              <DescriptionContainer iconColor="purple">
                <CurrencyDollar size={22} />
                <span>
                  <h2>Pagamento</h2>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </span>
              </DescriptionContainer>

              <GroupInputsFields>
                <ButtonSelect text="Cartão de crédito">
                  <CreditCard size={16} />
                </ButtonSelect>

                <ButtonSelect text="Cartão de débito">
                  <Bank size={16} />
                </ButtonSelect>

                <ButtonSelect text="Dinheiro" select>
                  <Money size={16} />
                </ButtonSelect>
              </GroupInputsFields>
            </CompleteOrder>
          </form>
        </section>

        <section>
          <h2>Café selecionados</h2>
          <ConfirmRequest>
            <CoffeeSelected />

            <Totalizers />

            <Button
              type="submit"
              text="Confirmar Pedido"
              onClick={methods.handleSubmit(onSave)}
            />
          </ConfirmRequest>
        </section>
      </CheckoutContainer>
    </FormProvider>
  )
}
