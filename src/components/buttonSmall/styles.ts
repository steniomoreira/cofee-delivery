import styled from 'styled-components'

export const ButtonSmallContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  min-width: 91px;
  height: 32px;
  padding: 0 0.5rem;

  border-radius: 6px;
  border: 0;

  font-size: 0.75rem;
  text-transform: uppercase;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.baseSubTitle};

    svg {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`
