import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'reactstrap'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/index.js'

const shoppingCartmessage = {
  fontSize: '12px',
  width: '158px',
  backgroundColor: 'WhiteSmoke',
  margin: "1em 1em 1em -0.9em"
}
const shoppingCartmessage2 = {
  fontSize: '12px',
  width: '145px',
  backgroundColor: 'WhiteSmoke',
  margin: "1em 1em 1em -0.5em"
}
var divStyle = {
  background: "#eee",
  width: "162px",
  padding: "20px",
  margin: "1.5em 1.5em 1.5em -3.7em"
};
//this controls the way the products look when they get placed inside the cart
const Cart  = ({ products, total, names, removeFromCart, onCheckoutClicked, onRemoveFromCartClicked, quantity, ...props,  }) => {
  console.log("products", products)
  console.log("names", names)
  console.log("quantity", quantity)

  const hasProducts = products.length > 0
  console.log("props", props)
  console.log(hasProducts)
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        name={product.productTitle}
        img={product.img}
        description={product.description}
        price={product.price}
        quantity={product.inventory}
        key={product.id}
      />
    )
  ) : (
  <div style={shoppingCartmessage}>
   Your Shopping Cart is empty
  </div>
  )

  return (
    <div style={divStyle}>
    <div style={shoppingCartmessage2}>
      <div>{nodes}</div>
      <p> Total Items in Cart: {quantity} </p>
      <p>Total: ${ total }</p>
      <Button color="primary" onClick={onCheckoutClicked} disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </Button>
    </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  removeFromCart: PropTypes.func,
  names: PropTypes.array
}

export default Cart
