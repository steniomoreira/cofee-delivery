import { createGlobalStyle } from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.yellowDark};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ul {
    li{
      list-style: none;
    }
  }
`
