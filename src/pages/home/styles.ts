import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const IntroContainer = styled.div`
  width: 100%;
  background-image: url('./images/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 544px;

  img {
    width: 100%;
    max-width: 476px;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
`

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;

  margin-top: 4.125rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  min-width: 274px;
`

const ITEM_COLORS = {
  yellowDark: 'yellowDark',
  yellow: 'yellow',
  dark: 'baseText',
  purple: 'purple',
} as const

interface ItemIconColor {
  color: 'yellow' | 'yellowDark' | 'dark' | 'purple'
}

export const ItemIcon = styled.div<ItemIconColor>`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[ITEM_COLORS[props.color]]};
  color: ${(props) => props.theme.white};

  border-radius: 50%;
`

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding: 2rem 0;

  header {
    width: 100%;
    max-width: 72rem;
    padding: 0 1rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
`

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  flex: 1;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  &:focus {
    box-shadow: none;
  }
`

export const Tag = styled(Checkbox.Root)`
  background: transparent;
  color: ${(props) => props.theme.yellowDark};
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 100px;

  padding: 0.375rem 0.75rem;
  min-width: 80px;
  height: 25px;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  &[data-state='checked'] {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    box-shadow: none;
  }
`

export const CoffeeList = styled.div`
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  gap: 2.5rem 2rem;

  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`
