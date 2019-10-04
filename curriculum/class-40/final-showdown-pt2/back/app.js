'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const slugRouter = require('./router.js');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(slugRouter);

app.listen(8080, () => {
  console.log('APP running on port : 8080');
});