export type ItemType = {
  quantity: number
  price: number
  image: string
  name: string
  color: string
  size: string
  id?: string
}

export type ItemsType = {
  [key: string]: ItemType[] | null
}
