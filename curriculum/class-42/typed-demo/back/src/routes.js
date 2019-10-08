'use strict';

const express = require('express');
const router = express.Router();

let count = 0;

router.get('/count', (req, res) => {
  res.status(200).send({ count });
});

router.post('/count', (req, res) => {
  res.status(200).send({ count: count + 1 });
});

module.exports = router;