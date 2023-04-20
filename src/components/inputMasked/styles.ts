import styled from 'styled-components'

interface InputProps {
  maxWidth?: number
}
export const InputMaskedContainer = styled.div<InputProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth + 'px'};

  & input {
    width: 100%;
    height: 42px;

    border: 1px solid ${(props) => props.theme.baseButton};
    border-radius: 0.25rem;

    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;

    padding: 0.75rem;

    :focus {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.yellowDark};

      ::placeholder {
        color: ${(props) => props.theme.baseInput};
      }
    }

    ::placeholder {
      color: ${(props) => props.theme.baseLabel};
      font-size: 0.75rem;
    }
  }
`

export const InputMaskedError = styled.p`
  font-size: 0.625rem;
  color: ${(props) => props.theme.yellowDark};
`
