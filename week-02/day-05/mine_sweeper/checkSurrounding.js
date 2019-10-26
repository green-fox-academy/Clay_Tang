'use strict';

function checkSurrounding(y_index, x_index, wholeBoard) {
  let minesCount = 0;
  if (y_index === 1) {
    if (x_index === 1) {
      for (let i = y_index; i <= y_index + 1; i++) {
        for (let j = x_index; j <= x_index + 1; j++) {
          if (checkMine(i, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    } else if (x_index === wholeBoard[1].length - 1) {
      for (let i = y_index; i <= y_index + 1; i++) {
        for (let j = x_index - 1; j <= x_index; j++) {
          if (checkMine(j, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    } else {
      for (let i = y_index; i <= y_index + 1; i++) {
        for (let j = x_index - 1; j <= x_index + 1; j++) {
          if (checkMine(j, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    }

  } else if (y_index === wholeBoard.length - 1) {
    if (x_index === 1) {
      for (let i = y_index - 1; i <= y_index; i++) {
        for (let j = x_index; j <= x_index + 1; j++) {
          if (checkMine(i, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    } else if (x_index === wholeBoard[1].length - 1) {
      for (let i = y_index - 1; i <= y_index; i++) {
        for (let j = x_index - 1; j <= x_index; j++) {
          if (checkMine(j, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    } else {
      for (let i = y_index - 1; i <= y_index; i++) {
        for (let j = x_index - 1; j <= x_index + 1; j++) {
          if (checkMine(j, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    }

  } else {
    if (x_index === 1) {
      for (let i = y_index - 1; i <= y_index + 1; i++) {
        for (let j = x_index; j <= x_index + 1; j++) {
          if (checkMine(i, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    } else if (x_index === wholeBoard[1].length - 1) {
      for (let i = y_index - 1; i <= y_index + 1; i++) {
        for (let j = x_index - 1; j <= x_index; j++) {
          if (checkMine(j, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    } else {
      for (let i = y_index - 1; i <= y_index + 1; i++) {
        for (let j = x_index - 1; j <= x_index + 1; j++) {
          if (checkMine(j, j, wholeBoard)) {
            minesCount++;
          }
        }
      }
    }
  }
  return minesCount;
}

module.exports = checkSurrounding;
