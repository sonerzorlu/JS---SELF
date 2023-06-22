'use strict';
// console.log(document.querySelector('.between'));

// document.querySelector('.message').textContent='correct Number';
// console.log(document.querySelector('.message'));
// document.querySelector('.number').textContent=13
// document.querySelector('.number').textContent=2

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=23

const random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const winBodyColor = document.querySelector('.div');
// document.querySelector('.number').textContent = random;


document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number';
  } else if (guess === random) {
    document.querySelector('.message').textContent = '❤️Correct Number😍👌😘🎗️';
    winBodyColor.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = 'random';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'far and far bigger';
      score--;
      document.querySelector('.score').textContent = score;
      winBodyColor.style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'lost the game';
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Close but smaller';
      score--;
      document.querySelector('.score').textContent = score;
      winBodyColor.style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'lost the game';
    }
  }
  console.log(random);
});
//? PLAY AGAIN 
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  winBodyColor.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
