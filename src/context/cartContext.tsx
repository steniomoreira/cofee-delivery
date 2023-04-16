import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type CoffeeCart = {
  order: number
  imageUrl: string
  name: string
  price: number
  totalPrice: number
  counter: number | 0
}

interface CoffeeCartContext {
  coffeeCart: CoffeeCart[]
  addCoffeeCart: (coffee: CoffeeCart) => void
  updateCoffeeCart: (coffee: CoffeeCart) => void
  removeCoffee: (orderRemove: number) => void
}

export const CartContext = createContext({} as CoffeeCartContext)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<CoffeeCart[]>([])

  const addCoffeeCart = useCallback((coffee: CoffeeCart) => {
    if (coffee.counter > 0) {
      setCoffeeCart((state) => [...state, coffee])
    }
  }, [])

  const updateCoffeeCart = useCallback((coffee: CoffeeCart) => {
    setCoffeeCart((stateCart) =>
      stateCart.map((cart) => (cart.order === coffee.order ? coffee : cart)),
    )
  }, [])

  const removeCoffee = useCallback(
    (orderRemove: number) => {
      const updateListCoffees = coffeeCart.filter(
        (coffee) => coffee.order !== orderRemove,
      )

      setCoffeeCart(updateListCoffees)
    },
    [coffeeCart],
  )

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@stn-coffee-delivery:cart-1.0.0',
    )

    if (storedStateAsJSON) {
      setCoffeeCart(JSON.parse(storedStateAsJSON))
    }
  }, [])

  useEffect(() => {
    if (coffeeCart.length > 0) {
      const stateJSON = JSON.stringify(coffeeCart)
      localStorage.setItem('@stn-coffee-delivery:cart-1.0.0', stateJSON)
    }
  }, [coffeeCart])

  return (
    <CartContext.Provider
      value={{
        coffeeCart,
        addCoffeeCart,
        updateCoffeeCart,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
