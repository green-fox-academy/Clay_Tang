'use strict';

let lastOneContent = document.querySelector('.animals').textContent;

let p = document.querySelectorAll('p');
p.forEach(p => {
  p.textContent = lastOneContent;
})