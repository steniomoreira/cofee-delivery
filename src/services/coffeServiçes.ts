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

type AddressTypes = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export const fetchAddress = (cep: string) => {
  const url = `https://viacep.com.br/ws/${cep}/json`
  return api.get<AddressTypes>(url).then((response) => response.data)
}

export const fetchCity = () => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client`
  return api.get(url).then((response) => {
    const { city, principalSubdivisionCode } = response.data
    return { city, principalSubdivisionCode }
  })
}
