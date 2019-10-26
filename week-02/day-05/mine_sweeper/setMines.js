'use strict';

function setMines(input2, wholeBoard) {
  for (let i = 0; i < input2; i++) {
    getRandom(wholeBoard.length);
    wholeBoard[x][y].value = '*';
  }
}

module.exports = setMines;
