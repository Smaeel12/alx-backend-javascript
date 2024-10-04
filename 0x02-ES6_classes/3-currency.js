export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}