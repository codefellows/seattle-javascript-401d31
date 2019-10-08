'use strict';

const express = require('express');
const uuid = require('uuid/v4');

const router = express.Router();

const score1 = {
  _id: uuid(),
  name: 'score 1',
  score: 10,
}
const score2 = {
  _id: uuid(),
  name: 'score 2',
  score: 20,
}
const score3 = {
  _id: uuid(),
  name: 'score 3',
  score: 100,
}

let scores = [
  score3,
  score1,
  score2,
]

router.get('/scores', (req, res) => {
  const sortedScores = scores.sort((a, b) => {
    if (b.score > a.score) {
      return 1;
    } else if (b.score < a.score) {
      return -1;
    }
    return 0;
  });
  res.send(sortedScores);
});

router.post('/scores', (req, res) => {
  const newScore = { _id: uuid(), name: req.body.name, score: req.body.score };
  scores.push(newScore);
  res.send(newScore);
});

router.delete('/scores', (req, res) => {
  const deleteId = req.body._id;
  console.log(deleteId);
  scores.forEach((score, idx) => {
    if (score._id === deleteId) {
      scores.splice(idx, 1);
    }
  })
  console.log(scores);
  res.send(scores);
});

router.get('/score-bigger-than/:value', (req, res) => {
  const scoreFilter = req.params.value;
  const largeScores = scores.filter(score => score.value > scoreFilter);
  res.send(largeScores);
});

module.exports = router;