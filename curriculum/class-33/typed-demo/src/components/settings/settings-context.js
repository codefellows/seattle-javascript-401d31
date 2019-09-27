import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'My Awesome Site',
      changeTitle: this.changeTitle
    }
  }

  changeTitle = () => {
    this.setState({ title: 'React Messenger' });
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingsProvider;
