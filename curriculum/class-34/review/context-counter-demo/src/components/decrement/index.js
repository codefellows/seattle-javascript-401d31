import React, { useContext } from 'react';

import { CounterContext } from '../../context/counter-context.js'

const Decrement = () => {

  const context = useContext(CounterContext);

  return (
    <button onClick={context.decrement}>-</button>
  )
}

export default Decrement;
