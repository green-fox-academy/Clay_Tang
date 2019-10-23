'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function moreThan4Candies(param){
  let nameList = [];
  param.forEach(value => {
    if (value.candies > 4) {
      nameList.push(value.name);
    }
  })
  console.log(nameList.join(', ') + ' got more than 4 candies');
}

moreThan4Candies(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandies(param){
  let totalCandies = 0;
  param.forEach(value => {
    totalCandies += value.candies;
  })
  console.log('the average candies: ' + totalCandies / param.length);
}

averageCandies(students);
