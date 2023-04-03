import { SuccessContainer, OrderInfo, Info, DescriptionInfo } from './styles'

import imgSuccess from '../../assets/images/img-success.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderInfo>
        <Info>
          <DescriptionInfo iconColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <p>
              Entregar em <strong>Rua Ana Rocha, 85</strong> <br />
              Guagiru - Caucaia, CE
            </p>
          </DescriptionInfo>

          <DescriptionInfo iconColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>
              Previsão de entrega <br />
              <strong> 20min - 30min</strong>
            </p>
          </DescriptionInfo>

          <DescriptionInfo iconColor="yellowDark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </DescriptionInfo>
        </Info>

        <img src={imgSuccess} alt="Pedido confirmado" />
      </OrderInfo>
    </SuccessContainer>
  )
}
