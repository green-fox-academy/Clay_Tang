interface Printable {
  printAllFields: () => void
}

class Todo implements Printable {
  private name: string
  private completed: boolean

  constructor(name) {
    this.name = name
    this.completed = false
  }

  complete() {
    this.completed = true
  }

  getName() {
    return this.name
  }

  getCompleted() {
    return this.completed
  }

  printAllFields() {
    console.log(`Left : ${this.name}, right : ${this.completed}`)
  }
}