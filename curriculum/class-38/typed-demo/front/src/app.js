import React from 'react';

import LoginProvider from './components/auth/context';
import Login from './components/auth/login';
import Auth from './components/auth/auth';
import Todos from './components/todos';

const App = () => {
  return (
    <LoginProvider>
      <Login />
      <Auth capability="read">
        <Todos />
      </Auth>
    </LoginProvider>
  );
};

export default App;
