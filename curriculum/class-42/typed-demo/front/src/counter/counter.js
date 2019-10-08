import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }

    // this.handleRequest = this.handleRequest.bind(this);
  }

  componentDidMount() {
    this.handleRequest();
  }

  handleRequest() {
    fetch('http://localhost:4000/count')
      .then(res => res.json())
      .then(data => this.setState({ count: data }));
  }

  render() {
    return (
      <p className="count">Test</p>
    )
  }
}

export default Counter;