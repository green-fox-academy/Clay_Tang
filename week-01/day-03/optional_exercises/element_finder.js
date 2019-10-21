'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven(array) {
  if (array.indexOf(7) === -1) {
    return 'Noooooo';
  } else {
    return 'Hoorray';
  }
}


function containsSeven2(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === 7) {
      return 'Hoorray';
    } else if (!array[i]) {
      return 'Noooooo';
    }
  }
}

containsSeven(numbers);

module.exports = containsSeven;
