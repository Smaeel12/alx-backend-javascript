const sinon = require('sinon');
const { expect } = require('chai');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

/* eslint-disable */
describe('sendPaymentRequestToApi', () => {
  it('Testing...', () => {
	// Stub on the method to check the call args later.
	const stub = sinon.stub(utils, 'calculateNumber').returns(10);
	// Spy on the console.log.
	const consoleLog = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

	// Assert the args used to call the method.
    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
	// Assert on the console.log.
	expect(consoleLog.calledWith('The total is: 10')).to.be.true;

	consoleLog.restore();
	stub.restore();
  });
});
/* eslint-disable */
