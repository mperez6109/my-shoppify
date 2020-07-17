import React from 'react'
import PropTypes from 'prop-types'

//this controls how the Products list on the page. {name} is "Products"
// {children} are the Products and their attributes
const ProductsList = ({ name, children }) => (
  <div>
    
    <h3>{name}</h3>
    <div>{children}</div>

  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired
}

export default ProductsList
