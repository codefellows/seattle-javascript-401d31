'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Custom Middleware
const errorHandler = require('./middleware/server-error.js');
const notFoundHandler = require('./middleware/not-found.js');

// Custom Routes
const authRouter = require('./route/auth.js');
const apiRouter = require('./route/api.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Actual Routes
app.use(authRouter);
app.use(apiRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};