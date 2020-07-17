import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Container, Row, Col } from 'reactstrap'

const App = () => (
  <div>
    <Container fluid="sm">     
      <Row>
        <Col xs={8}><ProductsContainer /></Col>
        <Col xs={4}><CartContainer /></Col>
      </Row>
    </Container>
  </div>
)

export default App

