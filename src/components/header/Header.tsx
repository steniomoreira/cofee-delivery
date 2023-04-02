import { ActionContainer, HeaderContainer, LocationContainer } from './styles'
import { MapPin } from 'phosphor-react'
import { Cart } from '../cart/Cart'

import logoCoffeeDelivery from '../../assets/images/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <ActionContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </LocationContainer>

        <Cart to="/checkout" title="Checkout" />
      </ActionContainer>
    </HeaderContainer>
  )
}
