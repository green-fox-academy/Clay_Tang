'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');

setTimeout(pear => {
  console.log('pear')
}, 1000)

setTimeout(melon => {
  console.log('melon')
}, 3000)

setTimeout(grape => {
  console.log('grapes')
}, 5000)