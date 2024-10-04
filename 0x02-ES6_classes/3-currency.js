export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
    return new Proxy(this, {
      get: (obj, key) => Reflect.get(obj, key),
      set: (obj, key, val) => Reflect.set(obj, key, val),
    });
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
