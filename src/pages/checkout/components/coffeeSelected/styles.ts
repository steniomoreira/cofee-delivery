import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  @media (max-width: 525px) {
    flex-direction: column-reverse;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;

    @media (max-width: 525px) {
      align-self: flex-end;
      margin-bottom: 1rem;
    }
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
