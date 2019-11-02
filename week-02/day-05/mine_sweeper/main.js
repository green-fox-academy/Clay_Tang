'use strict';

const Individual = require('./class');

const checkMine = require('./checkMine');

const checkNumber = require('./checkNumber');

const checkSurrounding = require('./checkSurrounding');

const setMines = require('./setMines');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var rowName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]; // define rowName array

const title = []; // define game board first line (title)

const wholeBoard = []; // define the game board here

rl.question('How big the game play should be (n)? WARNING: n MUST be below than 52!! \n> ', (input1) => { // asking for the input1 (game board length (n))
  rl.question(`How many mines you'd like to find (k)? WARNING: k MUST be less than ${input1**2}!! \n> `, (input2) => { // ask for the input2 (mines to find (k))
    for (let i = 0; i <= parseInt(input1); i++) {
      if (i === 0) {
        title.push(new Individual(' '));
      } else {
        title.push(new Individual(i.toString()));
      } // set up the game board first line (1 2 3 4 ... etc)
    }
    wholeBoard.push(title);
    for (let i = 0; i < parseInt(input1); i++) {
      let eachRow = [];
      eachRow.push(new Individual(rowName[i])); // push the rowName(from the array) to the index 0 of each row
      for (let j = 0; j < parseInt(input1); j++) {
        eachRow.push(new Individual()); // create individuals for each row
      }
      wholeBoard.push(eachRow); 
    }

    wholeBoard.forEach(value => {
      let temp = [];
      value.forEach(value1 => {
        temp.push(value1.shown);
      })
      console.log(...temp); // show all the 'shown' value of all the individuals
    })

    // set up the random mines here based on the input2 above.
    setMines(input2, wholeBoard);
    console.log(wholeBoard);

    rl.question(`What field to reveal?\n> `, (input3) => { // ask for the field value which would be rowName + first line number

      rl.close();
    })

  })
})