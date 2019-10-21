'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(sum(100));
