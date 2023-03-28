import { ActionContainer, HeaderContainer, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

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

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ActionContainer>
    </HeaderContainer>
  )
}
