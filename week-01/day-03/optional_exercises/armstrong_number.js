// What is Armstrong number?
// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.

// Let's demonstrate this for a 4-digit number: 1634 is a 4-digit number, raise each digit to the fourth power, 
// and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634, so it is an Armstrong number.
// For a 3-digit number: 153 is a 3-digit number, raise each digit to the third power, 
// and add: 1^3 + 5^3 + 3^3 = 153, so it is an Armstrong number.
// Exercise
// Write a simple program to check if a given number is an armstrong number. 
// The program should ask for a number. E.g. if we type 371, the program should print out: 
// The 371 is an Armstrong number.

var userInput = process.stdin;

userInput.setEncoding('utf-8');

console.log('Please enter the 3-digits number:')

userInput.on('data', function (data) {
  let hundreds = Math.floor((data / 100));
  let tens = Math.floor((data % 100 / 10));
  let units = data % 10;
  if (hundreds**3+tens**3+units**3===parseInt(data)){
    console.log(`${data} is an Armstrong number.`);
    process.exit()
  } else {
    console.log(`${data} is not an Armstrong number.`);
    process.exit()
  }
})