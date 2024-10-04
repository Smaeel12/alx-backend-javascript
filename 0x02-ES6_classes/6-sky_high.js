import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    this._floors = floors;
    super(sqft);
    return new Proxy(this, {
      get: (obj, key) => Reflect.get(obj, key),
    });
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
