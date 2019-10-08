'use strict';
const app = require('../app').app;
const supertest = require('supertest');
const request = supertest(app);

describe('Testing my route', () => {
  it('Should be able to fetch count', (done) => {
    request
      .get('/count')
      .expect(200)
      .then(response => {
        expect(response.body.count).toBe(0);
        done();
      });
  });

  it('Should fail on bad route', (done) => {
    request
      .get('/superbad')
      .expect(404, done);
  });

  it('should increment count', (done) => {
    request
      .post('/count')
      .expect(200)
      .then(response => {
        expect(response.body.count).toBe(1);
        done();
      });
  });
});