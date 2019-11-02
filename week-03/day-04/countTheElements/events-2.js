'use strict';

let list = document.querySelector('ul');
let p = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', event => {
  event.preventDefault();
  p.textContent = list.children.length;
})