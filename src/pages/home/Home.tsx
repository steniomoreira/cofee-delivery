import { useCallback, useEffect, useState } from 'react'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../../components/coffeeCard/CoffeeCard'
import { fetchCoffees, fetchTagsCoffees } from '../../services/coffeServiçes'
import {
  BannerContainer,
  CoffeeList,
  CoffeeListContainer,
  DescriptionContainer,
  IntroContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  Tag,
  TagsContainer,
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

type TagsCoffee = {
  id: number
  value: string
}

export function Home() {
  const [coffees, setCoffees] = useState<CooffeeType[]>([])
  const [tagsCoffee, setTagsCoffee] = useState<TagsCoffee[]>([])
  const [checkedTag, setCheckedTag] = useState('')

  function loadCoffeeList() {
    fetchCoffees().then((data) => {
      setCoffees(data)
    })
  }

  function loadTagsCoffee() {
    fetchTagsCoffees().then((data) => {
      setTagsCoffee(data)
    })
  }

  const handleFilterByTag = useCallback(
    (tag: string) => {
      setCheckedTag((state) => (state !== tag ? tag : ''))

      const filterTag = checkedTag !== tag ? tag : ''

      fetchCoffees(filterTag).then((data) => {
        setCoffees(data)
      })
    },
    [checkedTag],
  )

  useEffect(() => {
    loadCoffeeList()
    loadTagsCoffee()
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
          <TagsContainer>
            {tagsCoffee.map((tag) => (
              <Tag
                key={tag.id}
                value={tag.value}
                checked={checkedTag === tag.value}
                onCheckedChange={() => handleFilterByTag(tag.value)}
              >
                {tag.value}
              </Tag>
            ))}
          </TagsContainer>
        </header>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
