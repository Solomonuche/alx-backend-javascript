export default class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse.verifyType(name, length, students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static verifyType(name, length, students) {
    if (name && typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (length && typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (students && !Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    HolbertonCourse.verifyType(value, this._length, this._students);
    this._name = value;
  }

  set length(value) {
    HolbertonCourse.verifyType(this._name, value, this._students);
    this._length = value;
  }

  set students(value) {
    HolbertonCourse.verifyType(this._name, this._length, value);
    this._students = value;
  }
}
