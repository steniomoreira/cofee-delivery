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
import { fetchCity } from '../../services/coffeServiçes'
import { useEffect, useState } from 'react'

interface Location {
  city: string
  principalSubdivisionCode: string
}

export function Header() {
  const [location, setLocation] = useState<Location>()

  function getCity() {
    fetchCity().then((response) => {
      setLocation(response)
    })
  }

  useEffect(() => {
    getCity()
  }, [])

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </Link>

        <ActionContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>
              {`${location?.city}, ${location?.principalSubdivisionCode}`}
            </span>
          </LocationContainer>

          <Cart to="/checkout" title="Checkout" />
        </ActionContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
