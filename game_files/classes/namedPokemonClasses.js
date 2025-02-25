const { Normal, Fire, Water, Grass } = require("./typesClasses");

class Rattata extends Normal {
  constructor(
    name,
    hitPoints,
    attackDamage,
    moves,
    speed,
    critChance,
    critModifier
  ) {
    super(
      name,
      hitPoints,
      attackDamage,
      moves,
      speed,
      critChance,
      critModifier
    );
    this.moves[0].name = "POW!";
  }
}

class Charmander extends Fire {
  constructor(
    name,
    hitPoints,
    attackDamage,
    moves,
    speed,
    critChance,
    critModifier
  ) {
    super(
      name,
      hitPoints,
      attackDamage,
      moves,
      speed,
      critChance,
      critModifier
    );
    this.moves[0].name = "POW!";
  }
}

class Squirtle extends Water {
  constructor(
    name,
    hitPoints,
    attackDamage,
    moves,
    speed,
    critChance,
    critModifier
  ) {
    super(
      name,
      hitPoints,
      attackDamage,
      moves,
      speed,
      critChance,
      critModifier
    );
    this.moves[0].name = "POW!";
  }
}

class Bulbasaur extends Grass {
  constructor(
    name,
    hitPoints,
    attackDamage,
    moves,
    speed,
    critChance,
    critModifier
  ) {
    super(
      name,
      hitPoints,
      attackDamage,
      moves,
      speed,
      critChance,
      critModifier
    );
    this.moves[0].name = "POW!";
  }
}

module.exports = { Rattata, Charmander, Squirtle, Bulbasaur };
