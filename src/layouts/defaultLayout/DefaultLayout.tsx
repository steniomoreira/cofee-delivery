import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { LayoutDefaultContainer } from './styles'
export function DefaultLayout() {
  return (
    <LayoutDefaultContainer>
      <Header />
      <Outlet />
    </LayoutDefaultContainer>
  )
}
