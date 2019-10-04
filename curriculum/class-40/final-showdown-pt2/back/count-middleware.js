'use strict';

module.exports = (data) => (request, response, next) => {
  try {
    const count = data.length;
    request.count = count;
    next()
  } catch (e) {
    request.count = null;
    next(e);
  }
};
