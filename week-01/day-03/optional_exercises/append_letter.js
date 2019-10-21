'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 'a');
  }
  return newArray;
}

console.log(appendA(far));

module.exports = appendA;
