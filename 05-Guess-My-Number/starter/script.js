'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'you have won! 🍾';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 32;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20);
console.log(`this is the secretnumber: ${secretNumber}`);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'not valid entry 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct! You have won a point! 🍾';
  } else {
    document.querySelector('.message').textContent = 'Good try, not this time';
  }
});
