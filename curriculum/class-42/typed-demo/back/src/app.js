'use strict';

const express = require('express');
const morgan = require('morgan');

const router = require('./routes');

const app = express();
app.use(morgan('dev'));

app.use(router);

module.exports = {
  app,
  start: () => {
    app.listen(4000, () => {
      console.log('App is running on port 3000');
    })
  },
}