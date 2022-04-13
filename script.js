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

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
