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
document.querySelector('.number').textContent = secretNumber;
console.log(`Secret Number is ${secretNumber}`);

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  }
});
