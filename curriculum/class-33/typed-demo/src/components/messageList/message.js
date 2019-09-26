import React from 'react';
import request from '../../util/request';

export default (props) => {

  function handleDelete(e, id) {
    request({ url: `http://localhost:3300/messages/${id}`, method: 'DELETE' }, () => {
      props.delete();
    })
  }


  return (
    <div className="message-container">
      {props.message.content}
      <button onClick={(e) => handleDelete(e, props.message.id)}>Remove</button>
    </div>
  )
}