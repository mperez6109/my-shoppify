import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, increaseQuantity, decreaseQuantity } from '../actions'
import { getVisibleIds } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

//added IncreaseQuantity and DecreaseQuantity buttons to 
const ProductsContainer = ({ products, addToCart, increaseQuantity, decreaseQuantity }) => (
  <ProductsList name="">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
        onIncreaseQuantityClicked={() => increaseQuantity(product.id)} 
        onDecreaseQuantityClicked={() => decreaseQuantity(product.id)} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleIds(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart, increaseQuantity, decreaseQuantity }
)(ProductsContainer)
