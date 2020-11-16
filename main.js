Handlebars.registerHelper('total', function (quantity, price) {
  return quantity * price
})

const store = new Store()
const renderer = new Renderer()

renderer.renderProducts(store.products)
renderer.renderCartTotal(store.quantity, store.total)

$('#products-link').on('click', () => {
  renderer.renderProducts(store.products)
})

$('#cart-link').on('click', () => {
  renderer.renderCart(store.cart, store.total)
})

$('#content-container').on('click', '.add-to-cart', function () {
  if ($(this).text() === '+') {
    const productId = $(this).closest('.cart-item').data().id
    store.addToCart(productId)
    renderer.renderCart(store.cart, store.total)
  } else {
    const productId = $(this).closest('.product').data().id
    store.addToCart(productId)
  }

  renderer.renderCartTotal(store.quantity, store.total)
})

$('#content-container').on('click', '.delete-from-cart', function () {
  const productId = $(this).closest('.cart-item').data().id
  store.deleteFromCart(productId)
  renderer.renderCart(store.cart, store.total)
  renderer.renderCartTotal(store.quantity, store.total)
})