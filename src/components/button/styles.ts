import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  min-width: 130px;
  height: 46px;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: 0;

  font-size: 0.875rem;
  font-weight: 700;

  text-transform: uppercase;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  opacity: 1;

  :not(:disabled):hover {
    background: ${(props) => props.theme.yellowDark};
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
