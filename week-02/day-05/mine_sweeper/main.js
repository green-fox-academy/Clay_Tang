'use strict';

const getRandom = require('./getRandom');

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
];

const title = [];

const wholeBoard = [];

rl.question('How big the game play should be (n)? WARNING: n MUST be below than 52!! \n> ', (input1) => {
  rl.question(`How many mines you'd like to find (k)? WARNING: k MUST be less than ${input1**2}!! \n> `, (input2) => {
    for (let i = 0; i <= parseInt(input1); i++) {
      if (i === 0) {
        title.push(new Individual(' '));
      } else {
        title.push(new Individual(i.toString()));
      }
    }
    wholeBoard.push(title);
    for (let i = 0; i < parseInt(input1); i++) {
      let eachRow = [];
      eachRow.push(new Individual(rowName[i]));
      for (let j = 0; j < parseInt(input1); j++) {
        eachRow.push(new Individual());
      }
      wholeBoard.push(eachRow);
    }
    // console.log(wholeBoard[2][1].value);

    // console.log(...title);
    wholeBoard.forEach(value => {
      let temp = [];
      value.forEach(value1 => {
        temp.push(value1.shown);
      })
      console.log(...temp);
    })

    rl.question(`What field to reveal?\n> `, (input3) => {

      rl.close();
    })

  })
})