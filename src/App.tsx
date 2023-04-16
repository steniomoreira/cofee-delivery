import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { CartProvider } from './context/cartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
