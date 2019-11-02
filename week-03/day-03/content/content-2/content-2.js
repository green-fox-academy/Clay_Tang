'use strict';

let arr = ['apple', 'banana', 'cat', 'dog'];

document.querySelectorAll('li').forEach((li, index) => {
  li.textContent = arr[index];
})

document.querySelector('ul').classList.add('color');
