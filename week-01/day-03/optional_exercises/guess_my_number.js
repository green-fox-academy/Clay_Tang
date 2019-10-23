'use strict';

// Write a program where the program chooses a number between 1 and 100. 
// The player is then asked to enter a guess. If the player guesses wrong, 
// then the program gives feedback and ask to enter an other guess until the guess is correct.

// Make the range customizable (ask for it before starting the guessing).
// You can add lives. (optional)


function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}

var target = randomNumber(100);

var userInput = process.stdin;

userInput.setEncoding('utf-8');

console.log(`I've the number between 1-100.\n come and guess it!! if you take more than 7 times to find the answer,\n then you are an idiot!\n go!!!`);

userInput.on('data', function (data) {
  if (target < parseInt(data)) {
    console.log('Too high.');
  } else if (target > parseInt(data)) {
    console.log('Too Low');
  } else if (target === parseInt(data)) {
    console.log('Congratulations. You won!');
    process.exit();
  }
})


// Example
// I've the number between 1-100. You have 5 lives.

// > 20
// Too high. You have 4 lives left.

// > 10
// Too low. You have 3 lives left.

// > 15
// Congratulations. You won!