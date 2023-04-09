import { useEffect, useState } from 'react'
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

  function loadCoffeeList() {
    fetchCoffees().then((data) => {
      setCoffees(data)
    })
  }

  useEffect(() => {
    loadCoffeeList()
  }, [])

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
              imageUrl={coffee.imageUrl}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
