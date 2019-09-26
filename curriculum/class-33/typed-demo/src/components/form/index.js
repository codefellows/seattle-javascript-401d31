import React, { useState, useContext } from 'react';
import request from '../../util/request';
import { Message } from '../../schema.js';

import { AppContext } from '../../'

const Form = (props) => {
  const [messageInput, setMessage] = useState('');
  const context = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    request({
      url: 'http://localhost:3300/messages',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: new Message(messageInput)
    }, (data) => {
      context.addMessage(data);
      setMessage('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo Item"
        value={messageInput}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  )
}

export default Form;