const sinon = require('sinon');
const { expect } = require('chai');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

/* eslint-disable */
describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleLog;
  beforeEach(() => {
    stub = sinon.stub(utils, 'calculateNumber');
    consoleLog = sinon.spy(console, 'log');
  });
  it('Testing with 100 and 20...', () => {
	stub.returns(120);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLog.calledOnceWith('The total is: 120')).to.be.true;
  });
  it('Testing with 10 and 10...', () => {
	stub.returns(20);

    sendPaymentRequestToApi(10, 10);

    expect(stub.calledWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleLog.calledOnceWith('The total is: 20')).to.be.true;
  });
  afterEach(() => {
    stub.restore();
    consoleLog.restore();
  });
});
/* eslint-disable */
