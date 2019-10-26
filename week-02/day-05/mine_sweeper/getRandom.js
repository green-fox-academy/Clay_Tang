'use strict';

function getRandom(num) {
  let x = Math.ceil(Math.random() * num);
  let y = Math.ceil(Math.random() * num);
  return x, y;
}

module.exports = getRandom;