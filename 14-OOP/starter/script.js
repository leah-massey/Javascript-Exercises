'use strict';

//* All constructor functions start with capital letter
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //*never create a methdod inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
//G 1. new empty object is creacted
//G 2. function is called, this = {}
//G 3. {} linked to prototype
//G 4. function alutomatically returns {}

console.log(jonas instanceof Person);
// => true

//* PROTOTYPES
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
// returns his age
//we have access to this because of prototype inheritance.

console.log(Person.prototype.isPrototypeOf(jonas));
//=> true

Person.prototype.species = 'Homo Sapien';
console.log(jonas.species);
//=> Homo Sapien

console.log(jonas.hasOwnProperty('firstName'));
//> true
console.log(jonas.hasOwnProperty('species'));
//> false

console.log(jonas.__proto__);
//=> includes calcAge and also species property

console.log(jonas.__proto__.__proto__);
//> inlcudes object in return

console.log(jonas.__proto__.__proto__.__proto__);
//=> null

console.dir(Person.prototype.constructor);
//=> Person

//* PROTOTYPES OF ARRAYS
const arr = [3, 6, 6, 5, 6, 9, 3]; // same as using new Array = []
console.log(arr.__proto__);
//=> returns all the methods that an array has access to
//=> these methods are inherited from its prototype

console.log(arr.__proto__ === Array.prototype);
//=> true

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
//=> [3, 6, 5, 9]

//* ES6 CLASSES

//*class expression
//const PersonCl = class {}

//* class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // G Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1921);
console.log(jessica);
jessica.calcAge();
jessica.greet();

//* OBJECT.create
// less commonly used, but important to know!

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

const steven = Object.create(PersonProto);
steven.init('steven', 1999);
steven.calcAge();
//=> returns age
