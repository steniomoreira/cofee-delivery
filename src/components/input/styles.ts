import styled from 'styled-components'

interface InputProps {
  hasLabelOptional?: boolean
  maxWidth?: number
}

export const InputContainer = styled.div<InputProps>`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.maxWidth + 'px'};

  ::after {
    content: 'Opcional';
    display: ${(props) => (props.hasLabelOptional ? 'block' : 'none')};

    position: absolute;
    top: 0.95rem;
    right: 0.75rem;

    color: ${(props) => props.theme.baseLabel};
    font-size: 0.75rem;
    font-style: italic;
  }

  :focus-within {
    ::after {
      display: none;
    }
  }
`

export const InputFileld = styled.input`
  position: relative;
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
`

export const InputError = styled.p`
  font-size: 0.625rem;
  color: ${(props) => props.theme.yellowDark};
`
