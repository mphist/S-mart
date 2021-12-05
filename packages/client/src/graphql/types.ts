export type Product = {
  id: number
  type: string
  gender: string
  name: string
  description: string
  price: number
  color: { [key: string]: string }
  size: Object
  image: { [key: string]: string[] }
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
