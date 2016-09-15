const expect = require('expect');
const lambda = require('lambda-wrapper');
const lambdaFunc = require('../src/index.js');

const testEvent = {
  key: 'ok'
};
const testEventErr = {};

lambda.init(lambdaFunc);

describe('lambda-skeleton', function() {
  this.timeout(3000);
  it('Returns the key of the input', (done) => {
    lambda.run(testEvent, (error, response) => {

      if (error) return done(error);

      expect(response.key).toMatch(/ok/);
      done();
    });
  });

  it('Returns an error if key is missing', (done) => {
    lambda.run(testEventErr, (error, response) => {

      expect(error.message).toMatch(/missing/);
      done();
    });
  });
});
