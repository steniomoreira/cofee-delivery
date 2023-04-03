import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;
  margin: 0 auto;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.yellowDark};
    line-height: 130%;
  }

  > p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.baseSubTitle};
    line-height: 130%;
    margin-bottom: 1.75rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Info = styled.div`
  position: relative;
  width: 100%;
  max-width: 526px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: 6px 36px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 6px 36px;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );

    margin: -1px;
    z-index: -1;
  }
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

export const DescriptionInfo = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme[COLORS[props.iconColor]]};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.baseText};
  }
`
