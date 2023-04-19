import { Input } from '../../components/input/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { ButtonSelect } from '../../components/buttonSelect/ButtonSelect'
import { Button } from '../../components/button/Button'
import { CoffeeSelected } from './components/coffeeSelected/CoffeeSelected'
import { Totalizers } from '../../components/totalizers/Totalizers'
// import { useNavigate } from 'react-router-dom'
// import { fetchAddress } from '../../services/coffeServiçes'
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
  // const [address, setAddress] = useState({})
  // const navigate = useNavigate()

  const methods = useForm<CheckouFormInput>()

  // function handleOnChange(cep: string) {
  //   if (cep.length === 8) {
  //     fetchAddress(cep).then((response) => {
  //       setAddress(response)
  //     })
  //   }
  // }

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
                <Input
                  name="postalCode"
                  placeholder="CEP"
                  maxLength={9}
                  maxWidth={200}
                  required
                />
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
