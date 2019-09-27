import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Form from './components/form';
import MessageList from './components/messageList';
import Settings from './components/settings/settings-context.js';

import request from './util/request.js';

export const AppContext = React.createContext();

const App = () => {
  const initialState = {
    users: [],
    messages: []
  }

  const AppReducer = (state, action) => {
    switch (action.type) {
      case "FETCHING_MESSAGES":
        return { ...state, messages: action.data };
      case "CREATE_MESSAGES":
        return { ...state, messages: [...state.messages, action.data] }
      case "DELETE_MESSAGES":
        return { ...state, messages: state.messages.filter(message => message.id !== action.data) }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    request({ url: 'http://localhost:3300/messages' }, (fetchedMessages) => {
      dispatch({ type: "FETCHING_MESSAGES", data: fetchedMessages });
    });
  }, []);

  // function setMessages(messageData) {
  //   setState({ ...state, messages: messageData });
  // }

  // function deleteMessage(id) {
  // setState({ ...state, messages: state.messages.filter(message => message.id !== id) });
  // }

  // function addMessage(message) {
  // setState({ ...state, messages: [...state.messages, message] });
  // }

  return (
    <React.Fragment>
      <Settings>
        <Header total={state.messages.length} />
      </Settings>
      <AppContext.Provider
        value={{
          data: state,
          deleteMessage: (id) => dispatch({ type: "DELETE_MESSAGES", data: id }),
          addMessage: (data) => dispatch({ type: "CREATE_MESSAGES", data })
        }}
      >
        <MessageList />
        <Form />
      </AppContext.Provider>
    </React.Fragment>
  )
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);