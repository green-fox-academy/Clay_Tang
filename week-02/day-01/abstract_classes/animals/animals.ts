abstract class Animal {
  protected name: string
  protected age: number

  getName(): string {
    return this.name
  }


  abstract breed()
}

class BirdOrReptile extends Animal {

  constructor(name: string) {
    super()
    this.name = name
  }

  breed() {
    return 'laying eggs.'
  }
}

export class Reptile extends BirdOrReptile {}
export class Bird extends BirdOrReptile {}

export class Mammal extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }

  breed() {
    return 'pushing miniature versions out.'
  }
}