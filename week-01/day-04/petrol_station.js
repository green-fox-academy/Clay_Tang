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

class Station{
  constructor(gasAmout=Number.MAX_SAFE_INTEGER){
    this.gasAmout = gasAmout;

  }
  refill(car){
    this.gasAmout -= car.capacity;
    car.gasAmout += car.capacity;
  }
}


class Car{
  constructor(capacity=100, gasAmout=0){
    this.capacity = capacity;
    this.gasAmout = gasAmout;
  }

}


var normal_station = new Station();
var ferrari = new Car();

normal_station.refill(ferrari);

console.log(normal_station);
console.log(ferrari);