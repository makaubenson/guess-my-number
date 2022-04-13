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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
//console.log(`Secret Number is ${secretNumber}`);

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
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > secretNumber) {
    //when guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      // score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //guess is > secreteNumber but not > than 0
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
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
