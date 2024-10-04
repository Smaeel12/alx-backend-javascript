import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
    return new Proxy(this, {
      get: (obj, key) => Reflect.get(obj, key),
      set: (obj, key, val) => Reflect.set(obj, key, val),
    });
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
