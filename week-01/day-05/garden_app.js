'use strict';

// The Garden Application
// The task is to create a garden application, so in your main method you should create a garden with flowers and trees. 
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and 
// orange). In the example after creating them you should show the user, how the garden looks like. After that the 
// program should water the garden twice, first with the amount of 40 then with 70. And after every watering the user 
// should see the state of the garden as you can see in the output.

// The output should look like this:

// The yellow Flower needs water
// The blue Flower needs water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 40
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 70
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree doesnt need water
// The orange Tree doesnt need water


// Information on the elements

// The Garden

class Garden {
  constructor() {
    this.garden = [];
  }
  addPlant(plant) {
    if (plant instanceof Plant) {
      this.garden.push(plant);
    }
  }
  watering(amount) {
    console.log(`Watering with ${amount}`);
    let plantsNeedWater = [];
    this.garden.forEach(value => {
      if (value.waterLevel < value.needsWaterLevel) {
        plantsNeedWater.push(value);
      }
    })
    plantsNeedWater.forEach(value => {
      value.waterLevel += amount / plantsNeedWater.length * value.absorbLevel;
    })
    this.getState();
  }
  getState() {
    this.garden.forEach(value => {
      if (value.waterLevel < value.needsWaterLevel) {
        console.log(`${value.color} ${value.type} needs water`);
      } else {
        console.log(`${value.color} ${value.type} doesnt need water`);
      }
    })
  }
}


// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

class Plant {
  constructor(color, waterLevel) {
    this.color = color;
    this.waterLevel = waterLevel;
  }
}


class Flower extends Plant {
  constructor(color, waterLevel = 0) {
    super(color, waterLevel);
    this.type = 'Flower';
    this.absorbLevel = .75;
    this.needsWaterLevel = 5;
  }
}

class Tree extends Plant {
  constructor(color, waterLevel = 0) {
    super(color, waterLevel);
    this.type = 'Tree';
    this.absorbLevel = .4;
    this.needsWaterLevel = 10;
  }
}
// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

var myGarden = new Garden();
myGarden.addPlant(new Flower('yellow'));
myGarden.addPlant(new Flower('blue'));
myGarden.addPlant(new Tree('purple'));
myGarden.addPlant(new Tree('orange'));
myGarden.getState();
myGarden.watering(40);
myGarden.watering(70);
