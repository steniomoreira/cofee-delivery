import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export function useCoffeeCartContext() {
  const useCoffeeCartContext = useContext(CartContext)

  return useCoffeeCartContext
}
