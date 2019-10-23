// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

const Animal = require('./animal.js');

class Farm {
  constructor(slots) {
    this.list = [];
    this.slots = slots;
    this.list.push(new Animal());
    this.list.push(new Animal(70, 80));
    this.list.push(new Animal(100,100));
    this.list.push(new Animal(20,30));
    this.list.push(new Animal(10,30));
  }
  breed(hunger, thirst){
    if (this.slots > 0){
      this.list.push(new Animal(hunger, thirst));
      this.slots--;
    }
  }
  slaughter(){
    let leastHunger = Number.MAX_SAFE_INTEGER;
    let leastHungerIndex = 0;
    this.list.forEach((value, index) => {
      if(value.hunger < leastHunger){
        leastHunger = value.hunger;
        leastHungerIndex = index;
      }
    })
    this.list.splice(leastHungerIndex, 1);
    this.slots++;
  }
}

var newFarm = new Farm(1);
console.log(newFarm);

newFarm.breed(30,40);
console.log(newFarm);

newFarm.breed(50,60);
console.log(newFarm);

newFarm.slaughter();
console.log(newFarm);