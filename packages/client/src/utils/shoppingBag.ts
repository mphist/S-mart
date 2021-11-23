type ItemType = {
  quantity: number
  price: number
  image: string
  name: string
  id?: string
}

type ItemsType = {
  [id: string]: ItemType
}

export class ShoppingBag {
  totalQuantity: number
  totalPrice: number
  items: ItemsType | null

  constructor(quantity = 0, cost = 0, items = null) {
    this.totalQuantity = quantity
    this.totalPrice = cost
    this.items = items
  }

  getTotalQuantity() {
    return this.totalQuantity
  }

  getTotalPrice() {
    return this.totalPrice
  }

  addItem(item: ItemType) {
    if (!this.items)
      this.items = {
        [item.id!]: {
          quantity: item.quantity,
          price: item.price,
          image: item.image,
          name: item.name,
        },
      }
    else if (this.items[item.id!]) {
      this.items[item.id!]['quantity'] += item.quantity
    } else {
      this.items[item.id!] = {
        quantity: item.quantity,
        price: item.price,
        image: item.image,
        name: item.name,
      }
    }
  }

  addQuantity(quantity: number) {
    this.totalQuantity = this.totalQuantity + quantity
  }

  newTotal(newQuantity: number, newCost: number) {
    this.totalPrice = this.totalPrice + newQuantity * newCost
  }
}

export class Item {
  quantity: number
  price: number
  image: string
  name: string
  id: string

  constructor(
    quantity: number,
    price: number,
    name: string,
    image: string,
    id: string
  ) {
    this.quantity = quantity
    this.price = price
    this.image = image
    this.name = name
    this.id = id
  }

  getPrice() {
    return this.price
  }

  getQuantity() {
    return this.quantity
  }
}
