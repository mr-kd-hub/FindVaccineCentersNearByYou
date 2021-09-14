'use strict';
// const score0 = document.getElementById('score--0').textContent;
//const score1 = document.getElementById('score--1').textContent;
//const score0 = document.getElementById('score--0');
//const current0 = document.getElementById('current--0');
//const score1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const scores = [0, 0];
const score0 = 0;
const score1 = 0;
let currentScore = 0;
let activePlayer = 0;

function btnNewGame() {
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  dice.classList.add('hide'); //initially hide the dice image
}
function btnRollDice() {
  //generate random number between 1 to 6
  const randDice = Math.ceil(Math.random() * 6);
  //display dice
  dice.classList.remove('hide');
  dice.src = `dice-${randDice}.png `;
  //chek for condition
  if (randDice === 1) {
    //switch player
  } else {
    //add dice to current score
    currentScore = currentScore + randDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  //chek for number 1 condition if true switch to next player
}

function btnHold() {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //switch
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
