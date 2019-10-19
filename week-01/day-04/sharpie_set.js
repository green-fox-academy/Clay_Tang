'use strict';
// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

const Sharpie = require('./sharpie.js');

class SharpieSet{

  constructor(){
    this.sharpie_set = [];
    this.sharpie_set.push(new Sharpie('black','1',50));
    this.sharpie_set.push(new Sharpie('blue','2',80));
    this.sharpie_set.push(new Sharpie('red','1',0));
    this.sharpie_set.push(new Sharpie('green','2',0));
  }

  countUsable(){
    let amount = 0;
		for (let i = 0; i < this.sharpie_set.length; i++) {
			if (this.sharpie_set[i].inkAmount > 0) {
				amount++;
			}
		}
		return amount;
  }
  
  removeTrash(){
    this.list = this.list.filter((item) => {
			return item.inkAmount > 0;
		})
  }

}

var new_sharpies = new SharpieSet();
console.log(new_sharpies.countUsable());
