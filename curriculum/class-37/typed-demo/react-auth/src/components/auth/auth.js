// Conditionally rendered component wrapper
import React from 'react';
import { LoginContext } from './context';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
    try {
      if (this.props.capability) {
        if (this.context.user.capabilities.includes(this.props.capability)) {
          okToRender = true;
        }
      }
      // okToRender = this.context.loggedIn
      //   && (this.props.capability
      //     ? this.context.user.capabilities.includes(this.props.capability)
      //     : true);
    } catch (e) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    )
  }
}

export default Auth;
