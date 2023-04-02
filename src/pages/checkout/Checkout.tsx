import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Input } from '../../components/input/Input'
import {
  CheckoutContainer,
  CompleteOrder,
  ConfirmRequest,
  DescriptionContainer,
  GroupInputsFields,
} from './styles'
import { ButtonSelect } from '../../components/buttonSelect/ButtonSelect'
import { Button } from '../../components/button/Button'

export function Checkout() {
  return (
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
              <Input placeholder="CEP" required maxWidth={200} />
              <Input placeholder="Rua" required />
              <Input placeholder="Número" required maxWidth={200} />
              <Input placeholder="Complemento" maxWidth={348} />
              <Input placeholder="Bairro" required maxWidth={200} />
              <Input placeholder="Cidade" required maxWidth={276} />
              <Input placeholder="UF" required maxWidth={60} />
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
              <ButtonSelect text="Cartão de crédito" select>
                <CreditCard size={16} />
              </ButtonSelect>
              <ButtonSelect text="Cartão de débito">
                <Money size={16} />
              </ButtonSelect>
              <ButtonSelect text="Dinheiro">
                <Bank size={16} />
              </ButtonSelect>
            </GroupInputsFields>
          </CompleteOrder>
        </form>
      </section>

      <section>
        <h2>Café selecionados</h2>
        <ConfirmRequest>
          <Button text="Confirmar Pedido" />
        </ConfirmRequest>
      </section>
    </CheckoutContainer>
  )
}
