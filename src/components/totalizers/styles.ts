import styled from 'styled-components'

export const TotalizersContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 1.5rem;

  li:last-child {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => props.theme.baseText};

  span:last-child {
    text-align: right;
  }
`
