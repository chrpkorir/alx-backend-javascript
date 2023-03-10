export default class HolbertonCourse {
  constructor(name, length, students) {
    //Verify attribute types 
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('length must be a number');
    if (Object.getPrototypeOf(students) !== Array.prototype) throe TypeError('students must be an array of strings');
    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('students must be an array of strings');
    });

    // create objects
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Setters
  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype) throw TypeError('name must be a string');
    this._name = newName;
  }

  set students(newStudents) {
    if (Object.getPrototypeOf(newStudents) !== Array.prototype) throw TypeError('students must be an array');
    newStudents.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('students must be an array of strings');
    });
    this._students = newStudents;
  }

  // Getter
	
  get name() {
    return this.name;
  }
  
  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
