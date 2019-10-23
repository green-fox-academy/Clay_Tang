// Create 5 trees
// Store the data of them in variables in your program
// for every tree the program should store its'
// type
// leaf color
// age
// sex


class Tree {
  constructor(type, leafColor, age, sex) {
    this.type = type;
    this.leafColor = leafColor;
    this.age = age;
    this.sex = sex;
  }
}

var tree1 = new Tree('deciduous', 'red', 38, 'male');
var tree2 = new Tree('evergreen', 'green', 20, 'female');
var tree3 = new Tree('deciduous', 'grey', 50, 'male');
var tree4 = new Tree('evergreen', 'green', 180, 'female');
var tree5 = new Tree('evergreen', 'dark green', 10, 'male');

console.log(tree1, tree2, tree3, tree4, tree5);