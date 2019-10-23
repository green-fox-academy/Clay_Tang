'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(list) {
  return list.indexOf(4) !== -1 && list.indexOf(8) !== -1 && list.indexOf(12) !== -1 && list.indexOf(16) !== -1;
}


console.log(checkNums(listOfNumbers));

module.exports = checkNums;
