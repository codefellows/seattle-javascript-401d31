import React, { useState, useEffect } from 'react';

// import io from 'socket.io-client';
// import Q from '@nmq/q/client';

import useForm from './hooks/form.js';
import useSocket from './hooks/socket.js';
import useQ from './hooks/q.js';

// Connect outside of the render cycle ...
// const socket = io.connect('http://localhost:3000');
// const queue = new Q('deeds');

const App = (props) => {

  const handlePublish = (vals) => {
    queuePublish('deeds', 'work', vals);
    socketPublish('words', vals);
  }

  // const [values, setValues] = useState({});
  const [handleChange, handleSubmit, values] = useForm(handlePublish);
  const [queueMessage, setQueueMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});
  const [socketPublish, socketSubscribe] = useSocket();
  const [queuePublish, queueSubscribe] = useQ('deeds');


  // const handleChange = e => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();

  //   Q.publish('deeds', 'work', values);
  //   socket.emit('words', values);

  // };

  useEffect(() => {
    queueSubscribe('work', message => {
      setQueueMessage(message);
    });

    socketSubscribe('incoming', message => {
      setSocketMessage(message);
    });

  }, []);


  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <pre>Queue Values: {JSON.stringify(queueMessage)}</pre>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
      <form onSubmit={handleSubmit}>
        <input name='firstName' placeholder="First Name" onChange={handleChange} />
        <input name='lastName' placeholder="Last Name" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;