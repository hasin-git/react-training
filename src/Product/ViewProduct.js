import React from 'react';
import JsonData from './data.json';

export class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      productname: '',
      quantity: 0,
      price: '',
    };
  }
  componentDidMount() {
    console.log('Inisde vire....', this.state.id);
    const items = JsonData;
    this.setState({
      id: items[this.state.id].id,
      productname: items[this.state.id].productname,
      quantity: items[this.state.id].quantity,
      price: items[this.state.id].price,
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>View Product Details</h2>
        <p>Product Id: {this.state.id}</p>
        <p>Product Name: {this.state.productname}</p>
        <p>Quantity: {this.state.quantity}</p>
        <p>Price: {this.state.price}</p>
      </React.Fragment>
    );
  }
}
