export type Product = {
  id: number
  type: string
  gender: string
  name: string
  description: string
  price: number
  color: Object
  size: Object
  image: Object
  rating: Object
  soldCount: number
  review: [Review]
}

export type Review = {
  title: string
  rating: number
  description: string
  name: string
}
