import React from 'react';

import Count from './components/count';
import Increment from './components/increment';
import Decrement from './components/decrement';

import CounterContextProvider from './context/counter-context.js';

const App = () => {

  const containerStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  }

  return (
    <CounterContextProvider>
      <div style={containerStyle}>
        <Decrement />
        <Count />
        <Increment />
      </div>
    </CounterContextProvider>
  )
}

export default App;