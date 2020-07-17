import React from 'react'
import { CardTitle, CardText } from 'reactstrap';

const Product = ({ price, inventory, name, img, description }) => (

  <div>
    <CardTitle>{name}</CardTitle>
      <CardText>
        <img src={img} width='90' alt='' />
        <p> {description} </p>
      </CardText>
         &#36;{price}{inventory ? ` In Stock. ${inventory}` : null}
  </div>
)

export default Product
