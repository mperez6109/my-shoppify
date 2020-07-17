import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts, listProductNames } from '../reducers'
import Cart from '../components/Cart'
import ProductsList from '../components/ProductsList'
import { Button } from 'reactstrap';

var divStyle = {
  padding: "2px",
  margin: "0.1em 1em 1em -3.5em",
  width: '3em'
};

const CartContainer = ({ products, productName, total, checkout, removeFromCart, names, quantity}) => (
    <div>
        <Cart
          products={products}
          total={total}
          names={ names }
          quantity = { quantity }
          onCheckoutClicked={() => checkout(products)}
        />
        <ProductsList>
            {products.map(product => (
              <div style={divStyle}>
                <Button color="primary" onClick={ () => removeFromCart(product.id) }>Remove</Button>
              </div>
            ))}
          </ProductsList>
    </div>
);

CartContainer.propTypes = {
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

const mapStateToProps = (state) => {
  console.log('state in mapStateToProps', state)
  const sumValues = obj => Object.values(obj).reduce((a, b) => {
   return a + b
 }, 0);

  return ({
  products: getCartProducts(state),
  total: getTotal(state),
  names: listProductNames(state),
  quantity: sumValues(state.cart.quantityById)
})
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product)),
  }
}

export default connect(
  mapStateToProps, { checkout, removeFromCart })(CartContainer);
