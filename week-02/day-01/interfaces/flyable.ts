// Create a Flyable interface
// it should have land, fly and takeOff methods
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

interface Flyable{
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle{
  name: string;
  maxSpeed: number;
  color: string;

}
class Helicopter extends Vehicle implements Flyable {
  land() {
    console.log('Land.')
  }
  fly() {
    console.log('Fly.')
  }
  takeOff() {
    console.log('Takeoff')
  }
}


abstract class Animal {
  protected name: string
  protected age: number

  getName(): string {
    return this.name
  }

  abstract breed()
}

class Bird extends Animal implements Flyable {
  breed() {
    return 'laying eggs.'
  }
  land() {
    console.log('Bird Land.')
  }
  fly() {
    console.log('Bird Fly.')
  }
  takeOff() {
    console.log('Bird Takeoff')
  }
}
