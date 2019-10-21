'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var central_line = Math.ceil(lineCount / 2);

for (var i = 1; i <= lineCount; i++) {
  if (i <= central_line) {
    console.log(' '.repeat(central_line - i) + '*'.repeat(2 * (i - 1) + 1));
  } else {
    console.log(' '.repeat(i - central_line) + '*'.repeat((lineCount - i) * 2 + 1));
  }
}
