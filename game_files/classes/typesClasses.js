const { Pokemon } = require("./pokemonClass");

class Normal extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Normal";
  }
  isEffectiveAgainst(pokemon) {
    return false;
  }
  isWeakTo(pokemon) {
    return false;
  }
}
class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Fire";
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "Grass") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(pokemon) {
    if (pokemon.type === "Water") {
      return true;
    } else {
      return false;
    }
  }
}
class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Water";
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "Fire") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(pokemon) {
    if (pokemon.type === "Grass") {
      return true;
    } else {
      return false;
    }
  }
}
class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Grass";
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "Water") {
      return true;
    } else {
      return false;
    }
  }
  isWeakTo(pokemon) {
    if (pokemon.type === "Fire") {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Normal, Fire, Water, Grass };
