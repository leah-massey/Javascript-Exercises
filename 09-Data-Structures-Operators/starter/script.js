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

  //uses the rest operator to list the first ingredient and then all others within an array
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//G The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//* Nullish: null and undefind (not 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//G SHORT CIRCUITING  (&& AND \\)
//* can use any data type, can return any data type
//* there can be any number of values, the first truthy value will be chosen and there will be a short circuit- unless none are truthy, in whcih case the last is returned

//B OR OPERATOR
//* if the first is true, the operator will immediately return that first value. The other operand won't even be evaluated :

console.log(3 || 'Leah'); // 3
console.log('' || 'Leah'); // Leah
console.log(true || 0); // true
console.log(undefined || null); // null - even though null is also a falsy operator.

//* EXAMPLE showing two ways to to get an answer

//* 1) using ternary operator
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //=> 10

//* 2) using and/or operator (better choice - a lot easier)
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//B AND OPERATOR
//* only true when all of operator is true

console.log(0 && 'jonas'); // short circuits immediately as the 0 is falsy

//* 1)
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//* 2)
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//G REST PATTERNS - destructuring

//* where we would write variable names separated by commas

//* collects multiple elements and condense them into an array
//* used on the LH side of the assignment operator (=)
//* pretty much the opposite of the spread operator
//* rest element must be the last element
//* there can only ever be one rest in any destructring assignemnt

//B rest versus spread:

const array = [1, 2, 3, ...[5, 6]]; //spread example

const [x, y, ...others] = [1, 2, 3, 4, 5, 6]; //rest example
console.log(x, y, others);
//=> 1 2 [3, 4, 5, 6]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//* using rest pattern on an object:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// this will show all weekday openings and NOT saturday

//G REST PATTERNS - functions
//=> we are compressing all numbers into arrays, then adding.
// we can accept any number of parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); //=> [5]
add(3, 5, 7, 2); //=> [17]
add(2, 5, 6); //=> [13]

restaurant.orderPizza('mushrooms', 'onion', 'olives');

//G THE SPREAD OPERATOR

//* Used when building a new array or when passing multiple values into a function.

//* expands an array into individual elements

// * takes all the values of an array and acts in place of writing out each value in the array - i.e when we otherwise write multiple values separated by commas.

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
// console.log(ingredients);

//*using the spread operator to write the function
restaurant.orderPasta(...ingredients);
//=> "Here is your delicious pasta with egg, bean and sausage"

//* EXAMPLE: using the spread operator on objects (even though they're not iterable)

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//* we can also create a shallow copG as with arrays:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //=> "Ristorante Roma"
console.log(restaurant.name); //=> Classico Italiano

//G DESTRUCTURING AN OBJECT

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

// * DESTRUCTURING AN ARRAG destructure the first and last elements of the array

const nested = [2, 4, [5, 6]];

const [first, , last] = nested;
console.log(first, last);

// * NESTED ARRAG destructuring of the same two elements
const [i, , [j, k]] = nested;
console.log(i, j, k);

// * DEFAULT VALUES (when we don't know the array - useful when we get data from an api)
// const [p, q, r] = [8, 9]  //*this won't work as 'r' doesn't have a value
const [p = 1, q = 1, r = 1] = [8, 9]; //this will now work and 'r' will have the value of 1
