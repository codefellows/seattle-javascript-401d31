import React from 'react';

// The react context that gets imported by individual child components
export const CounterContext = React.createContext();

// The context provider that wraps all the children
class CounterContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    }
  }

  increment = () => {
    this.handleCounter(this.state.count + 1);
  }

  decrement = () => {
    this.handleCounter(this.state.count - 1);
  }

  handleCounter = (count) => {
    this.setState({ count });
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

export default CounterContextProvider