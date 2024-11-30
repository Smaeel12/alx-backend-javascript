const assert = require('assert');
const calculateNumber = require('./0-calcul');

/* eslint-disable */
describe('calculateNumber', () => {
  it('Testing normal cases...', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('Testing pairs...', () => {
    assert.equal(calculateNumber(11.4, 0), 11);
  });
  it('Testing odds...', () => {
    assert.equal(calculateNumber(Math.E, Math.PI), 6);
  });
  it('Testing negatives...', () => {
    assert.equal(calculateNumber(3, -7), -4);
    assert.equal(calculateNumber(-1, 2), 1);
  });
});
/* eslint-disable */
