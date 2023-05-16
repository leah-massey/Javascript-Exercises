'use strict';

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// array to be transformed into a string, seperated by '...'
// what is the day ? Index +1

// 2) break into sub problems 
// - transform element to strings 
// - insert the extra text
// - join all elements into one string
// log string to console 
*/

const temperature = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = `${arr[i]} degrees in ${i + 1} day ...`;
    } else {
      arr[i] = `${arr[i]} degrees in ${i + 1} days ...`;
    }
  }
  const forecast = arr.join(' ');
  console.log(forecast);
};

printForecast(temperature);
