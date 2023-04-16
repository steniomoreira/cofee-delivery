import { useMemo } from 'react'
import { useCoffeeCartContext } from './useCoffeeCart'

export function useTotalizers() {
  const { coffeeCart } = useCoffeeCartContext()

  const totalizer = useMemo(() => {
    return coffeeCart.reduce(
      (acc, coffee) => {
        acc.totalCoffees += coffee.totalPrice
        acc.total = acc.totalCoffees

        return { ...acc, total: acc.total + acc.delivery }
      },
      {
        totalCoffees: 0,
        delivery: 3.5,
        total: 0,
      },
    )
  }, [coffeeCart])

  return totalizer
}
