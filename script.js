'use strict';
/*
console.log(document.querySelector('.message').textContent);
// Setting new textContent
document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; //setting value of html input
console.log(document.querySelector('.guess').value); //getting value of the input
*/
// Handling Click Events
//Generating a random secret number between 0 and 20
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  //listening for a click event and executing a function
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    //when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //    else if (guess > secretNumber) {
    //     //when guess is too high
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too High';
    //       // score = score - 1;
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       //guess is > secreteNumber but not > than 0
    //       document.querySelector('.message').textContent = '💥 You lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   } else if (guess < secretNumber) {
    //     //when guess is too low
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Too Low';
    //       // score = score - 1;
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       //guess is > secreteNumber but not > than 0
    //       document.querySelector('.message').textContent = '💥 You lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   }

    // REFACTORING CODE TO ADHERE TO DRY PRINCIPLE
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      // score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //guess is > secreteNumber but not > than 0
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generate new secret number
  console.log(secretNumber, `New Secret Number`); //log the secret number
  //   document.querySelector('.score').textContent = 20;
  score = 20; //reset score to 20
  document.querySelector('.score').textContent = score; //manipulate DOM to show the new score
  document.querySelector('body').style.backgroundColor = '#222'; //change background color of the body
  document.querySelector('.number').style.width = '15rem'; //change a html div
  document.querySelector('.number').textContent = '?'; //change textContent of a html tag
  document.querySelector('.guess').value = ''; // reset input value to 0
});
