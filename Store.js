
class Store {
  constructor() {
    this.products = products
    this.cart = []
  }

  addToCart(id) {
    const cartItem = this.cart.find(i => id === i.item.id)

    if (cartItem) {
      cartItem.quantity++
    } else {
      const item = this.products.find(p => p.id === id)
      this.cart.push({ item, quantity: 1 })
    }
  }

  deleteFromCart(id) {
    const index = this.cart.findIndex(i => i.item.id === id)
    if (index === -1) { return }

    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--
    } else {
      this.cart.splice(index, 1)
    }
  }

  get total() {
    const total = this.cart.reduce((acc, item) => acc + item.quantity * item.item.price, 0)
    return total
  }

  get quantity() {
    const quantity = this.cart.reduce((acc, item) => acc + item.quantity, 0)
    return quantity
  }
}