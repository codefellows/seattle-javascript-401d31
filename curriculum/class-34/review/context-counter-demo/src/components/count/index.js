import React from 'react';

import { CounterContext } from '../../context/counter-context.js';

class Count extends React.Component {

  static contextType = CounterContext;

  render() {

    const countStyle = {
      display: 'inline-block',
      fontSize: '1em',
      border: '2px solid #444',
      borderRadius: '50%',
      lineHeight: '5em',
      textAlign: 'center',
      width: '5em',
    }

    return (
      <div style={countStyle}>
        {this.context.count}
      </div>
    )
  }

}

export default Count;