// Exercise
// Write a function to solve Josephus Problem. The program should ask for a number, this number represents how many people are in the "game". The return value should be the number of the "winning" seat.

// Examples
// number of people	number of the winning seat
// 1	1
// 2	1
// 3	3
// 7	7
// 12	9
// 41	19


function Josephus(num) {
  let pplGroup = [];
  for (let i = 1; i <= num; i++) {
    pplGroup.push(i);
  }
  
  while (true) {
    if (pplGroup.length % 2 === 0) {
      pplGroup = pplGroup.filter(function (value, index) {
        if (index % 2 === 0) {
          return value;
        }
      })
    } else {
      pplGroup = pplGroup.filter(function (value, index) {
        if (index % 2 === 0) {
          return value;
        }
      })
      let temp = pplGroup[pplGroup.length - 1];
      pplGroup.splice((pplGroup.length - 1), 1);
      pplGroup.splice(0, 0, temp);
    }
    if (pplGroup.length === 1){
      return pplGroup;
    }

  }
}

console.log(Josephus(1));
console.log(Josephus(2));
console.log(Josephus(3));
console.log(Josephus(7));
console.log(Josephus(12));
console.log(Josephus(41));