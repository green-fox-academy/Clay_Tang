'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`


const aj = [3, 4, 5, 6, 7].reverse();
console.log(aj);


const aj2 = [3, 4, 5, 6, 7];
const temp = aj2.map((i) => {
  return i;
});
for (var i = 0; i < aj2.length; i++) {
  aj2[i] = temp[temp.length - 1 - i];
}
console.log(aj2);
