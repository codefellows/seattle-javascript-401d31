import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './context';

import If from '../if';

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;

    try {
      okToRender = this.context.loggedIn
        && (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : true);
    } catch (e) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.object,
  capability: PropTypes.string,
};

export default Auth;
