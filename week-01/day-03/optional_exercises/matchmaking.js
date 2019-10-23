'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
const boys = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];

function makingMatches(array1, array2) {
  let newArray = [];
  for (let i = 0; i < (array1.length > array2.length ? array1.length : array2.length); i++) {
    if (array1[i] && array2[i]) {
      newArray.push(array1[i]);
      newArray.push(array2[i]);
    } else if (array1[i]) {
      newArray.push(array1[i]);
    } else {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

console.log(makingMatches(girls, boys));

module.exports = makingMatches;
