const sinon = require('sinon');
const { expect } = require('chai');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

/* eslint-disable */
describe('sendPaymentRequestToApi', () => {
  it('Testing normal cases...', () => {
    const calculateNum = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNum.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    sinon.assert.callCount(utils.calculateNumber, 1);
    calculateNum.restore();
  });
});
/* eslint-disable */

