const Q = require('@nmq/q/client');

const useQ = (q) => {

  const queue = new Q(q);

  const subscribe = (event, callback) =>
    queue.subscribe(event, (payload) => callback(payload));

  const publish = (q, event, message) =>
    Q.publish(q, event, message);

  return [publish, subscribe];

};

export default useQ;