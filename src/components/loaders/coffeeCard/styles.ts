import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const CoffeeCardLoaderContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  gap: 2.5rem 2rem;

  flex-wrap: wrap;
`

export const CoffeeCardLoaderContent = styled.div`
  width: 256px;
  height: 310px;

  padding: 0 1.25rem 1.24rem;
  background: ${(props) => props.theme.baseCardLight};
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const LoaderImage = styled(Skeleton)`
  margin-top: -20px;
  display: block;
`
