import styled from 'styled-components'

export const CounterContainer = styled.div`
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

    :hover {
      svg {
        color: ${(props) => props.theme.purpleDark};
      }
    }

    :focus {
      box-shadow: none;
    }
  }
`
