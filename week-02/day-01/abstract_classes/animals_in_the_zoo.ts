
abstract class Animal {
  name: string;
  age: number;
  gender: string;
  species: string;
  cute: boolean;
  constructor(name, age, gender, species, cute) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.cute = cute;
  }

  abstract getName(): string;
  abstract breed(): string;
}

import Flyable, { } from '../interfaces/flyable';

class Bird extends Animal implements Flyable {
  constructor(name, age?, gender?) {
    super(name, age, gender, 'Bird', false);
  }
  land(): void {
    console.log('Land');
  }
  fly(): void {
    console.log('FLY');
  }
  takeOff(): void {
    console.log('takeOff');
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return 'laying eggs';
  }
}

class Mammal extends Animal {

  constructor(name, age?, gender?) {
    super(name, age, gender, 'Bird', false);
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return 'pushing miniature versions out';
  }
}

class Reptile extends Animal {
  constructor(name, age?, gender?) {
    super(name, age, gender, 'Reptile', false);
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return 'laying eggs';
  }
}

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
