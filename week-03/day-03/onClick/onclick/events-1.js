'use strict';

let button = document.querySelector('button');
let div = document.querySelector('div').classList;
button.onclick = () => {
  div.toggle('party');
}
