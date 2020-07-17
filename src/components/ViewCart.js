import React from 'react';
import Cart from './Cart';

export default class ViewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCart: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showCart: true})
    console.log("button clicked")
    
  }
  render() { 
    return (
      <div> 
      <button onClick={this.handleClick}> Show Cart 
        {this.state.showCart ? <Cart />: null }
        </button>

        </div>
        );
  }
}