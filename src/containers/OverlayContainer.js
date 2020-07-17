import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts, listProductNames } from '../reducers'
import Cart from '../components/Cart'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import ViewCart from '../components/ViewCart'

const OverlayContainer = ({products, productName, total, checkout, removeFromCart, names }) => (
  <div>
  <ViewCart />
    <h2> Your Cart</h2>
    <ProductsList>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onRemoveFromCartClicked={() => removeFromCart(product.id)}
        />
      ))}
    </ProductsList>
    <Cart
      products={products}
      productName={products.name}
      total={total}
      names={ names }
      onCheckoutClicked={() => checkout(products)}
    />
  </div>
  );

OverlayContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

const overlayContainerStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  names: listProductNames(state)
})


const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product)),
  }
}

export default connect(
  mapStateToProps, { 
    checkout, 
    removeFromCart })(OverlayContainer);