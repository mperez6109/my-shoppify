import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

describe('Product component', () => {
  it('should render name and price', () => {
    const { component } = setup({ name: 'Test Product', price: 9.99 })
    expect(component.text()).toBe('Test Product - $9.99')
  })

  describe('when given inventory', () => {
    it('should render name, price, and inventory', () => {
      const { component } = setup({ name: 'Test Product', price: 9.99, inventory: 6 })
      expect(component.text()).toBe('Test Product - $9.99 x 6')
    })
  })
})
