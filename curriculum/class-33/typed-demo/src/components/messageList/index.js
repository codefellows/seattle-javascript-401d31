import React, { useContext } from 'react';
import Message from './message.js';

import { AppContext } from '../../';

export default (props) => {

  const context = useContext(AppContext);

  return (
    <div>
      {context.data.messages.map(message => {
        return (
          <Message
            key={message.id}
            message={message}
            delete={() => context.deleteMessage(message.id)}
          />
        )
      })}
    </div>
  );
}