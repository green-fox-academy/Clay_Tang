'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var side1 = 20;
var side2 = 30;
var side3 = 10;

console.log(`Surface Area: ${(side1 * side2 + side2 * side3 + side3 * side1) * 2}`);
console.log(`Volume: ${side1 * side2 * side3}`);