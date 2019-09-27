import React from 'react'

import { CounterContext } from '../../context/counter-context.js';

class Increment extends React.Component {

  static contextType = CounterContext;

  render() {
    return (
      <button onClick={this.context.increment}>+</button>
    )
  }

}

export default Increment;
