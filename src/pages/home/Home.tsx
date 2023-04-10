import { useCallback, useEffect, useState } from 'react'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../../components/coffeeCard/CoffeeCard'
import { fetchCoffees } from '../../services/coffeServiçes'
import {
  BannerContainer,
  CoffeeList,
  CoffeeListContainer,
  DescriptionContainer,
  IntroContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  TitleContainer,
} from './styles'

import imgIntro from '../../assets/images/img-intro.svg'

type CoffeeCartType = {
  id: string
  name: string
  price: number
  counter: number | 0
}

type CooffeeType = {
  id: string
  imageUrl: string
  name: string
  description: string
  tags: Array<string>
  price: number
}

export function Home() {
  const [coffees, setCoffees] = useState<CooffeeType[]>([])
  const [cart, setCart] = useState<CoffeeCartType[]>([])

  const handleAddCoffeeCart = useCallback((coffee: CoffeeCartType) => {
    if (coffee.counter > 0) {
      setCart((state) => [...state, coffee])
    }
  }, [])

  function loadCoffeeList() {
    fetchCoffees().then((data) => {
      setCoffees(data)
    })
  }

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:cart-1.0.0',
    )

    console.log(storedStateAsJSON)

    if (storedStateAsJSON) {
      setCart(JSON.parse(storedStateAsJSON))
    }
    loadCoffeeList()
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)
    localStorage.setItem('@ignite-coffee-delivery:cart-1.0.0', stateJSON)
  }, [cart])

  return (
    <>
      <IntroContainer>
        <BannerContainer>
          <DescriptionContainer>
            <TitleContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TitleContainer>

            <ItemsContainer>
              <Item>
                <ItemIcon color="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </ItemIcon>
                Compra simples e segura
              </Item>
              <Item>
                <ItemIcon color="dark">
                  <Package size={16} weight="fill" />
                </ItemIcon>
                Embalagem mantém o café intacto
              </Item>
              <Item>
                <ItemIcon color="yellow">
                  <Timer size={16} weight="fill" />
                </ItemIcon>
                Entrega rápida e rastreada
              </Item>
              <Item>
                <ItemIcon color="purple">
                  <Coffee size={16} weight="fill" />
                </ItemIcon>
                O café chega fresquinho até você
              </Item>
            </ItemsContainer>
          </DescriptionContainer>

          <img src={imgIntro} alt="" />
        </BannerContainer>
      </IntroContainer>

      <CoffeeListContainer>
        <header>
          <h2>Nossos cafés</h2>
        </header>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              handleAddCoffeeCart={handleAddCoffeeCart}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
