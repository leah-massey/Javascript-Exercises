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
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} ordered at ${time}, going to ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//Y THE SPREAD OPERATOR

// * takes all the values of an array and acts in place of writing out each value in the array - i.e when we need to write multiple values separated by commas.

//* We can only use the spread operator when building an array or when passing values into a function.

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
//=> [1, 2, 7, 8, 9]

console.log(...newArr);
//=> 1 2 7 8 9

//* Creates a new variable that includes all items from mainMenu array, PLUS Gnocchi
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

//* Copy Arrray - using spread operator:
const mainMenuCopy = [...restaurant.mainMenu];

//* Join 2 arrays - using spread operator:
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//* Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Leah';
const letters = [...str, ' ', 'S.'];
console.log(letters);
//=> ["L", "e", "a", "h", " ", "S."]

//* EXAMPLE: using the spread operator to place pasta order
//first, create prompts:
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

//*using the spread operator to write the function
restaurant.orderPasta(...ingredients);
//=> "Here is your delicious pasta with egg, bean and sausage"

//* EXAMPLE: using the spread operator on objects (even though they're not iterable)

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//* we can also create a shallow copy as with arrays:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //=> "Ristorante Roma"
console.log(restaurant.name); //=> Classico Italiano

//Y DESCTRUCTURING AN OBJECT

restaurant.orderDelivery({
  time: '22:30',
  address: 'Pall Mall',
  mainIndex: 1,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'London',
});

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
console.log(a, b); // a is now 23, b is now 7.

//* NESTED OBJECTS
const {
  fri: { open, close },
} = openingHours;
console.log(`open:`, open, `close:`, close);

// * DESTRUCTURING AN ARRAY destructure the first and last elements of the array

const nested = [2, 4, [5, 6]];

const [first, , last] = nested;
console.log(first, last);

// * NESTED ARRAY destructuring of the same two elements
const [i, , [j, k]] = nested;
console.log(i, j, k);

// * DEFAULT VALUES (when we don't know the array - useful when we get data from an api)
// const [p, q, r] = [8, 9]  //*this won't work as 'r' doesn't have a value
const [p = 1, q = 1, r = 1] = [8, 9]; //this will now work and 'r' will have the value of 1
