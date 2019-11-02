'use strict';

let h1 = document.querySelector('h1');

this.addEventListener('keyup', event => {
  console.log(event);
  h1.textContent = `Last pressed key code is: ${event.keyCode}`;
})