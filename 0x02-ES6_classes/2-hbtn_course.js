export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('Name must be a string'); })();
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError('Length must be a number'); })();
    this._students = Array.isArray(students) && students.every((val) => typeof val === 'string')
      ? students
      : (() => { throw new TypeError('Students must be an array of strings'); })();

    return new Proxy(this, {
      get: (object, key) => {
        if (key === 'name') {
          return object._name;
        } if (key === 'length') {
          return object._length;
        } if (key === 'students') {
          return object._students;
        }
        return undefined;
      },
      set: (object, key, value) => {
        const types = {
          name: 'a string',
          length: 'a number',
          students: 'an array of strings',
        };
        if (key === 'name' && typeof value === 'string') {
          object._name = value;
        } else if (key === 'length' && typeof value === 'number') {
          object._length = value;
        } else if (key === 'students' && Array.isArray(value) && value.every((val) => typeof val === 'string')) {
          object._students = value;
        } else {
          throw new TypeError(`${key.charAt(0).toUpperCase() + key.slice(1)} must be ${types[key]}`);
        }
        return true;
      },
    });
  }
}
