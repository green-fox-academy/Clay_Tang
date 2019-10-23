'use strict';
// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  constructor(gasAmount = Number.MAX_SAFE_INTEGER) {
    this.gasAmount = gasAmount;

  }
  refill(car) {
    if (this.gasAmount >= car.capacity) {
      this.gasAmount -= car.capacity;
      car.gasAmount += car.capacity;
    } else {
      return 'not enough gas';
    }

  }
}


class Car {
  constructor(capacity = 100, gasAmount = 0) {
    this.capacity = capacity;
    this.gasAmount = gasAmount;
  }

}


var normal_station = new Station();
var ferrari = new Car();

normal_station.refill(ferrari);

console.log(normal_station);
console.log(ferrari);