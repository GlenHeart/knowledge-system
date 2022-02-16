function Animal () {}

Animal.prototype.fly = function () {
  console.log('i can fly')
}

function Bird (name) {
  this.name = name
}

Bird.prototype = new Animal()

console.log(new Bird('11').constructor, '11')