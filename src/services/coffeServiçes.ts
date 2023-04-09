import { api } from '../lib/axios'

type CooffeeType = {
  id: string
  imageUrl: string
  name: string
  description: string
  tags: Array<string>
  price: number
}

export const fetchCoffees = () => {
  return api.get<CooffeeType[]>('/coffees').then((response) => {
    return response.data
  })
}
