'use strict';

var button = document.querySelector('button');

let count = 0;
button.addEventListener('click', event => {
  if (count === 0) {
    console.log(event.timeStamp);
    count++;
  }
})