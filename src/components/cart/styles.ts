import styled from 'styled-components'

type CartContainerProps = {
  secondary: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
  position: relative;

  span {
    position: absolute;
    top: -8.35px;
    right: -8px;

    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
    font-weight: 700;
    z-index: 1;
  }

  a {
    position: relative;
    width: 38px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    background: ${(props) =>
      props.secondary ? props.theme.purpleDark : props.theme.yellowLight};
    color: ${(props) =>
      props.secondary ? props.theme.baseCard : props.theme.yellowDark};

    :hover {
      background: ${(props) =>
        props.secondary ? props.theme.purple : props.theme.yellowLight};
    }

    :focus {
      box-shadow: 0 0 0 1px
        ${(props) =>
          props.secondary ? props.theme.baseCard : props.theme.yellowDark};
    }
  }
`
