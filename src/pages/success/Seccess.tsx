import { SuccessContainer, OrderInfo, Info, DescriptionInfo } from './styles'

import imgSuccess from '../../assets/images/img-success.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useCoffeeCartContext } from '../../hooks/useCoffeeCart'

export function Success() {
  const { finishedOrder } = useCoffeeCartContext()

  const { street, number, complement, district, city, uf, typeOfPayment } =
    finishedOrder

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
              {street ? (
                <>
                  Entregar em{' '}
                  <strong>{`${street}, ${number} - ${complement}`}</strong>{' '}
                  <br />
                  {` ${district} - ${city}, ${uf}`}
                </>
              ) : (
                'Endereço de entrega'
              )}
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
              <strong>{typeOfPayment}</strong>
            </p>
          </DescriptionInfo>
        </Info>

        <img src={imgSuccess} alt="Pedido confirmado" />
      </OrderInfo>
    </SuccessContainer>
  )
}
