import styled from 'styled-components'

type ButtonProps = {
  select?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  width: 100%;
  max-width: 178px;
  height: 51px;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};

  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.select ? props.theme.purple : props.theme.baseButton)};

  > svg {
    color: ${(props) => props.theme.purple};
  }

  > p {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  :hover {
    background: ${(props) => props.theme.baseHover};
  }

  :focus {
    box-shadow: none;
  }
`
