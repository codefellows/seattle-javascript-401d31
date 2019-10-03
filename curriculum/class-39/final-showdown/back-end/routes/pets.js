'use strict';

const express = require('express');
const petRouter = express.Router();

let pets = [
  {_id: '10', name: 'Kali'},
  {_id: '20', name: 'Khal Basil'},
  {_id: '30', name: 'Ginger'},
  {_id: '40', name: 'Snowdrop'},
];

petRouter.get('/pets', (request, response) => {
  response.status(200).json(pets);
});

petRouter.delete('/pets/:id', (request, response) => {
  pets = pets.filter(pet => pet._id !== request.params.id);

  response.status(200).json(pets);
});


module.exports = petRouter;
