// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;
// console.log('up and running!');

/////////////////////////////////
//EXERCISE - thermostat

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is amplitude? - answer - differnece between highest and lowest
// - what is a sensor error? What to do?

// 2) Breaking into sub problems
// - how to deal with errors
// - find max value in array
// - find min value in array
// - subtract max from min

const calcTempAmplitude = function (array) {
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      continue;
    } else if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min - array[i];
    }
  }
  console.log(max - min);
  return max - min;
};

calcTempAmplitude(temperatures);
