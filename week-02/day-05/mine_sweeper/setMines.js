'use strict';

function setMines(input2, wholeBoard) {
  for (let i = 0; i < input2; i++) {
    let x = getRandom(wholeBoard.length);
    let y = getRandom(wholeBoard.length);
    if (wholeBoard[x][y].value !== '*') {
      wholeBoard[x][y].value = '*';
    } else {
      i--;
    }

  }
}

function getRandom(num) {
  return Math.ceil(Math.random() * (num - 1));
}


module.exports = setMines;