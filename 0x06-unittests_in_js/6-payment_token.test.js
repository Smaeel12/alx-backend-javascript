const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/* eslint-disable */
describe('sendPaymentRequestToApi', () => {
  it('Testing...', (done) => {
    getPaymentTokenFromAPI(true).then(result => {
		expect(result).to.deep.equal({data: 'Successful response from the API' });
		done();
	});
  });
});
/* eslint-disable */
