export class ShoppingBag {
  quantity: number
  cost: number

  constructor(quantity = 0, cost = 0) {
    this.quantity = quantity
    this.cost = cost
  }

  getQuantity() {
    return this.quantity
  }

  getCost() {
    return this.cost
  }

  addQuantity(quantity: number) {
    this.quantity = this.quantity + quantity
  }

  newTotal(newQuantity: number, newCost: number) {
    this.cost = this.cost + newQuantity * newCost
  }
}
