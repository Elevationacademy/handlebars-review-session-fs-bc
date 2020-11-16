
class Renderer {

  renderProducts(products) {
    const source = $('#products-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({ products })
    $('#content-container').empty().append(newHTML)
  }

  renderCart(cart, cartTotal) {
    const source = $('#cart-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({ cart, cartTotal })
    $('#content-container').empty().append(newHTML)
  }

  renderCartTotal(quantity, cartTotal) {
    const source = $('#cart-total-template').html()
    const template = Handlebars.compile(source)
    const a = { quantity, cartTotal }
    const newHTML = template(a)
    $('#cart-info').empty().append(newHTML)
  }
}