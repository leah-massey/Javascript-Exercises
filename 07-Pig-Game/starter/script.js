'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling of dice

btnRoll.addEventListener('click', function () {
  //generate a random dice roll number
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  //display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRoll}.png`;

  if (diceRoll !== 1) {
    currentScore += diceRoll;
    current0El.textContent = currentScore; //change later
  } else {
  }
});
