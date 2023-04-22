import { InputMasked } from '../../components/inputMasked/InputMasked'
import { Input } from '../../components/input/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '../../components/button/Button'
import { CoffeeSelected } from './components/coffeeSelected/CoffeeSelected'
import { Totalizers } from '../../components/totalizers/Totalizers'
import { useNavigate } from 'react-router-dom'
import { fetchAddress } from '../../services/coffeServiçes'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import {
  CheckoutContainer,
  CompleteOrder,
  ConfirmRequest,
  DescriptionContainer,
  GroupInputsFields,
} from './styles'
import { RadiosGroup } from './components/radiosGroup/RadiosGroup'
import { useCoffeeCartContext } from '../../hooks/useCoffeeCart'
import { CoffeeCart } from '../../context/cartContext'

type CheckouFormInput = {
  postalCode: string
  street: string
  number: number
  complement?: string
  district: string
  city: string
  uf: string
  typeOfPayment: string
  orders: CoffeeCart[]
}

export function Checkout() {
  const { coffeeCart, closeCart } = useCoffeeCartContext()
  const navigate = useNavigate()

  const methods = useForm<CheckouFormInput>()

  function handleOnChange(postalCode: string) {
    if (postalCode?.length === 9) {
      fetchAddress(postalCode).then((response) => {
        methods.setValue('street', response.logradouro)
        methods.setValue('district', response.bairro)
        methods.setValue('city', response.localidade)
        methods.setValue('uf', response.uf)

        methods.clearErrors()
      })
    }
  }

  function onSave(data: CheckouFormInput) {
    const order = { ...data, orders: coffeeCart }
    closeCart(order)
    navigate('/success')
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
                  name="postalCode"
                  mask="99999-999"
                  onChange={(event) => handleOnChange(event.target.value)}
                  placeholder="CEP"
                  maxWidth={200}
                  minLength={9}
                  required
                />

                <Input name="street" placeholder="Rua" required />
                <Input
                  name="number"
                  type="number"
                  placeholder="Número"
                  maxWidth={200}
                  min={0}
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
                <Input
                  name="uf"
                  placeholder="UF"
                  maxWidth={60}
                  maxLength={2}
                  required
                />
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

              <RadiosGroup />
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
              disabled={coffeeCart.length < 1}
            />
          </ConfirmRequest>
        </section>
      </CheckoutContainer>
    </FormProvider>
  )
}
