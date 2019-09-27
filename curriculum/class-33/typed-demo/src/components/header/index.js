import React from 'react';

import { SettingsContext } from '../settings/settings-context.js';

class Header extends React.Component {

  // static context = SettingsContext

  render() {
    return (
      <SettingsContext.Consumer>
        {context => (
          <>
            <h1 onClick={context.changeTitle}>{context.title}</h1>
            <p>You have {this.props.total} messages</p>
          </>
        )}
      </SettingsContext.Consumer>
    );
  }
}

export default Header;