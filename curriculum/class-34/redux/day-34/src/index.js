import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import createStore from './create-store';

const store = createStore();

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
