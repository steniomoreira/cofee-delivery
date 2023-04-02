import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
  }
`

export const Info = styled.div`
  width: 100%;
  max-width: 255px;

  display: flex;
  justify-content: space-between;
  gap: 20px;

  img {
    width: 64px;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;

  > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.baseSubTitle};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    height: 32px;
  }
`

export const Divider = styled.hr`
  margin: 1.5rem 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
`
