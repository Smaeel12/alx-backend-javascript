const assert = require('assert');
const calculateNumber = require('./1-calcul');

/* eslint-disable */
describe('calculateNumber', () => {
	it('Testing normal cases...', () => {
	  assert.equal(calculateNumber('SUM', 1, 3), 4);
	  assert.equal(calculateNumber('SUBTRACT', 5, 3.7), 1);
	  assert.equal(calculateNumber('DIVIDE', 8.2, 3.7), 2);
	  assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	});
	it('Testing devision on zero...', () => {
		assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
	});
	it('Testing odds...', () => {
		assert.equal(calculateNumber('SUM', Math.E, Math.PI), 6);
		assert.equal(calculateNumber('SUBTRACT', Math.E, Math.PI), 0);
		assert.equal(calculateNumber('DIVIDE', Math.E, Math.PI), 1);
	});
	it('Testing negatives...', () => {
		assert.equal(calculateNumber('SUM', -1, 3), 2);
		assert.equal(calculateNumber('SUBTRACT', 5, -3.7), 9);
	});
  });
/* eslint-disable */
