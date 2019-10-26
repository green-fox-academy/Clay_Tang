'use strict';

function checkNumber(y_coordinate, x_coordinate, wholeBoard) {
  wholeBoard.forEach(value => {
    if (value[0] === y_coordinate) {
      value.forEach((value2, index) => {
        if (index === x_coordinate) {
          if (value2.value !== 0) {
            return true;
          } else {
            return false;
          }
        }
      })
    }
  })
}

module.exports = checkNumber;