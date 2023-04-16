import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type CoffeeCart = {
  id: string
  name: string
  price: number
  totalPrice: number
  counter: number | 0
}

interface CoffeeCartContext {
  coffeeCart: CoffeeCart[]
  handleAddCoffeeCart: (coffee: CoffeeCart) => void
}

export const CartContext = createContext({} as CoffeeCartContext)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCart[]>([])

  const handleAddCoffeeCart = useCallback(
    (coffee: CoffeeCart) => {
      if (coffee.counter > 0) {
        setCoffeeCart((state) => [...state, coffee])

        const stateJSON = JSON.stringify([...coffeeCart, coffee])
        localStorage.setItem('@ignite-coffee-delivery:cart-1.0.0', stateJSON)
      }
    },
    [coffeeCart],
  )

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:cart-1.0.0',
    )

    if (storedStateAsJSON) {
      setCoffeeCart(JSON.parse(storedStateAsJSON))
    }
  }, [])

  return (
    <CartContext.Provider value={{ coffeeCart, handleAddCoffeeCart }}>
      {children}
    </CartContext.Provider>
  )
}
