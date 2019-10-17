'use strict';

const Thing = require('./thing.js');
const Fleet = require('./fleet.js');

const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

class FleetOfThings{
  static things_order = 0;
  constructor() {
    this.things = Fleet.things;
    this.completed = Thing.completed;
    
  }
  print(){

  }
}

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well