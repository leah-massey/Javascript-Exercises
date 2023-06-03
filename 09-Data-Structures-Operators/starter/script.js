'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },

    order: function (startIndex, mainIndex) {
      return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
  },
};

//* DESTRUCTURING AN OBJECT
//* These new variable names must exactly match the property names of the object. The order you write them, however doesn't matter.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//* We can rename the variables in the destructured object like this: (really useful when dealing with third party data  )
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(`renamed variables: ${(restaurantName, hours, tags)}`);

// * DEFAULT VALUES
// * (in this case []) can be added in case there isn't a property matching the variable name
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//* MUTATING VARIABLES
//* Must always be in parenthesis (otherwise program is expecting a function)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
//console.log(a, b); // a is now 23, b is now 7.

const nested = [2, 4, [5, 6]];

//* NESTED OBJECTS

const {
  fri: { open, close },
} = openingHours;
console.log(`open:`, open, `close:`, close);

//destructure the first and last elements of the array
const [first, , last] = nested;
console.log(first, last);

//nested destructuring of the same two elements
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values (when we don't know the array - useful when we get data from an api)
//const [p, q, r] = [8, 9] = this won't work as 'r' doesn't have a value
const [p = 1, q = 1, r = 1] = [8, 9]; //this will now work and 'r' will have the value of 1
