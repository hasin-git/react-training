import React from 'react';
import JsonData from './data.json';

var tableStyle = {
  border: '1px solid black',
};

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.viewProduct = this.viewProduct.bind(this);
  }
  componentDidMount() {
    this.setState({ products: JsonData });
  }
  viewProduct(id) {
    this.props.history.push(`/view-product/${id}`);
  }
  render() {
    return (
      <React.Fragment>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((info) => (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.productname}</td>
                <td>{info.quantity}</td>
                <td>{info.price}</td>
                {/* <td>
                  <button
                    style={{ marginLeft: '10px' }}
                    onclick={() => this.viewProduct(info.id)}
                    className="btn btn-info"
                  >
                    View{' '}
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default ProductList;
