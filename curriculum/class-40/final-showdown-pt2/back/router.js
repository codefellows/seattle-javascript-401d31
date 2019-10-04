'use strict';

const express = require('express');
const router = express.Router();

const Slug = require('./slug');
const count = require('./count-middleware.js');

const slugs = [
  new Slug('Name', 'Some Text'),
  new Slug('New Name', 'New Text'),
];

router.get('/slugs', count(slugs), (request, response) => {
  response.send({ count: request.count, data: slugs });
});

router.patch('/slugs/:id', (request, response) => {
  const updateId = request.params.id;
  const updateData = request.body;

  let results = {};
  slugs.forEach((slug) => {
    if (slug.id === updateId) {
      slug.set(updateData);
      results = slug;
    }
  });
  response.send(results);
});

module.exports = router;