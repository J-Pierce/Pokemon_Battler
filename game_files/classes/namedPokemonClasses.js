const { Normal, Fire, Water, Grass } = require("./typesClasses");

class Rattata extends Normal {
  constructor(name, hitPoints, attackDamage, move, critChance, critModifier) {
    super(name, hitPoints, attackDamage, move, critChance, critModifier);
    this.move = move;
  }
}

class Charmander extends Fire {
  constructor(name, hitPoints, attackDamage, move, critChance, critModifier) {
    super(name, hitPoints, attackDamage, move, critChance, critModifier);
    this.move = move;
  }
}

class Squirtle extends Water {
  constructor(name, hitPoints, attackDamage, move, critChance, critModifier) {
    super(name, hitPoints, attackDamage, move, critChance, critModifier);
    this.move = move;
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitPoints, attackDamage, move, critChance, critModifier) {
    super(name, hitPoints, attackDamage, move, critChance, critModifier);
    this.move = move;
  }
}

module.exports = { Rattata, Charmander, Squirtle, Bulbasaur };
