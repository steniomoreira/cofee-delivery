import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310px;

  padding: 0 1.25rem 1.24rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px 6px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 120px;
    height: 120px;

    margin-top: -20px;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme.baseSubTitle};
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme.baseLabel};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    margin-bottom: 25px;
  }
`

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
`

export const Buy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.8rem;

  h3 {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;

    > span {
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    position: relative;
    width: 38px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme.purpleDark};
    color: ${(props) => props.theme.baseCard};
    border-radius: 6px;
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 72px;

  font-size: 1rem;
  color: ${(props) => props.theme.baseText};
  background: ${(props) => props.theme.baseButton};

  border-radius: 6px;
  overflow: hidden;

  button {
    border: 0;
    width: 26px;
    height: 38px;

    background: transparent;

    svg {
      color: ${(props) => props.theme.purple};
    }

    :focus {
      box-shadow: none;
    }
  }
`
