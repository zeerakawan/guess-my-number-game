'use strict';

// To get a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button operation
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //To check the empty value
  if (!guess) {
    displayMessage('⚠ No Number!');
  }

  // To check if the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      score = 20;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // To check if the player is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You have lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// To reset the game again
document.querySelector('.again').addEventListener('click', function () {
  //to update the score to default
  document.querySelector('.score').textContent = 20;

  //to update the message box
  displayMessage('Start guessing...');

  //to clear the value in input box
  document.querySelector('.guess').value = '';

  //to update the secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //to update the guess box number
  document.querySelector('.number').textContent = '?';

  //To change the bg
  document.querySelector('body').style.backgroundColor = '#222';

  //to change the width of the guess number
  document.querySelector('.number').style.width = '15rem';
});
