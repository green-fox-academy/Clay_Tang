'use strict';

let lastOne = document.querySelector('.animals');

// task 1
let p = document.querySelectorAll('p');
// p.forEach(p => {
//   p.textContent = lastOne.textContent;
// })

// task 2
p.forEach(p => {
  p.innerHTML = lastOne.innerHTML;
})