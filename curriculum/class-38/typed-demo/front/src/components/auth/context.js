import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = process.env.REACT_APP_API;

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      token: null,
      user: {},
    };
  }

  login = (username, password, type) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    };

    if (type === 'signup') {
      options.body = JSON.stringify({ username, password });
      options.headers = new Headers({
        'Content-Type': 'application/json',
      });
    }

    fetch(`${API}/${type}`, options)
      .then((response) => response.text())
      .then((token) => this.validateToken(token))
      .catch(console.error);
  }

  validateToken = (token) => {
    try {
      const user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log(user);
      this.setLoginState(true, token, user);
    } catch (e) {
      this.setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
  };

  logout = () => {
    this.setLoginState(false, null, {});
  };

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  };

  componentDidMount() {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    this.validateToken(token);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;