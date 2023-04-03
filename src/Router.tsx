import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout/DefaultLayout'
import { Checkout } from './pages/checkout/Checkout'
import { Home } from './pages/home/Home'
import { Success } from './pages/success/Seccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
