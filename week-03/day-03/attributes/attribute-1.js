'use strict';

let image = document.querySelector('img');
let imgUrl = image.getAttribute('src');
image.setAttribute('src', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3735846742,3170972484&fm=26&gp=0.jpg');

let link = document.querySelector('a');
link.setAttribute('href', imgUrl);

let button2nd = document.querySelector('.this-one');
button2nd.setAttribute('disabled', 'disabled');
button2nd.textContent = "Don't click me!";