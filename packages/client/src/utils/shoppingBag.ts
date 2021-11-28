export type ItemType = {
  quantity: number
  price: number
  image: string
  name: string
  color: string
  size: string
  id?: string
}

type ItemsType = {
  [key: string]: ItemType[]
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
    if (!this.items) {
      this.items = {
        [item.id!]: [{ ...item }],
      }
    } else {
      const itemArr = this.items[item.id!]
      if (itemArr) {
        let found = false
        for (let i = 0; i < itemArr.length; i++) {
          if (itemArr[i].color === item.color) {
            if (itemArr[i].size === item.size) {
              itemArr[i].quantity += item.quantity
              found = true
              return
            }
          }
        }
        if (!found) {
          itemArr.push({ ...item })
        }
      } else {
        this.items[item.id!] = [{ ...item }]
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
  color: string
  size: string
  id: string

  constructor(
    quantity: number,
    price: number,
    name: string,
    color: string,
    size: string,
    image: string,
    id: string
  ) {
    this.quantity = quantity
    this.price = price
    this.image = image
    this.name = name
    this.color = color
    this.size = size
    this.id = id
  }

  getPrice() {
    return this.price
  }

  getQuantity() {
    return this.quantity
  }
}
