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

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} ordered at ${time}, going to ${address}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //uses the rest operator to list the first ingredient and then all others within an array
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'John',
};

//G SETs
//* a set is a collection of unique values
//* the order of elements is irrelevant
//* note that there is no way of getting values out of a set. There are no index values
//* if you needed to do this you would use an array
//*

const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta']);
//console.log(ordersSet);
//=> Set(3) {'Pasta', 'Pizza', 'Risotto'}
// note that the duplicate pasta has been removed.

//* check length of set:
//console.log(ordersSet.size);
//=> 3

//* check if element is included in set:
//console.log(ordersSet.has('Pizza'));
//=> true

//* add new elements
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

//console.log(ordersSet);
//=> Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
// note garlic bread only added once as sets only have unique values.

//* delete elements
ordersSet.delete('Pizza');
//onsole.log(ordersSet);
//=>Set(3) {'Pasta', 'Risotto', 'Garlic Bread'}

//* delete all elements
//ordersSet.clear();

//* sets are also iterables. EG below
console.log(new Set('Jonas'));
//=> Set(5) {'J', 'o', 'n', 'a', 's'}

for (const order of ordersSet) console.log(order);
// Pasta
// Risotto
//. Garlic Bread

//* EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//using the spread operator, we can turn the set into an array (below)
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//=> (3) ['Waiter', 'Chef', 'Manager']

//to find ouy how many unique positions there are :
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
//=> 3

console.log(new Set('leahmassey').size);
//returns the number of unique characters in a string
//=> 7

//G LOOPING OBJECTS
//* Property NAMES

const properties = Object.keys(restaurant.openingHours);
//console.log(properties);
//lists an array of the three property names
//=> (3) ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
//console.log(openStr);
//=> We are open on 3 days: thu, fri, sat,

//property names
for (const day of properties) {
  //console.log(day);
}
//lists the three property names:
// thu
// fri
// sat

//* Property VALUES

const values = Object.values(restaurant.openingHours);
//console.log(values);

//* Entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

//G Optional Chaining (?.)
//* if a certain property does not exist then undefined' is returned immediately

//console.log(restaurant.openingHours.mon?.open);
//=> returns 'undefined' as the restaurant doesn't open on a Monday
//* the '?' queries whether the property '.mon' exists. If it doens't, undefined is returned and the '.open' is not read.
//* Without the optional chaining, you woudd get an error message rather than 'undefined'.

//* we can use this multiple times in our logic:
//console.log(restaurant.openingHours?.mon?.open);
//=> returns undefined

//* EXAMPLE
//* loop over the array and log to console whether restuarant is open or closed on teh days

const days = ['mon', 'tue', 'weds', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);

  //set default value of closed if restuarant not open on that day. Also using the //G nullish coalescing operator (??)
}

//* Optional chaining used for checking methods exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//* Optional chaining used for checking arrays

const users = [{ name: 'leah', email: 'hello@leah.com' }];

console.log(users[0].name ?? 'User array empty');

//G FOR-OF LOOPS
//* loops over an array
//* can still use the 'break' key word
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const foodItem of menu2) console.log(foodItem);
//returns a list of all items in the menu
//'item' represents the current ekeemnt of each iteration.

//* .entries
//* this method creates an array of the elements and their corresponding index numbers. (useful when making a numbered list?)
for (const foodItem of menu2.entries()) {
  console.log(`${foodItem[0] + 1}: ${foodItem[1]}`);
}
//makes a nice listed menu
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

//* a destructured version of the above (better!)
for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// this will give the same output as above

//G ASSIGNMENT OPERATORS

//* OR assignment operator
//set default num of guests for any missing
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10; //this is a quicker way than the above.
rest2.numGuests ||= 10;

console.log(rest1, rest2);

//* Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//* AND assignment operator
rest1.owner &&= 'new name'; // nothing will be added to the rest1 object here
rest2.owner &&= 'new name'; // the name "John" will be updated to "new name"

//G The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//* Nullish: null and undefind (not 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//G SHORT CIRCUITING  (&& AND \\)
//* can use any data type, can return any data type
//* there can be any number of values, the first truthy value will be chosen and there will be a short circuit- unless none are truthy, in which case the last is returned

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
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

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
//* when you hear the word 'remaining', this is often useful!

//* where we would write variable names separated by commas

//* collects multiple elements and condense them into an array
//* used on the LH side of the assignment operator (=)
//* pretty much the opposite of the spread operator
//* rest element must be the last element
//* there can only ever be one rest in any destructring assignemnt

//B rest versus spread:

const array = [1, 2, 3, ...[5, 6]]; //spread example
//=> [1, 2, 3, 5, 6]

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
//* EXAMPLE Create add function by compressing all numbers into arrays, then adding.
//* We can accept any number of parameters for a rest pattern
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
console.log(fullMenu);
//=> will return all starters followed by all mains

//* Iterables are : arrays, strings, maps, sets. NOT objects

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

//* using the spread operator to write the function
restaurant.orderPasta(...ingredients);
//=> "Here is your delicious pasta with egg, bean and sausage"

//* EXAMPLE: using the spread operator on objects (even though they're not iterable)

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
//lists all of the restuarant object as well as founded and founder

//* we can also create a shallow copy as with arrays:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //=> "Ristorante Roma"
console.log(restaurant.name); //=> Classico Italiano

//G DESTRUCTURING AN OBJECT

//* give new values to object key value pairs:

restaurant.orderDelivery({
  time: '22:30',
  address: 'Pall Mall',
  mainIndex: 1,
  starterIndex: 2,
});

//* you can update as many or few as you like:

restaurant.orderDelivery({
  address: 'London',
});

//* DESTRUCTURING AN OBJECT
//* These new variable names must exactly match the property names of the object. The order you write them, however doesn't matter.
const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);
//=> returns name openingHours and tags of object

//* RENAME VARIABLES - We can rename the variables in the destructured object like this: (really useful when dealing with third party data  )
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
//console.log(restaurantName, hours, tags);
//=> returns name openingHours and tags of object

// * DEFAULT VALUES
// * (in this case []) can be added in case there isn't a property matching the variable name
const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu, starters);
//=> [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//* MUTATING VARIABLES
//* Must always be in parenthesis (otherwise program is expecting a function)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
//console.log(a, b);
//=> 23 7

//* destructuring NESTED OBJECTS
const {
  fri: { open, close },
} = openingHours;
//console.log(open, close);
//=> 11 23

// * DESTRUCTURING AN ARRAY destructure the first and last elements of the array

const nested = [2, 4, [5, 6]];

const [first, , last] = nested;
//console.log(first, last);
//=> 2, 5,6

// * NESTED ARRAY destructuring of the same two elements
const [i, , [j, k]] = nested;
//console.log(i, j, k);
//=> 2 5 6

// * DEFAULT VALUES (when we don't know the array - useful when we get data from an api)
// const [p, q, r] = [8, 9]  //*this won't work as 'r' doesn't have a value
const [p = 1, q = 1, r = 1] = [8, 9]; //this will now work and 'r' will have the value of 1
