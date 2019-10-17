'use strict';

const Thing = require('./thing.js');
const Fleet = require('./fleet.js');

// const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

class FleetOfThings{

  constructor() {}
  
  main(){
    var item1 = new Thing('Get milk');
    var item2 = new Thing('Remove the obstacles');
    var item3 = new Thing('Stand up');
    var item4 = new Thing('Eat lunch');
    item3.complete();
    item4.complete();

    this.fleet = new Fleet;
    this.fleet.add(item1);
    this.fleet.add(item2);
    this.fleet.add(item3);
    this.fleet.add(item4);
 
  }

  print(){

    this.fleet.getThings().forEach((thing, i) =>{

      if (thing.getCompleted()){

        console.log(`${i+1}. [x] ${thing.getName()}`);

      } else {

        console.log(`${i+1}. [ ] ${thing.getName()}`);

      }  
    })

  }

}

var f_o_t = new FleetOfThings();
f_o_t.main();
f_o_t.print();

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch
// Hint: You have to create a `print()` method as well