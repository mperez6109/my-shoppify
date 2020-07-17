import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Card, CardBody, Button } from 'reactstrap';

let cardStyle = {
  width: '80%'
}

const ProductItem = ({product, onAddToCartClicked, onRemoveFromCartClicked, onIncreaseQuanityClicked, onDecreaseQuantityClicked }) => (
  <div style={{ marginBottom: 20, marginLeft: 20}}>
  <Card style={cardStyle}>
    <CardBody>
    <Product
      name={product.name}
      img={product.img}
      description={product.description}
      price={product.price}
      inventory={product.inventory} />
    <Button color="primary"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to Cart' : 'Sold Out'}
    </Button>
    </CardBody>
    </Card>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onIncreaseQuanityClicked: PropTypes.func.isRequired,
  onDecreaseQuantityClicked: PropTypes.func.isRequired
}

export default ProductItem
