import styled from 'styled-components'
import { CoffeeCardContainer } from '../../components/coffeeCardBox/styles'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  section {
    > h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      margin-bottom: 15px;
    }

    :last-child {
      width: 100%;
      max-width: 448px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const CompleteOrder = styled(CoffeeCardContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const GroupInputsFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;
`

const COLORS = {
  yellowDark: 'yellowDark',
  yellow: 'yellow',
  dark: 'baseText',
  purple: 'purple',
} as const

interface ColorProps {
  iconColor: 'yellow' | 'yellowDark' | 'dark' | 'purple'
}

export const DescriptionContainer = styled.div<ColorProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[COLORS[props.iconColor]]};
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.baseSubTitle};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseText};
  }
`

export const ConfirmRequest = styled(CoffeeCardContainer)`
  max-width: 448px;
  border-radius: 6px 44px 6px 44px;
`
