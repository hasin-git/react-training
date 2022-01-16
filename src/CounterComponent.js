import React from 'react';

export class CounterComponent extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>Counter Demo</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={() => this.increment()}>Increment Counter</button>
        <button onClick={() => this.decrement()}>Decrement Counter</button>
      </React.Fragment>
    );
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
}
