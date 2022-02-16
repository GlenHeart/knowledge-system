function Animal () {
  this.name = ''
  this.fly = function () {
    console.log(`${this.name} fly`)
  }
}

function Dog () {
  Animal.call(this)
}

Dog.prototype = new Animal() // Object.create({}, Animal.prototype)
Dog.prototype.constructor = Dog