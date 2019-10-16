'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log(
  `The remaining seconds: ${ (24 * 60 * 60) - ( currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds ) }`
  );