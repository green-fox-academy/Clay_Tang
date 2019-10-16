'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const dynamically = [[],[],[],[]];
var size = 4;

for (var i = 1; i <= size; i++){
  console.log('0 '.repeat(size - i) + '1 ' + '0 '.repeat(i - 1));
}

