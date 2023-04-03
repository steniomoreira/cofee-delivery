import {
  ActionContainer,
  HeaderContainer,
  LocationContainer,
  HeaderWrapper,
} from './styles'
import { MapPin } from 'phosphor-react'
import { Cart } from '../cart/Cart'

import logoCoffeeDelivery from '../../assets/images/logo-coffee-delivery.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </Link>

        <ActionContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>Fortaleza, CE</span>
          </LocationContainer>

          <Cart to="/checkout" title="Checkout" />
        </ActionContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
