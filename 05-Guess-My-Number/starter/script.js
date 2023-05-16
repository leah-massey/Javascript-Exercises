'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'you have won! 🍾';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 32;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'not valid entry 🚫';

    //when playber wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct! You have won a point! 🍾';
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    //change colour when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    //change size of number box when player wins
    document.querySelector('.number').style.width = '30rem';
    //when player doesn't win
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Good try, not this time';
      score--;
    } else {
      document.querySelector('.message').textContent = 'Game over, start again';
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  //change size of secret number box back to original
  document.querySelector('.number').style.width = '15rem';
  //change colour back to original
  document.querySelector('body').style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //hide new secret number
  document.querySelector('.number').textContent = '?';
  //return input box to empty
  document.querySelector('.guess').value = '';

  console.log(secretNumber);
});
